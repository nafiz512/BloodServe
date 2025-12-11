import React from "react";
import { NavLink } from "react-router";

const Requests = () => {
    return (
        <div>
            <main className="flex w-full flex-1 flex-col items-center px-4 py-8 sm:px-6 lg:px-8">
                <div className="w-full max-w-6xl">
                    {/* <!-- PageHeading --> */}
                    <div className="mb-8">
                        <h1 className="text-4xl font-black tracking-tighter text-gray-900 dark:text-white">
                            Public Donation Requests
                        </h1>
                        <p className="mt-2 text-lg text-primary/80 dark:text-primary/70">
                            Find an opportunity to save a life near you.
                        </p>
                    </div>
                    {/* <!-- Filters --> */}
                    <div className="mb-8 flex flex-col gap-4 rounded-xl border border-gray-100 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-background-dark/50 sm:flex-row sm:items-center">
                        <div className="relative w-full sm:w-auto sm:flex-1">
                            <select
                                className="w-full rounded-lg border-gray-100 bg-background-light text-sm shadow-sm  dark:border-gray-600 dark:bg-background-dark dark:text-gray-200 py-2"
                                id="district-filter"
                                name="district-filter"
                            >
                                <option disabled>Filter by District</option>
                                <option>Dhaka</option>
                                <option>Chittagong</option>
                                <option>Sylhet</option>
                            </select>
                        </div>
                        <div className="relative w-full sm:w-auto sm:flex-1">
                            <select
                                className="w-full rounded-lg border-gray-300 bg-background-light text-sm shadow-sm focus:border-primary focus:ring-primary dark:border-gray-600 dark:bg-background-dark dark:text-gray-200 py-2"
                                id="blood-group-filter"
                                name="blood-group-filter"
                            >
                                <option>Filter by Blood Group</option>
                                <option>A+</option>
                                <option>A-</option>
                                <option>B+</option>
                                <option>B-</option>
                                <option>AB+</option>
                                <option>AB-</option>
                                <option>O+</option>
                                <option>O-</option>
                            </select>
                        </div>
                        <button className="flex h-10 min-w-[120px] cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-primary px-4 text-sm font-bold text-white shadow-sm transition-opacity hover:opacity-90">
                            <span className="truncate">Apply Filters</span>
                        </button>
                    </div>
                    {/* <!-- Request Cards Grid --> */}
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {/* <!-- Card 1 --> */}
                        <div className="flex flex-col rounded-xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-lg dark:border-gray-700 dark:bg-background-dark/50">
                            <div className="flex flex-col justify-between gap-4 p-5">
                                <div className="flex items-start justify-between">
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                                        John Doe
                                    </h3>
                                    <div className="flex h-7 items-center justify-center rounded-full bg-red-100 px-3 text-sm font-bold text-red-700 dark:bg-red-900/50 dark:text-red-300">
                                        A+
                                    </div>
                                </div>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    Urgent need for a surgery tomorrow morning.
                                    Any help would be greatly appreciated...
                                </p>
                                <div className="mt-2 space-y-2 text-sm text-gray-600 dark:text-gray-300">
                                    <div className="flex items-center gap-2">
                                        <span className="material-symbols-outlined text-base text-primary">
                                            location_on
                                        </span>
                                        <span>City Hospital, Dhaka</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="material-symbols-outlined text-base text-primary">
                                            schedule
                                        </span>
                                        <span>Posted 2 hours ago</span>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-auto border-t border-gray-200 p-4 dark:border-gray-700">
                                <NavLink to={"/requests/1"}>
                                    <button className="w-full flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-sm font-bold text-white transition-opacity hover:opacity-90">
                                        <span className="truncate">
                                            View Details
                                        </span>
                                    </button>
                                </NavLink>
                            </div>
                        </div>
                        {/* <!-- Card 2 --> */}
                        <div className="flex flex-col rounded-xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-lg dark:border-gray-700 dark:bg-background-dark/50">
                            <div className="flex flex-col justify-between gap-4 p-5">
                                <div className="flex items-start justify-between">
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                                        Jane Smith
                                    </h3>
                                    <div className="flex h-7 items-center justify-center rounded-full bg-red-100 px-3 text-sm font-bold text-red-700 dark:bg-red-900/50 dark:text-red-300">
                                        O-
                                    </div>
                                </div>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    Patient requires immediate transfusion for
                                    an ongoing procedure. Please help.
                                </p>
                                <div className="mt-2 space-y-2 text-sm text-gray-600 dark:text-gray-300">
                                    <div className="flex items-center gap-2">
                                        <span className="material-symbols-outlined text-base text-primary">
                                            location_on
                                        </span>
                                        <span>Central Medical, Chittagong</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="material-symbols-outlined text-base text-primary">
                                            schedule
                                        </span>
                                        <span>Posted 5 hours ago</span>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-auto border-t border-gray-200 p-4 dark:border-gray-700">
                                <button className="w-full flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-sm font-bold text-white transition-opacity hover:opacity-90">
                                    <span className="truncate">
                                        View Details
                                    </span>
                                </button>
                            </div>
                        </div>
                        {/* <!-- Card 3 --> */}
                        <div className="flex flex-col rounded-xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-lg dark:border-gray-700 dark:bg-background-dark/50">
                            <div className="flex flex-col justify-between gap-4 p-5">
                                <div className="flex items-start justify-between">
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                                        Robert Brown
                                    </h3>
                                    <div className="flex h-7 items-center justify-center rounded-full bg-red-100 px-3 text-sm font-bold text-red-700 dark:bg-red-900/50 dark:text-red-300">
                                        B+
                                    </div>
                                </div>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    Emergency case due to an accident. In need
                                    of 3 bags of B+ blood urgently.
                                </p>
                                <div className="mt-2 space-y-2 text-sm text-gray-600 dark:text-gray-300">
                                    <div className="flex items-center gap-2">
                                        <span className="material-symbols-outlined text-base text-primary">
                                            location_on
                                        </span>
                                        <span>United Hospital, Dhaka</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="material-symbols-outlined text-base text-primary">
                                            schedule
                                        </span>
                                        <span>Posted 8 hours ago</span>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-auto border-t border-gray-200 p-4 dark:border-gray-700">
                                <button className="w-full flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-sm font-bold text-white transition-opacity hover:opacity-90">
                                    <span className="truncate">
                                        View Details
                                    </span>
                                </button>
                            </div>
                        </div>
                        {/* <!-- Card 4 --> */}
                        <div className="flex flex-col rounded-xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-lg dark:border-gray-700 dark:bg-background-dark/50">
                            <div className="flex flex-col justify-between gap-4 p-5">
                                <div className="flex items-start justify-between">
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                                        Maria Garcia
                                    </h3>
                                    <div className="flex h-7 items-center justify-center rounded-full bg-red-100 px-3 text-sm font-bold text-red-700 dark:bg-red-900/50 dark:text-red-300">
                                        AB+
                                    </div>
                                </div>
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    Thalassemia patient requires regular blood
                                    transfusion. Your donation can save a life.
                                </p>
                                <div className="mt-2 space-y-2 text-sm text-gray-600 dark:text-gray-300">
                                    <div className="flex items-center gap-2">
                                        <span className="material-symbols-outlined text-base text-primary">
                                            location_on
                                        </span>
                                        <span>Sylhet General Hospital</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="material-symbols-outlined text-base text-primary">
                                            schedule
                                        </span>
                                        <span>Posted 1 day ago</span>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-auto border-t border-gray-200 p-4 dark:border-gray-700">
                                <button className="w-full flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-sm font-bold text-white transition-opacity hover:opacity-90">
                                    <span className="truncate">
                                        View Details
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Requests;
