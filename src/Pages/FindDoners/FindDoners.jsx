import React from "react";
import { BiCalendar, BiDownArrow, BiSearch } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";

const FindDoners = () => {
    return (
        <div>
            <div className="container mx-auto px-4 py-8">
                {/* <!-- Page Heading --> */}
                <div className="flex flex-wrap justify-between items-center gap-4 mb-8">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-text-light dark:text-text-dark text-4xl font-black leading-tight tracking-[-0.033em]">
                            Find a Donor
                        </h1>
                        <p className="text-gray-500 dark:text-gray-400 text-base font-normal leading-normal">
                            Use the filters below to find donors in your area.
                        </p>
                    </div>
                </div>
                {/* <!-- Filters Section --> */}
                <div className="mb-8 p-6 bg-card-light dark:bg-card-dark rounded-xl shadow-sm  ">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-end">
                        <label className="flex flex-col w-full">
                            <p className="text-sm font-medium pb-2">
                                Blood Group
                            </p>
                            <select className="form-select flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0e1b17] dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-[#d0e7e0] dark:border-gray-600 bg-background-light dark:bg-gray-700/50 focus:border-primary h-12 p-3 text-base font-normal leading-normal">
                                <option disabled>select Blood Group</option>
                                <option>A+</option>
                                <option>A-</option>
                                <option>B+</option>
                                <option>B-</option>
                                <option>AB+</option>
                                <option>AB-</option>
                                <option>O+</option>
                                <option>O-</option>
                            </select>
                        </label>
                        {/* <!-- District --> */}
                        <div>
                            <label className="flex flex-col">
                                <p className="text-[#0e1b17] dark:text-gray-200 text-sm font-medium leading-normal pb-2">
                                    District
                                </p>
                                <select className="form-select flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0e1b17] dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-[#d0e7e0] dark:border-gray-600 bg-background-light dark:bg-gray-700/50 focus:border-primary h-12 p-3 text-base font-normal leading-normal">
                                    <option disabled>Select District</option>
                                    <option>dhaka</option>
                                </select>
                            </label>
                        </div>
                        {/* <!-- Upazila --> */}
                        <div className="">
                            <label className="flex flex-col">
                                <p className="text-[#0e1b17] dark:text-gray-200 text-sm font-medium leading-normal pb-2">
                                    Upazila
                                </p>
                                <select className="form-select flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-dark dark:text-gray-400 focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-[#d0e7e0] dark:border-gray-600 bg-background-light/50 dark:bg-gray-800/50 h-12 p-3 text-base font-normal leading-normal ">
                                    <option disabled>Select Upazila</option>
                                    <option>Raipura</option>
                                </select>
                            </label>
                        </div>
                        <button className="flex w-full lg:w-auto min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] gap-2">
                            <span className="material-symbols-outlined">
                                <BiSearch></BiSearch>
                            </span>
                            <span className="truncate">Search</span>
                        </button>
                    </div>
                </div>
                {/* <!-- Results Section Header --> */}
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-lg font-semibold">
                        Showing 12 results
                    </h3>
                    <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary/20 text-primary dark:bg-primary/30 dark:text-white text-sm font-medium gap-2">
                        <span className="material-symbols-outlined text-base">
                            <BiDownArrow></BiDownArrow>
                        </span>
                        <span className="truncate">Download as PDF</span>
                    </button>
                </div>
                {/* <!-- Donor Cards Grid --> */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {/* <!-- Sample Donor Card 1 --> */}
                    <div className="bg-card-light dark:bg-card-dark rounded-2xl shadow-md p-6 flex flex-col items-center text-center   ">
                        <img
                            className="size-24 rounded-full mb-4 object-cover"
                            data-alt="Portrait of John Doe"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuABHx7SKL6B5Z3jX3dyhoRFb4KuXhv5zknc3I1GNxE821TNaGe1klgC5HKxpyNXoUzZfBcPWK5UFABluldYlE5PheSuamlqBIaeyKeGeLRc-Xh_yfPCxEDZ7v-RrwYQ3tH6l6cATg3cL_FKrLCXE9G37HIrI5IYmt5Yb2iOBdj8ZJ0VpmzzEiaXrjliBYtgKaV8pvD8RuWYqzpSMbxn4C3SemLUfETxQyrTXt50iRwHWjdKxrOG8jYAwPpodhnAmPFHvnsH0Ye7Fv8"
                        />
                        <h4 className="text-lg font-bold text-text-light dark:text-text-dark">
                            John Doe
                        </h4>
                        <div className="flex gap-2 items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                            <CiLocationOn></CiLocationOn>
                            <span>Dhaka, Mirpur </span>
                        </div>
                        <div className="inline-flex items-center bg-red-100 dark:bg-red-900/40 text-red-700 dark:text-red-300 text-sm font-bold px-3 py-1 rounded-full mb-4">
                            O+
                        </div>
                        <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 mb-6">
                            <span className="material-symbols-outlined text-sm mr-1">
                                <BiCalendar></BiCalendar>
                            </span>
                            <span>Last donated: 3 months ago</span>
                        </div>
                        <button className="w-full flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary/20 text-primary dark:bg-primary/30 dark:text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/30 dark:hover:bg-primary/40 transition-colors">
                            <span className="truncate">Contact</span>
                        </button>
                    </div>
                    {/* <!-- Sample Donor Card 2 --> */}
                    <div className="bg-card-light dark:bg-card-dark rounded-2xl shadow-md p-6 flex flex-col items-center text-center   ">
                        <img
                            className="size-24 rounded-full mb-4 object-cover"
                            data-alt="Portrait of Jane Smith"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrkm6suS4HXVt0RWOgwLIh8TYSVE3CdPEy8LV1cX5-NkydHbFB-QaHEMF3N7_TJl1dEZe11A0d--iJ_5RSkw-2j6t4iWOtH86-d02NU9pHyRlPT9rj9f7DGPWddAZ814sYXkhrpyQL9lOiLvhNLZAGmNw7cOFlBGxx4STj79ms0lNZWwl5ptSmNuWwvVU439NNeOeAaFE_S9h2xyIYyqRyMH5dChbrMxhUs7l6oiVMT393Ac3D6m4ti_I5hOkelsLlqS9sYNnBKYI"
                        />
                        <h4 className="text-lg font-bold text-text-light dark:text-text-dark">
                            Jane Smith
                        </h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                            Chittagong, Kotwali
                        </p>
                        <div className="inline-flex items-center bg-red-100 dark:bg-red-900/40 text-red-700 dark:text-red-300 text-sm font-bold px-3 py-1 rounded-full mb-4">
                            A+
                        </div>
                        <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 mb-6">
                            <span className="material-symbols-outlined text-sm mr-1">
                                calendar_today
                            </span>
                            <span>Last donated: 6 months ago</span>
                        </div>
                        <button className="w-full flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary/20 text-primary dark:bg-primary/30 dark:text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/30 dark:hover:bg-primary/40 transition-colors">
                            <span className="truncate">Contact</span>
                        </button>
                    </div>
                    {/* <!-- Add more donor cards as needed --> */}
                    <div className="bg-card-light dark:bg-card-dark rounded-2xl shadow-md p-6 flex flex-col items-center text-center border  ">
                        <img
                            className="size-24 rounded-full mb-4 object-cover"
                            data-alt="Portrait of Alex Johnson"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDOxDJ6D2aVRpYAp6zhY-BflLQSGvxQtyebNZPxyU2fl2zLHK9RTJiDHZBXcqJ_7o6B5tBaaCilmVJGY5VG_qrPCTWsFl8HePy28-3atB0FAIMZe0Tgt9ZfSbXMB1YtzhOs-OowN4W4EJ7V3EyDmL5qlLyorDaE5SsI239K0U-C60J3ZWGNN9U9ZOPJnq_SC8RNA11De3qocmMMzTnTI7rXRlvjPMYID3vcOwUty3PQceS2vbL06_sh80zX2xczYCXaM9dkrmCNp0"
                        />
                        <h4 className="text-lg font-bold text-text-light dark:text-text-dark">
                            Alex Johnson
                        </h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                            Dhaka, Gulshan
                        </p>
                        <div className="inline-flex items-center bg-red-100 dark:bg-red-900/40 text-red-700 dark:text-red-300 text-sm font-bold px-3 py-1 rounded-full mb-4">
                            B-
                        </div>
                        <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 mb-6">
                            <span className="material-symbols-outlined text-sm mr-1">
                                calendar_today
                            </span>
                            <span>Last donated: 1 year ago</span>
                        </div>
                        <button className="w-full flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary/20 text-primary dark:bg-primary/30 dark:text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/30 dark:hover:bg-primary/40 transition-colors">
                            <span className="truncate">Contact</span>
                        </button>
                    </div>
                    <div className="bg-card-light dark:bg-card-dark rounded-2xl shadow-md p-6 flex flex-col items-center text-center border  ">
                        <img
                            className="size-24 rounded-full mb-4 object-cover"
                            data-alt="Portrait of Maria Garcia"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZlBgv9e7JchCqoS4Yn9J2sZlSoZSQUG7GO50xUuEMXuoqWEDq202YAm5Z1hXuAhlbBr6y6Telx_AJjD0j55hYg-_clUiN19PXyiQiUO_UJQPvO0APEPTDgRTOhTykN-B-J5j0imINw2RU0jlqTGXvcXrBKV_7tTgSztqaJDmAcoNa-jmuF12WQoTXhVu-UnfGm3WTSuIUPxUc_NGy1bWXjo1LaMWRBuk8xEfuFuUybSTpaoyZ5KK8j5se1lyWClJXwnNI90cKJzA"
                        />
                        <h4 className="text-lg font-bold text-text-light dark:text-text-dark">
                            Maria Garcia
                        </h4>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                            Sylhet, Sadar
                        </p>
                        <div className="inline-flex items-center bg-red-100 dark:bg-red-900/40 text-red-700 dark:text-red-300 text-sm font-bold px-3 py-1 rounded-full mb-4">
                            AB+
                        </div>
                        <div className="flex items-center text-xs text-gray-500 dark:text-gray-400 mb-6">
                            <span className="material-symbols-outlined text-sm mr-1">
                                calendar_today
                            </span>
                            <span>Last donated: 2 months ago</span>
                        </div>
                        <button className="w-full flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary/20 text-primary dark:bg-primary/30 dark:text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/30 dark:hover:bg-primary/40 transition-colors">
                            <span className="truncate">Contact</span>
                        </button>
                    </div>
                </div>
                {/* <!-- Empty State Example (comment out or remove when showing results) --> */}
                {/* <!-- 
                <div className="text-center py-20 px-4">
                    <div className="inline-block p-6 bg-primary/10 rounded-full mb-4">
                        <span className="material-symbols-outlined text-5xl text-primary">search_off</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">No Donors Found</h3>
                    <p className="text-gray-500 dark:text-gray-400">No donors match your search criteria.</p>
                    <p className="text-gray-500 dark:text-gray-400">Try adjusting your filters to find more results.</p>
                </div>
                --> */}
                {/* <!-- Pagination --> */}
                <nav
                    aria-label="Pagination"
                    className="flex items-center justify-center gap-4 mt-12"
                >
                    <a
                        className="flex items-center justify-center size-10 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-primary/10 dark:hover:bg-primary/20"
                        href="#"
                    >
                        <span className="material-symbols-outlined">
                            chevron_left
                        </span>
                    </a>
                    <a
                        className="flex items-center justify-center size-10 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-primary/10 dark:hover:bg-primary/20"
                        href="#"
                    >
                        1
                    </a>
                    <a
                        aria-current="page"
                        className="flex items-center justify-center size-10 rounded-lg bg-primary text-white font-bold"
                        href="#"
                    >
                        2
                    </a>
                    <a
                        className="flex items-center justify-center size-10 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-primary/10 dark:hover:bg-primary/20"
                        href="#"
                    >
                        3
                    </a>
                    <span className="text-gray-500 dark:text-gray-400">
                        ...
                    </span>
                    <a
                        className="flex items-center justify-center size-10 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-primary/10 dark:hover:bg-primary/20"
                        href="#"
                    >
                        8
                    </a>
                    <a
                        className="flex items-center justify-center size-10 rounded-lg text-gray-500 dark:text-gray-400 hover:bg-primary/10 dark:hover:bg-primary/20"
                        href="#"
                    >
                        <span className="material-symbols-outlined">
                            chevron_right
                        </span>
                    </a>
                </nav>
            </div>
        </div>
    );
};

export default FindDoners;
