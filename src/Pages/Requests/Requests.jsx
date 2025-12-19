import React, { useEffect, useState } from "react";
import { CgTime } from "react-icons/cg";
import { GrLocation } from "react-icons/gr";
import { MdDateRange } from "react-icons/md";
import { NavLink } from "react-router";
// import useAxios from "../../hooks/useAxios";
import useSecureAxios from "../../hooks/useSecureAxios";

const Requests = () => {
    const [requests, setRequests] = useState([])
    const axios = useSecureAxios()
    useEffect(() => {
        axios.get('/donation-requests/pendings').then(res => {
            setRequests((res.data))

        })
    }, [axios])
    return (
        <div className="flex w-full flex-1 flex-col items-center">
            <div className="w-full mt-10">
                {/* <!-- PageHeading --> */}
                <div className="mb-8 rounded-xl border border-gray-100 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-background-dark/50 sm:flex-row sm:items-center">
                    <h1 className="text-4xl font-black tracking-tighter text-gray-900 dark:text-white">
                        Public Donation Requests
                    </h1>
                    <p className="mt-2 text-lg text-primary/80 dark:text-primary/70">
                        Find an opportunity to save a life near you.
                    </p>
                </div>

                {/* <!-- Request Cards Grid --> */}
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {
                        requests?.map((el, index) => <div key={index} className="flex flex-col rounded-xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-lg dark:border-gray-700 dark:bg-background-dark/50">
                            <div className="flex flex-col justify-between gap-2 p-5">
                                <div className="flex items-start justify-between">
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                                        {el.recipientName}
                                    </h3>
                                    <div className="flex h-7 items-center justify-center rounded-full bg-red-100 px-3 text-sm font-bold text-red-700 dark:bg-red-900/50 dark:text-red-300">
                                        {el.bloodGroup}
                                    </div>
                                </div>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    {el.message}
                                </p>
                                <div className="mt-2 space-y-2 text-sm text-gray-600 dark:text-gray-300">
                                    <div className="flex items-center gap-2">
                                        <span className="material-symbols-outlined text-base text-primary">
                                            <GrLocation></GrLocation>
                                        </span>
                                        <span>{el.district}, {el.upazila}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="flex material-symbols-outlined text-base text-primary">
                                            <CgTime></CgTime>
                                        </span>
                                        <span>{el.donationDate} {el.donationTime}</span>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-auto border-t border-gray-200 p-4 dark:border-gray-700">
                                <NavLink to={`/requests/${el._id}`}>
                                    <button className="w-full flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-sm font-bold text-white transition-opacity hover:opacity-90">
                                        <span className="truncate">
                                            View Details
                                        </span>
                                    </button>
                                </NavLink>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Requests;
