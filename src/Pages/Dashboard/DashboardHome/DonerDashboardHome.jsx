import React, { use, useEffect, useState } from "react";
import { NavLink } from "react-router";
// import useAxios from "../../../hooks/useAxios";
import AuthContext from "../../../context/AuthContext";
import { BsEye, BsThreeDotsVertical } from "react-icons/bs";
import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import useSecureAxios from "../../../hooks/useSecureAxios";

const DonerDashboardHome = () => {
    const axios = useSecureAxios()
    const { user } = use(AuthContext)
    const [requests, setRequests] = useState([])
    const [reFetch, setRefetch] = useState(0);
    // console.log(user);

    useEffect(() => {
        axios.get(`donation-requests-recent?email=${user?.email}&limit=3`).then(data => {
            setRequests(data.data)
        })
    }, [axios, user?.email, reFetch])
    // console.log(requests);
    const handleChangeStatus = (id, status) => {
        axios.patch(`/donation-request/${id}`, { status: status }).then(res => {

            if (res.data.modifiedCount) {
                Swal.fire("Saved!", "", "success");
                setRefetch(reFetch + 1)
            }
        }).catch(error => {
            Swal.fire(error.message);
        })
    }
    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure confirm to Delete?",
            showDenyButton: true,
            // showCancelButton: true,
            confirmButtonText: "Confirm",
            denyButtonText: `Cancel`
        }).then((result) => {
            if (result.isConfirmed) {

                axios.delete(`/donation-requests/${id}`).then(res => {
                    if (res.data.deletedCount) {
                        Swal.fire("Deleted!", "", "success");
                        setRefetch(reFetch + 1)
                    }
                }).catch(error => {
                    Swal.fire(error.message);
                })
            } else if (result.isDenied) {
                Swal.fire("Cancel deletion");
            }
        });
    }

    return <div className="w-full flex-1 bg-background-light p-4 pt-20 dark:bg-background-dark lg:pt-6 lg:p-6">
        <div className="mx-auto max-w-7xl">
            {/* Welcome Section */}
            <div className="mb-10 rounded-3xl bg-linear-to-r from-red-600 via-pink-600 to-rose-600 p-8 shadow-2xl text-white">
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                    Welcome back, {user?.displayName || "Hero"}! 🩸
                </h1>
                <p className="mt-4 text-xl opacity-90">
                    Thank you for your life-saving contributions. Together, we're making a real difference.
                </p>
            </div>
            {
                requests.length ? <div className="space-y-6">
                    <div className="rounded-2xl  bg-white p-6 shadow-md dark:border-border-dark dark:bg-gray-900">
                        <h2 className="text-xl font-semibold text-text-light dark:text-text-dark">Your recent donation requests</h2>
                        <div className="mt-4 overflow-x-auto">
                            <table className="w-full min-w-max text-left text-sm">
                                <thead className="border-b border-b-gray-200 ">
                                    <tr>
                                        <th className="p-4 font-semibold uppercase text-subtle-text-light dark:text-subtle-text-dark">Recipient Name</th>
                                        <th className="p-4 font-semibold uppercase text-subtle-text-light dark:text-subtle-text-dark">Location</th>
                                        <th className="p-4 font-semibold uppercase text-subtle-text-light dark:text-subtle-text-dark">Date/Time</th>
                                        <th className="p-4 font-semibold uppercase text-subtle-text-light dark:text-subtle-text-dark">Blood Group</th>
                                        <th className="p-4 font-semibold uppercase text-subtle-text-light dark:text-subtle-text-dark">Status</th>
                                        <th className="p-4 font-semibold uppercase text-subtle-text-light dark:text-subtle-text-dark">Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        requests.map(el => <tr key={el._id} className="border-b border-b-gray-200">
                                            <td className="p-4 align-top">{el.recipientName}</td>
                                            <td className="p-4 align-top">{el.fullAddress}</td>
                                            <td className="p-4 align-top">{el.donationDate} {el.donationTime}</td>
                                            <td className="p-4 align-top"><span className="inline-flex items-center rounded-md bg-red-100 px-2 py-1 text-xs font-medium text-red-700 dark:bg-red-900/50 dark:text-red-300">{el.bloodGroup}</span></td>
                                            <td className="p-4 align-top"><span className="inline-flex items-center rounded-md bg-green-100 px-2 py-1 text-xs font-medium text-green-700 dark:bg-green-900/50 dark:text-green-300">{el.status}</span></td>

                                            <td className="">
                                                <div className="flex gap-4 justify-center">

                                                    <div className="dropdown dropdown-left">

                                                        <button tabIndex={0} role="button" className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary">
                                                            <span className="material-symbols-outlined">
                                                                <BsThreeDotsVertical />
                                                            </span>
                                                        </button>
                                                        <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">

                                                            <li className=" text-subtle-text-light hover:text-primary dark:text-subtle-text-dark dark:hover:text-primary" title="View details"><NavLink to={`/requests/${el._id}`}>View </NavLink></li>

                                                            <li onClick={() => handleChangeStatus(el._id, "done")} className="text-subtle-text-light hover:text-primary dark:text-subtle-text-dark dark:hover:text-primary" title="Edit request"><a>Done</a>
                                                            </li>

                                                            <li onClick={() => handleChangeStatus(el._id, "cancel")} className="text-subtle-text-light hover:text-primary dark:text-subtle-text-dark dark:hover:text-primary" title="Edit request"><a>Cancel</a></li>



                                                            <li className="text-subtle-text-light hover:text-primary dark:text-subtle-text-dark dark:hover:text-primary" title="Edit request"><NavLink to={`/dashboard/update-donation-request/${el._id}`} >Edit</NavLink></li>
                                                            <li onClick={() => handleDelete(el._id)} className="text-error/80 hover:text-error" title="Delete request"><a >Delete</a></li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>)
                                    }
                                </tbody>
                            </table>
                        </div>
                        <div className="mt-6 flex justify-end">
                            <NavLink className="inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-sm font-medium text-white shadow-sm bg-green-900 hover:bg-primary/90 dark:ring-offset-background-dark" to={"/dashboard/donation-requests"}>View my all requests</NavLink>
                        </div>
                    </div>
                </div> : ""
            }

        </div>
    </div>;
};

export default DonerDashboardHome;
