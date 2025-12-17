import React, { use, useEffect, useState } from "react";
import { BsEye } from "react-icons/bs";
import { BiEdit } from "react-icons/bi";
import { MdCancel, MdDelete, MdDone } from "react-icons/md";
import useAxios from "../../../hooks/useAxios";
import AuthContext from "../../../context/AuthContext";
import { RiArrowDropLeftFill, RiArrowLeftBoxFill, RiArrowLeftLine, RiArrowRightLine } from "react-icons/ri";
import { NavLink } from "react-router";
import Swal from 'sweetalert2'
import useRole from "../../../hooks/useRole";

const AllDonationRequests = () => {
    const axios = useAxios();
    const { user } = use(AuthContext);
    const [requests, setRequests] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [reFetch, setRefetch] = useState(0);
    const { role } = useRole();
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
                        totalPages > 0 ? <div className="bg-white dark:bg-gray-900/50 rounded-lg shadow-sm p-6">
                            {/* <!-- Chips --> */}
                            <div className="flex gap-3 mb-4 overflow-x-auto pb-2">
                                <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-primary/20 px-4">
                                    <p className="text-gray-900 dark:text-gray-50 text-sm font-medium leading-normal">
                                        All
                                    </p>
                                </button>
                                <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-gray-100 dark:bg-gray-800 px-4 hover:bg-gray-200 dark:hover:bg-gray-700">
                                    <p className="text-gray-800 dark:text-gray-200 text-sm font-medium leading-normal">
                                        Pending
                                    </p>
                                </button>
                                <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-gray-100 dark:bg-gray-800 px-4 hover:bg-gray-200 dark:hover:bg-gray-700">
                                    <p className="text-gray-800 dark:text-gray-200 text-sm font-medium leading-normal">
                                        In Progress
                                    </p>
                                </button>
                                <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-gray-100 dark:bg-gray-800 px-4 hover:bg-gray-200 dark:hover:bg-gray-700">
                                    <p className="text-gray-800 dark:text-gray-200 text-sm font-medium leading-normal">
                                        Done
                                    </p>
                                </button>
                                <button className="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-gray-100 dark:bg-gray-800 px-4 hover:bg-gray-200 dark:hover:bg-gray-700">
                                    <p className="text-gray-800 dark:text-gray-200 text-sm font-medium leading-normal">
                                        Canceled
                                    </p>
                                </button>
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
                                            requests.map(el => <tr key={el._id} className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
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
                                                        <NavLink to={`/requests/${el._id}`}>
                                                            <button className=" text-subtle-text-light hover:text-primary dark:text-subtle-text-dark dark:hover:text-primary" title="View details"><span className="material-symbols-outlined text-2xl"><BsEye></BsEye></span></button>
                                                        </NavLink>
                                                        {
                                                            el.status === "inprogress" && <><button onClick={() => handleChangeStatus(el._id, "done")} className="text-subtle-text-light hover:text-primary dark:text-subtle-text-dark dark:hover:text-primary" title="Edit request"><span className="material-symbols-outlined text-2xl"><MdDone></MdDone></span></button>
                                                                <button onClick={() => handleChangeStatus(el._id, "cancel")} className="text-subtle-text-light hover:text-primary dark:text-subtle-text-dark dark:hover:text-primary" title="Edit request"><span className="material-symbols-outlined text-2xl"><MdCancel></MdCancel></span></button>
                                                            </>
                                                        }
                                                        {
                                                            role == 'admin' || role == 'donor' ? <> <button className="text-subtle-text-light hover:text-primary dark:text-subtle-text-dark dark:hover:text-primary" title="Edit request"><span className="material-symbols-outlined text-2xl"><BiEdit></BiEdit></span></button>
                                                                <button onClick={() => handleDelete(el._id)} className="text-error/80 hover:text-error" title="Delete request"><span className="material-symbols-outlined text-2xl">< MdDelete /></span></button></> : ''
                                                        }

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
