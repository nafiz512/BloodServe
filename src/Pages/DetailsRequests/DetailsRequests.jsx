import React from "react";
import { MdBloodtype, MdVolunteerActivism } from "react-icons/md";

const DetailsRequests = () => {
    return (
        <div class="flex flex-1 justify-center py-8 px-4 sm:px-6 lg:px-8">
            <div class="layout-content-container flex flex-col w-full max-w-4xl gap-6">
                <div class="flex flex-wrap justify-between items-start gap-3 px-4">
                    <div class="flex min-w-72 flex-col gap-2">
                        <p class="text-[#0e1b17] dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">
                            Donation Request Details
                        </p>
                        <p class="text-[#4d9981] dark:text-white/70 text-base font-normal leading-normal">
                            Review the information below before committing to
                            donate.
                        </p>
                    </div>
                </div>
                <div class="bg-white dark:bg-background-dark/50 rounded-2xl shadow-sm border border-black/5 dark:border-white/10 p-6 sm:p-8">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                        <div class="flex flex-col gap-1 border-b border-solid border-b-black/10 dark:border-b-white/10 py-4">
                            <p class="text-[#4d9981] dark:text-white/60 text-sm font-medium leading-normal">
                                Recipient Name
                            </p>
                            <p class="text-[#0e1b17] dark:text-white text-base font-semibold leading-normal">
                                Jane Smith
                            </p>
                        </div>
                        <div class="flex flex-col gap-1 border-b border-solid border-b-black/10 dark:border-b-white/10 py-4">
                            <p class="text-[#4d9981] dark:text-white/60 text-sm font-medium leading-normal">
                                Hospital Name
                            </p>
                            <p class="text-[#0e1b17] dark:text-white text-base font-semibold leading-normal">
                                City General Hospital
                            </p>
                        </div>
                        <div class="flex flex-col gap-1 border-b border-solid border-b-black/10 dark:border-b-white/10 py-4">
                            <p class="text-[#4d9981] dark:text-white/60 text-sm font-medium leading-normal">
                                Donation Date &amp; Time
                            </p>
                            <p class="text-[#0e1b17] dark:text-white text-base font-semibold leading-normal">
                                October 26, 2024 at 10:00 AM
                            </p>
                        </div>
                        <div class="flex flex-col gap-1 border-b border-solid border-b-black/10 dark:border-b-white/10 py-4">
                            <p class="text-[#4d9981] dark:text-white/60 text-sm font-medium leading-normal">
                                Full Address
                            </p>
                            <p class="text-[#0e1b17] dark:text-white text-base font-semibold leading-normal">
                                123 Life Saver St, Mirpur, Dhaka
                            </p>
                        </div>
                        <div class="flex flex-col gap-1 border-b border-solid border-b-black/10 dark:border-b-white/10 py-4">
                            <p class="text-[#4d9981] dark:text-white/60 text-sm font-medium leading-normal">
                                Blood Group
                            </p>
                            <div class="flex items-center gap-2">
                                <span
                                    class="material-symbols-outlined text-red-500"
                                    data-icon="bloodtype"
                                >
                                    <MdBloodtype className="text-xl"></MdBloodtype>
                                </span>
                                <p class="text-red-500 text-base font-bold leading-normal">
                                    O+
                                </p>
                            </div>
                        </div>
                        <div class="flex flex-col gap-1 border-b border-solid border-b-black/10 dark:border-b-white/10 py-4">
                            <p class="text-[#4d9981] dark:text-white/60 text-sm font-medium leading-normal">
                                Location
                            </p>
                            <p class="text-[#0e1b17] dark:text-white text-base font-semibold leading-normal">
                                Mirpur, Dhaka
                            </p>
                        </div>
                        <div class="flex flex-col gap-1 border-b border-solid border-b-black/10 dark:border-b-white/10 py-4 md:col-span-2">
                            <p class="text-[#4d9981] dark:text-white/60 text-sm font-medium leading-normal">
                                Request Status
                            </p>
                            <div class="inline-flex items-center">
                                <span class="bg-yellow-100 dark:bg-yellow-900/50 text-yellow-800 dark:text-yellow-300 text-sm font-semibold me-2 px-3 py-1 rounded-lg">
                                    Pending
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="pt-6 ">
                        <h3 class="text-[#0e1b17] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] pb-2">
                            A Message from the Requester
                        </h3>
                        <p class="text-[#4d9981] dark:text-white/80 text-base leading-relaxed">
                            Our family is in urgent need of O+ blood for Jane,
                            who is undergoing a critical surgery. Your kind
                            donation would mean the world to us and could save
                            her life. We are deeply grateful for any help you
                            can provide. Please contact us if you are able to
                            donate. Thank you from the bottom of our hearts.
                        </p>
                    </div>
                    <div class="mt-8 pt-6 border-t border-solid border-black/10 dark:border-t-white/10">
                        <h3 class="text-[#0e1b17] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] pb-2">
                            Requester Information
                        </h3>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                            <div class="flex flex-col gap-1">
                                <p class="text-[#4d9981] dark:text-white/60 text-sm font-medium leading-normal">
                                    Requester Name
                                </p>
                                <p class="text-[#0e1b17] dark:text-white text-base leading-normal">
                                    John Doe
                                </p>
                            </div>
                            <div class="flex flex-col gap-1">
                                <p class="text-[#4d9981] dark:text-white/60 text-sm font-medium leading-normal">
                                    Requester Email
                                </p>
                                <p class="text-[#0e1b17] dark:text-white text-base leading-normal">
                                    john.doe@email.com
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="mt-8 pt-8 border-t border-solid border-black/10 dark:border-t-white/10 flex justify-end">
                        <div>
                            <button
                                disabled={false}
                                class="flex min-w-[120px] items-center justify-center gap-2 overflow-hidden rounded-lg h-12 px-6 bg-primary  font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors duration-200 disabled:bg-gray-300 dark:disabled:bg-gray-700 disabled:cursor-not-allowed disabled:text-gray-500 dark:disabled:text-gray-400 text-white"
                            >
                                <span
                                    class="material-symbols-outlined "
                                    data-icon="volunteer_activism"
                                >
                                    <MdVolunteerActivism className="text-xl"></MdVolunteerActivism>
                                </span>
                                <span class="truncate">Donate Now</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsRequests;
