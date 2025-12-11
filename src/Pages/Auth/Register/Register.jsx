import React from "react";

const Register = () => {
    return (
        <div>
            <main class="w-full max-w-7xl flex-1 px-4 py-8 sm:px-6 lg:px-8">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* <!-- Left Column --> */}
                    <div class="flex flex-col gap-4 text-center lg:text-left">
                        <h1 class="text-[#0e1b17] dark:text-white text-4xl md:text-5xl font-black leading-tight tracking-[-0.033em]">
                            Become a Hero. Register to Donate.
                        </h1>
                        <p class="text-[#4d9981] dark:text-gray-300 text-base md:text-lg font-normal leading-normal">
                            Join our community of donors and volunteers. Your
                            contribution can save lives. Signing up is quick and
                            easy.
                        </p>
                        <div class="mt-4 hidden lg:block">
                            <img
                                class="rounded-xl object-center w-full h-80 shadow-md"
                                data-alt="Abstract image of a modern, clean interior with medical context"
                                src="./register_logo.jpg"
                            />
                        </div>
                    </div>
                    {/* <!-- Right Column (Form Card) --> */}
                    <div class="bg-white dark:bg-background-dark/50 rounded-xl shadow-lg p-6 sm:p-8">
                        <h2 class="text-[#0e1b17] dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] mb-6">
                            Create Your Account
                        </h2>
                        <form class="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-5">
                            {/* <!-- Name --> */}
                            <div class="sm:col-span-2">
                                <label class="flex flex-col">
                                    <p class="text-[#0e1b17] dark:text-gray-200 text-sm font-medium leading-normal pb-2">
                                        Name
                                    </p>
                                    <input
                                        class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0e1b17] dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-[#d0e7e0] dark:border-gray-600 bg-background-light dark:bg-gray-700/50 focus:border-primary h-12 placeholder:text-[#4d9981] p-3 text-base font-normal leading-normal"
                                        placeholder="Enter your full name"
                                        type="text"
                                    />
                                </label>
                            </div>
                            {/* <!-- Email --> */}
                            <div class="sm:col-span-2">
                                <label class="flex flex-col">
                                    <p class="text-[#0e1b17] dark:text-gray-200 text-sm font-medium leading-normal pb-2">
                                        Email Address
                                    </p>
                                    <input
                                        class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0e1b17] dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-[#d0e7e0] dark:border-gray-600 bg-background-light dark:bg-gray-700/50 focus:border-primary h-12 placeholder:text-[#4d9981] p-3 text-base font-normal leading-normal"
                                        placeholder="Enter your email address"
                                        type="email"
                                    />
                                </label>
                            </div>
                            {/* <!-- Avatar --> */}
                            <div class="sm:col-span-2">
                                <div class="flex items-center gap-4 bg-transparent min-h-14 justify-between">
                                    <div class="flex items-center gap-4">
                                        <div class="text-[#0e1b17] dark:text-white flex items-center justify-center rounded-full shrink-0 size-12">
                                            <img src="./avater.jpeg" alt="" />
                                        </div>
                                        <p class="text-[#0e1b17] dark:text-gray-200 text-base font-normal leading-normal flex-1 truncate">
                                            Avatar
                                        </p>
                                    </div>
                                    <div class="shrink-0">
                                        <button
                                            class="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#e7f3ef] dark:bg-gray-700 text-[#0e1b17] dark:text-white text-sm font-medium leading-normal w-fit transition-colors hover:bg-gray-200 dark:hover:bg-gray-600"
                                            type="button"
                                        >
                                            <span class="truncate">
                                                Upload Photo
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            {/* <!-- Blood Group --> */}
                            <div>
                                <label class="flex flex-col">
                                    <p class="text-[#0e1b17] dark:text-gray-200 text-sm font-medium leading-normal pb-2">
                                        Blood Group
                                    </p>
                                    <select class="form-select flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0e1b17] dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-[#d0e7e0] dark:border-gray-600 bg-background-light dark:bg-gray-700/50 focus:border-primary h-12 p-3 text-base font-normal leading-normal">
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
                            </div>
                            {/* <!-- District --> */}
                            <div>
                                <label class="flex flex-col">
                                    <p class="text-[#0e1b17] dark:text-gray-200 text-sm font-medium leading-normal pb-2">
                                        District
                                    </p>
                                    <select class="form-select flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0e1b17] dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-[#d0e7e0] dark:border-gray-600 bg-background-light dark:bg-gray-700/50 focus:border-primary h-12 p-3 text-base font-normal leading-normal">
                                        <option disabled>
                                            Select District
                                        </option>
                                        <option>dhaka</option>
                                    </select>
                                </label>
                            </div>
                            {/* <!-- Upazila --> */}
                            <div class="sm:col-span-2">
                                <label class="flex flex-col">
                                    <p class="text-[#0e1b17] dark:text-gray-200 text-sm font-medium leading-normal pb-2">
                                        Upazila
                                    </p>
                                    <select class="form-select flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#4d9981] dark:text-gray-400 focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-[#d0e7e0] dark:border-gray-600 bg-background-light/50 dark:bg-gray-800/50 h-12 p-3 text-base font-normal leading-normal ">
                                        <option disabled>Select Upazila</option>
                                        <option>Raipura</option>
                                    </select>
                                </label>
                            </div>
                            {/* <!-- Password --> */}
                            <div class="sm:col-span-2">
                                <label class="flex flex-col">
                                    <p class="text-[#0e1b17] dark:text-gray-200 text-sm font-medium leading-normal pb-2">
                                        Password
                                    </p>
                                    <input
                                        class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0e1b17] dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-[#d0e7e0] dark:border-gray-600 bg-background-light dark:bg-gray-700/50 focus:border-primary h-12 placeholder:text-[#4d9981] p-3 text-base font-normal leading-normal"
                                        placeholder="Enter your password"
                                        type="password"
                                    />
                                </label>
                                <div class="mt-2 flex gap-1.5">
                                    <div class="h-1.5 flex-1 rounded-full bg-gray-200 dark:bg-gray-600"></div>
                                    <div class="h-1.5 flex-1 rounded-full bg-gray-200 dark:bg-gray-600"></div>
                                    <div class="h-1.5 flex-1 rounded-full bg-gray-200 dark:bg-gray-600"></div>
                                    <div class="h-1.5 flex-1 rounded-full bg-gray-200 dark:bg-gray-600"></div>
                                </div>
                            </div>
                            {/* <!-- Confirm Password --> */}
                            <div class="sm:col-span-2">
                                <label class="flex flex-col">
                                    <p class="text-[#0e1b17] dark:text-gray-200 text-sm font-medium leading-normal pb-2">
                                        Confirm Password
                                    </p>
                                    <input
                                        class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0e1b17] dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-[#d0e7e0] dark:border-gray-600 bg-background-light dark:bg-gray-700/50 focus:border-primary h-12 placeholder:text-[#4d9981] p-3 text-base font-normal leading-normal"
                                        placeholder="Confirm your password"
                                        type="password"
                                    />
                                </label>
                            </div>
                            {/* <!-- Register Button --> */}
                            <div class="sm:col-span-2 mt-4">
                                <button
                                    class="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-6 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] transition-colors hover:bg-primary/90"
                                    type="submit"
                                >
                                    <span class="truncate">Register</span>
                                </button>
                            </div>
                            {/* <!-- Helper Text --> */}
                            <div class="sm:col-span-2 text-center">
                                <p class="text-xs text-gray-500 dark:text-gray-400">
                                    Role: Donor | Status: Active by default —
                                    admin may block.
                                </p>
                            </div>
                        </form>
                        {/* <!-- Footer Link --> */}
                        <div class="mt-6 text-center">
                            <p class="text-sm text-gray-600 dark:text-gray-300">
                                Already have an account?
                                <a
                                    class="font-semibold text-primary hover:underline"
                                    href="#"
                                >
                                    Log In
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Register;
