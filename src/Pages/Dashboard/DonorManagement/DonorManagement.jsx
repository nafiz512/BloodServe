import React, { useEffect, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaAngleDown, FaArrowLeft, FaArrowRight } from "react-icons/fa";
// import useAxios from "../../../hooks/useAxios";
import Swal from "sweetalert2";
import useSecureAxios from "../../../hooks/useSecureAxios";

const DonorManagement = () => {
    const axiosSecure = useSecureAxios();
    // const axios = useAxios()

    // 💡 NEW/UPDATED STATE: Manage users, current page, total pages, and limit
    const [users, setUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [totalCount, setTotalCount] = useState(0);
    const [filteredUsers, setFilterUsers] = useState([]);
    const [refetch, setRefetch] = useState(0)

    const limit = 4;
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const res = await axiosSecure.get(
                    `/all-users?page=${currentPage}&limit=${limit}`
                );
                setUsers(res.data.data);
                setFilterUsers(res.data.data)
                setTotalPages(res.data.totalPages);

                setTotalCount(res.data.totalCount);
            } catch (error) {
                Swal.fire({
                    icon: "error",
                    title: error.message,
                    text: "Something went wrong!",
                });
            }
        };

        fetchUsers();
    }, [axiosSecure, currentPage, refetch]);
    const handleFilterUsers = (e) => {
        const status = e.target.value;

        if (status === "all") {
            setFilterUsers(users);
        } else {
            const filtered = users.filter(user => user.status === status);
            setFilterUsers(filtered);
        }
    };
    const handleChangeStatus = (email, data) => {
        axiosSecure.patch(`/users/${email}`, data).then(res => {
            if (res.data.modifiedCount) {
                Swal.fire({
                    icon: "error",
                    title: "user is blocked",
                    text: "Something went wrong!",
                });
            }
            setRefetch(refetch + 1);
        })
    }

    return (
        <div>
            <div className="flex-1 p-8">
                <div className="mx-auto max-w-7xl">

                    {/* ... (Page Heading and Add User button) ... */}
                    <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
                        <h1 className="text-gray-900 dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">
                            All Users
                        </h1>

                    </div>
                    {/* */}
                    <div className="bg-white dark:bg-background-dark rounded-xl shadow-2xl border border-gray-200 dark:border-gray-800">
                        {/* ... (Filters) ... */}
                        <div className="flex items-center justify-end p-2 ">
                            <select
                                onChange={handleFilterUsers}
                                className="appearance-none border-2 border-gray-300 h-9 w-40 rounded-lg
               bg-background-light dark:bg-black/20 pl-4 pr-8
               text-gray-900 dark:text-white text-sm font-medium
               focus:outline-none focus:ring-2 focus:ring-primary"
                            >
                                <option value="all">All</option>
                                <option value="active">Active</option>
                                <option value="blocked">Blocked</option>
                            </select>
                        </div>

                        {/* */}
                        <div className="overflow-x-auto mb-6">
                            <table className="w-full  text-left">
                                <thead className="bg-gray-50 dark:bg-black/10">
                                    <tr>
                                        <th className="px-6 py-4 text-left text-gray-600 dark:text-gray-400 text-xs font-medium uppercase tracking-wider">
                                            User
                                        </th>
                                        <th className="px-6 py-4 text-left text-gray-600 dark:text-gray-400 text-xs font-medium uppercase tracking-wider">
                                            Email
                                        </th>
                                        <th className="px-6 py-4 text-left text-gray-600 dark:text-gray-400 text-xs font-medium uppercase tracking-wider">
                                            Role
                                        </th>
                                        <th className="px-6 py-4 text-left text-gray-600 dark:text-gray-400 text-xs font-medium uppercase tracking-wider">
                                            Status
                                        </th>
                                        <th className="px-6 py-4 text-right text-gray-600 dark:text-gray-400 text-xs font-medium uppercase tracking-wider">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 dark:divide-gray-800">
                                    {/* 💡 MAPPING THE FETCHED PAGINATED USERS */}
                                    {filteredUsers.length > 0 ? (
                                        filteredUsers.map(el => (
                                            <tr key={el._id} className="hover:bg-gray-50 dark:hover:bg-black/10">
                                                <td className="px-6 py-2 whitespace-nowrap">
                                                    <div className="flex items-center gap-3">
                                                        <img
                                                            className="h-10 w-10 rounded-full"
                                                            data-alt={`User avatar for ${el.name}`}
                                                            src={el.photoURL}
                                                            onError={(e) => { e.target.onerror = null; e.target.src = '/default-avatar.png' }} // Fallback image
                                                        />
                                                        <span className="text-gray-900 dark:text-white text-sm font-medium">
                                                            {el.name}
                                                        </span>
                                                    </div>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-gray-500 dark:text-gray-400 text-sm">
                                                    {el.email}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-gray-500 dark:text-gray-400 text-sm">
                                                    {el.role}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap">
                                                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${el.status === 'blocked' ? 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300' :
                                                        'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300'
                                                        }`}>
                                                        {el.status || 'Active'} {/* Assuming 'Active' is default */}
                                                    </span>
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">

                                                    <div className="dropdown dropdown-left">

                                                        <button tabIndex={0} role="button" className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary">
                                                            <span className="material-symbols-outlined">
                                                                <BsThreeDotsVertical />
                                                            </span>
                                                        </button>
                                                        <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                                                            {
                                                                el.status == 'blocked' ? <li onClick={() => handleChangeStatus(el.email, { status: 'active' })}><a>Unblock</a></li> : <li onClick={() => handleChangeStatus(el.email, { status: 'blocked' })}><a>Block</a></li>
                                                            }
                                                            <li onClick={() => handleChangeStatus(el.email, { role: 'admin' })}><a >make admin</a></li>
                                                            <li onClick={() => handleChangeStatus(el.email, { role: 'volunteer' })}><a >make volunteer</a></li>
                                                        </ul>
                                                    </div>

                                                </td>
                                            </tr>
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan="5" className="px-6 py-8 text-center text-gray-500">
                                                No users found matching the criteria.
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                        <div className="flex items-center justify-between px-6 py-4 border-t border-gray-200 dark:border-gray-800">
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                                Showing page <span className="font-semibold">{currentPage}</span> of{" "}
                                <span className="font-semibold">{totalPages}</span> — Total Users:{" "}
                                <span className="font-semibold">{totalCount}</span>
                            </p>

                            <div className="flex items-center gap-2">
                                {/* Previous Button */}
                                <button
                                    disabled={currentPage === 1}
                                    onClick={() => setCurrentPage(prev => prev - 1)}
                                    className={`flex items-center justify-center h-9 w-9 rounded-md border
                ${currentPage === 1
                                            ? "cursor-not-allowed opacity-50"
                                            : "hover:bg-gray-100 dark:hover:bg-gray-800"
                                        }`}
                                >
                                    <FaArrowLeft />
                                </button>

                                {/* Page Numbers */}
                                {[...Array(totalPages).keys()].map(page => (
                                    <button
                                        key={page}
                                        onClick={() => setCurrentPage(page + 1)}
                                        className={`h-9 w-9 rounded-md text-sm font-semibold
                    ${currentPage === page + 1
                                                ? "bg-primary text-white"
                                                : "hover:bg-gray-100 dark:hover:bg-gray-800"
                                            }`}
                                    >
                                        {page + 1}
                                    </button>
                                ))}

                                {/* Next Button */}
                                <button
                                    disabled={currentPage === totalPages}
                                    onClick={() => setCurrentPage(prev => prev + 1)}
                                    className={`flex items-center justify-center h-9 w-9 rounded-md border
                ${currentPage === totalPages
                                            ? "cursor-not-allowed opacity-50"
                                            : "hover:bg-gray-100 dark:hover:bg-gray-800"
                                        }`}
                                >
                                    <FaArrowRight />
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default DonorManagement;