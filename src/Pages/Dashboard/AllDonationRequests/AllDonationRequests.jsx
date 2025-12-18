import React, { use, useEffect, useState } from "react";
import { BsEye, BsThreeDotsVertical } from "react-icons/bs";
import { BiEdit } from "react-icons/bi";
import { MdCancel, MdDelete, MdDone } from "react-icons/md";
// import useAxios from "../../../hooks/useAxios";
import AuthContext from "../../../context/AuthContext";
import { RiArrowDropLeftFill, RiArrowLeftBoxFill, RiArrowLeftLine, RiArrowRightLine } from "react-icons/ri";
import { NavLink } from "react-router";
import Swal from 'sweetalert2'
import useRole from "../../../hooks/useRole";
import useSecureAxios from "../../../hooks/useSecureAxios";

const AllDonationRequests = () => {
    const axios = useSecureAxios();
    const { user } = use(AuthContext);
    const [requests, setRequests] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [reFetch, setRefetch] = useState(0);
    const { role } = useRole();
    const [filterStatus, setFilterStatus] = useState("all");

    const limit = 4;

    useEffect(() => {
        if (!user?.email) return;

        const fetchRequests = async () => {
            let res = []
            if (role == 'admin' || role == 'volunteer') {
                res = await axios.get(
                    `/donation-requests?page=${page}&limit=${limit}`
                );
            }
            else {
                res = await axios.get(
                    `/donation-requests?email=${user.email}&page=${page}&limit=${limit}`
                );
            }
            setRequests(res.data.data);
            setTotalPages(res.data.totalPages);
        };

        fetchRequests();
    }, [axios, user.email, page, reFetch, role]);

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
    const filteredRequests =
        filterStatus === "all"
            ? requests
            : requests.filter(req => req.status === filterStatus);


    return (
        <div>
            <div className="flex-1 p-8">
                <div className="w-full max-w-7xl mx-auto">
                    {/* <!-- PageHeading --> */}
                    <div className="mb-6">
                        <p className="text-gray-900 dark:text-gray-50 text-4xl font-black leading-tight tracking-[-0.033em]">
                            All Donation Requests
                        </p>
                    </div>
                    {
                        totalPages > 0 ? <div className="bg-white w-full dark:bg-gray-900/50 rounded-lg shadow-2xl p-6">

                            <div className="flex gap-3 w-full mb-4 overflow-x-auto pb-2">
                                <div className="join w-full">
                                    <input
                                        className="join-item btn "
                                        type="radio"
                                        name="options"
                                        aria-label="All"
                                        checked={filterStatus === "all"}
                                        onChange={() => setFilterStatus("all")}
                                    />
                                    <input
                                        className="join-item btn "
                                        type="radio"
                                        name="options"
                                        aria-label="Pending"
                                        checked={filterStatus === "pending"}
                                        onChange={() => setFilterStatus("pending")}
                                    />
                                    <input
                                        className="join-item btn "
                                        type="radio"
                                        name="options"
                                        aria-label="In Progress"
                                        checked={filterStatus === "inprogress"}
                                        onChange={() => setFilterStatus("inprogress")}
                                    />
                                    <input
                                        className="join-item btn "
                                        type="radio"
                                        name="options"
                                        aria-label="Done"
                                        checked={filterStatus === "done"}
                                        onChange={() => setFilterStatus("done")}
                                    />
                                    <input
                                        className="join-item btn "
                                        type="radio"
                                        name="options"
                                        aria-label="Canceled"
                                        checked={filterStatus === "cancel"}
                                        onChange={() => setFilterStatus("cancel")}
                                    />
                                </div>
                            </div>

                            {/* <!-- Table --> */}
                            <div className="overflow-x-auto">
                                <table className="w-full text-left">
                                    <thead>
                                        <tr className="border-b border-gray-200 dark:border-gray-700">
                                            <th className="px-4 py-3 text-sm font-medium text-gray-600 dark:text-gray-400">
                                                Recipient Name
                                            </th>
                                            <th className="px-4 py-3 text-sm font-medium text-gray-600 dark:text-gray-400">
                                                Location
                                            </th>
                                            <th className="px-4 py-3 text-sm font-medium text-gray-600 dark:text-gray-400">
                                                Date &amp; Time
                                            </th>
                                            <th className="px-4 py-3 text-sm font-medium text-gray-600 dark:text-gray-400">
                                                Blood Group
                                            </th>
                                            <th className="px-4 py-3 text-sm font-medium text-gray-600 dark:text-gray-400">
                                                Status
                                            </th>
                                            <th className="px-4 py-3 text-sm font-medium text-gray-600 dark:text-gray-400">Donor info</th>
                                            <th className="px-4 py-3 text-sm font-medium text-gray-600 dark:text-gray-400 text-center">
                                                Actions
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                                        {
                                            filteredRequests.map(el => <tr key={el._id} className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                                                <td className="px-4 py-4 text-sm font-medium text-gray-900 dark:text-gray-100">
                                                    {el.recipientName}
                                                </td>
                                                <td className="px-4 py-4 text-sm text-gray-600 dark:text-gray-300">
                                                    {
                                                        el.fullAddress
                                                    }
                                                </td>
                                                <td className="px-4 py-4 text-sm text-gray-600 dark:text-gray-300">
                                                    {el.donationDate}, {el.donationTime}
                                                </td>
                                                <td className="px-4 py-4 text-sm text-gray-600 dark:text-gray-300">
                                                    {el.bloodGroup}
                                                </td>
                                                <td className="px-4 py-4 text-sm">
                                                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                                                        {el.status}
                                                    </span>
                                                </td>
                                                <td className="px-4 py-4 text-sm">
                                                    {el.status === "inprogress" ? <><p>nafiz</p> <p>nafiz@gmail.com</p></> : "-"}
                                                </td>

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

                                                                {
                                                                    el.status === "inprogress" && <>
                                                                        <li onClick={() => handleChangeStatus(el._id, "done")} className="text-subtle-text-light hover:text-primary dark:text-subtle-text-dark dark:hover:text-primary" title="Edit request"><a>Done</a>
                                                                        </li>

                                                                        <li onClick={() => handleChangeStatus(el._id, "cancel")} className="text-subtle-text-light hover:text-primary dark:text-subtle-text-dark dark:hover:text-primary" title="Edit request"><a>Cancel</a></li>
                                                                    </>
                                                                }

                                                                {
                                                                    role == 'admin' || role == 'donor' ? <> <li className="text-subtle-text-light hover:text-primary dark:text-subtle-text-dark dark:hover:text-primary" title="Edit request"><NavLink to={`/dashboard/update-donation-request/${el._id}`} >Edit</NavLink></li>
                                                                        <li onClick={() => handleDelete(el._id)} className="text-error/80 hover:text-error" title="Delete request"><a >Delete</a></li></> : ''
                                                                }
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>)
                                        }
                                    </tbody>
                                </table>
                            </div>
                            {/* <!-- Pagination --> */}
                            <div className="flex items-center justify-between mt-6 px-1">
                                <div className="flex items-center gap-2">
                                    <span className="text-sm text-gray-600 dark:text-gray-400">
                                        Rows per page:
                                    </span>
                                    <select className="rounded border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm focus:ring-primary focus:border-primary h-8 py-0 pl-2 pr-7">
                                        <option>{limit}</option>

                                    </select>
                                </div>

                                <div className="flex items-center justify-center gap-4">
                                    <button
                                        disabled={page === 1}
                                        // hidden={page === 1}
                                        onClick={() => setPage(page - 1)}
                                        className="p-2 disabled:opacity-50"
                                    >
                                        <RiArrowLeftLine size={24} />
                                    </button>

                                    <span className="font-bold">
                                        Page {page} / {totalPages}
                                    </span>

                                    <button
                                        disabled={page === totalPages}
                                        onClick={() => setPage(page + 1)}
                                        className="p-2 disabled:opacity-50"
                                    >
                                        <RiArrowRightLine size={24} />
                                    </button>
                                </div>
                            </div>
                        </div> : "NO data to show crate donation Request"
                    }

                </div>
            </div>
        </div>
    );
};

export default AllDonationRequests;
