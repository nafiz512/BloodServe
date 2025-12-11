import React from "react";

const CreateDonationRequest = () => {
    return (
        <div>
            <main class="flex-1 p-8 overflow-y-auto">
                <div class="max-w-4xl mx-auto">
                    {/* <!-- PageHeading --> */}
                    <div class="flex flex-wrap justify-between gap-3 mb-8">
                        <div class="flex flex-col gap-2">
                            <p class="text-[#0e1b17] dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">
                                Create Donation Request
                            </p>
                            <p class="text-gray-500 dark:text-gray-400 text-base font-normal leading-normal">
                                Fill in the details below to create a new blood
                                donation request.
                            </p>
                        </div>
                    </div>
                    {/* <!-- Form Container --> */}
                    <div class="bg-white dark:bg-background-dark/50 p-8 rounded-xl shadow-sm">
                        <form class="flex flex-col gap-8">
                            {/* <!-- Section 1: Requester Information --> */}
                            <div>
                                <h3 class="text-[#0e1b17] dark:text-white tracking-light text-2xl font-bold leading-tight pb-4 border-b border-gray-200 dark:border-gray-700">
                                    Requester Information
                                </h3>
                                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
                                    <label class="flex flex-col">
                                        <p class="text-[#0e1b17] dark:text-gray-200 text-base font-medium leading-normal pb-2">
                                            Requester Name
                                        </p>
                                        <input
                                            class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-gray-500 dark:text-gray-400 focus:outline-0 focus:ring-0 border-none bg-gray-100 dark:bg-gray-800/50 h-14 p-4 text-base font-normal leading-normal cursor-not-allowed"
                                            readonly=""
                                            value="John Doe"
                                        />
                                    </label>
                                    <label class="flex flex-col">
                                        <p class="text-[#0e1b17] dark:text-gray-200 text-base font-medium leading-normal pb-2">
                                            Requester Email
                                        </p>
                                        <input
                                            class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-gray-500 dark:text-gray-400 focus:outline-0 focus:ring-0 border-none bg-gray-100 dark:bg-gray-800/50 h-14 p-4 text-base font-normal leading-normal cursor-not-allowed"
                                            readonly=""
                                            value="john.doe@email.com"
                                        />
                                    </label>
                                </div>
                            </div>
                            {/* <!-- Section 2: Recipient & Request Details --> */}
                            <div>
                                <h3 class="text-[#0e1b17] dark:text-white tracking-light text-2xl font-bold leading-tight pb-4 border-b border-gray-200 dark:border-gray-700">
                                    Recipient &amp; Request Details
                                </h3>
                                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
                                    <label class="flex flex-col">
                                        <p class="text-[#0e1b17] dark:text-gray-200 text-base font-medium leading-normal pb-2">
                                            Recipient Name
                                        </p>
                                        <input
                                            class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0e1b17] dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary border border-gray-300 dark:border-gray-600 bg-transparent dark:bg-background-dark/30 h-14 placeholder:text-gray-400 dark:placeholder:text-gray-500 p-4 text-base font-normal leading-normal"
                                            placeholder="Enter recipient's full name"
                                        />
                                    </label>
                                    <label class="flex flex-col">
                                        <p class="text-[#0e1b17] dark:text-gray-200 text-base font-medium leading-normal pb-2">
                                            Blood Group
                                        </p>
                                        <select class="form-select flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0e1b17] dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary border border-gray-300 dark:border-gray-600 bg-transparent dark:bg-background-dark/30 h-14 p-4 text-base font-normal leading-normal">
                                            <option>Select Blood Group</option>
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
                                    <label class="flex flex-col">
                                        <p class="text-[#0e1b17] dark:text-gray-200 text-base font-medium leading-normal pb-2">
                                            Donation Date
                                        </p>
                                        <input
                                            class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0e1b17] dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary border border-gray-300 dark:border-gray-600 bg-transparent dark:bg-background-dark/30 h-14 placeholder:text-gray-400 dark:placeholder:text-gray-500 p-4 text-base font-normal leading-normal"
                                            type="date"
                                        />
                                    </label>
                                    <label class="flex flex-col">
                                        <p class="text-[#0e1b17] dark:text-gray-200 text-base font-medium leading-normal pb-2">
                                            Donation Time
                                        </p>
                                        <input
                                            class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0e1b17] dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary border border-gray-300 dark:border-gray-600 bg-transparent dark:bg-background-dark/30 h-14 placeholder:text-gray-400 dark:placeholder:text-gray-500 p-4 text-base font-normal leading-normal"
                                            type="time"
                                        />
                                    </label>
                                </div>
                            </div>
                            {/* <!-- Section 3: Location & Message --> */}
                            <div>
                                <h3 class="text-[#0e1b17] dark:text-white tracking-light text-2xl font-bold leading-tight pb-4 border-b border-gray-200 dark:border-gray-700">
                                    Location &amp; Message
                                </h3>
                                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
                                    <label class="flex flex-col">
                                        <p class="text-[#0e1b17] dark:text-gray-200 text-base font-medium leading-normal pb-2">
                                            District
                                        </p>
                                        <select class="form-select flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0e1b17] dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary border border-gray-300 dark:border-gray-600 bg-transparent dark:bg-background-dark/30 h-14 p-4 text-base font-normal leading-normal">
                                            <option>Select District</option>
                                            <option>Dhaka</option>
                                            <option>Chittagong</option>
                                            <option>Sylhet</option>
                                        </select>
                                    </label>
                                    <label class="flex flex-col">
                                        <p class="text-[#0e1b17] dark:text-gray-200 text-base font-medium leading-normal pb-2">
                                            Upazila
                                        </p>
                                        <select class="form-select flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0e1b17] dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary border border-gray-300 dark:border-gray-600 bg-transparent dark:bg-background-dark/30 h-14 p-4 text-base font-normal leading-normal">
                                            <option>Select Upazila</option>
                                            <option>Mirpur</option>
                                            <option>Gulshan</option>
                                            <option>Savar</option>
                                        </select>
                                    </label>
                                    <label class="flex flex-col">
                                        <p class="text-[#0e1b17] dark:text-gray-200 text-base font-medium leading-normal pb-2">
                                            Hospital Name
                                        </p>
                                        <input
                                            class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0e1b17] dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary border border-gray-300 dark:border-gray-600 bg-transparent dark:bg-background-dark/30 h-14 placeholder:text-gray-400 dark:placeholder:text-gray-500 p-4 text-base font-normal leading-normal"
                                            placeholder="e.g., City General Hospital"
                                        />
                                    </label>
                                    <label class="flex flex-col">
                                        <p class="text-[#0e1b17] dark:text-gray-200 text-base font-medium leading-normal pb-2">
                                            Full Address
                                        </p>
                                        <input
                                            class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0e1b17] dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary border border-gray-300 dark:border-gray-600 bg-transparent dark:bg-background-dark/30 h-14 placeholder:text-gray-400 dark:placeholder:text-gray-500 p-4 text-base font-normal leading-normal"
                                            placeholder="e.g., 123 Health St, Ward 4"
                                        />
                                    </label>
                                    <label class="flex flex-col md:col-span-2">
                                        <p class="text-[#0e1b17] dark:text-gray-200 text-base font-medium leading-normal pb-2">
                                            Request Message
                                        </p>
                                        <textarea
                                            class="form-textarea flex w-full min-w-0 flex-1 resize-y overflow-hidden rounded-lg text-[#0e1b17] dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary border border-gray-300 dark:border-gray-600 bg-transparent dark:bg-background-dark/30 min-h-32 placeholder:text-gray-400 dark:placeholder:text-gray-500 p-4 text-base font-normal leading-normal"
                                            placeholder="Enter any additional details or a short message..."
                                        ></textarea>
                                    </label>
                                </div>
                            </div>
                            {/* <!-- Section 4: Actions --> */}
                            <div class="flex flex-col items-start gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                                <button
                                    class="flex min-w-[120px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors disabled:bg-gray-300 disabled:dark:bg-gray-600 disabled:cursor-not-allowed"
                                    type="submit"
                                >
                                    <span class="truncate">Create Request</span>
                                </button>
                                {/* <!-- Disabled State Example --> */}
                                {/* <div class="flex flex-col gap-2">
                                <button type="submit" class="flex min-w-[120px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] disabled:bg-gray-300 disabled:dark:bg-gray-600 disabled:cursor-not-allowed" disabled>
                                    <span class="truncate">Create Request</span>
                                </button>
                                <p class="text-sm text-red-500">Your account is currently blocked. You cannot create a new request.</p>
                            </div>  */}
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default CreateDonationRequest;
