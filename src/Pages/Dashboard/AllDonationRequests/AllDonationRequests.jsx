import React from "react";

const AllDonationRequests = () => {
    return (
        <div>
            <div class="flex-1 p-8">
                <div class="w-full max-w-7xl mx-auto">
                    {/* <!-- PageHeading --> */}
                    <div class="mb-6">
                        <p class="text-gray-900 dark:text-gray-50 text-4xl font-black leading-tight tracking-[-0.033em]">
                            All Donation Requests
                        </p>
                    </div>
                    <div class="bg-white dark:bg-gray-900/50 rounded-lg shadow-sm p-6">
                        {/* <!-- Chips --> */}
                        <div class="flex gap-3 mb-4 overflow-x-auto pb-2">
                            <button class="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-primary/20 px-4">
                                <p class="text-gray-900 dark:text-gray-50 text-sm font-medium leading-normal">
                                    All
                                </p>
                            </button>
                            <button class="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-gray-100 dark:bg-gray-800 px-4 hover:bg-gray-200 dark:hover:bg-gray-700">
                                <p class="text-gray-800 dark:text-gray-200 text-sm font-medium leading-normal">
                                    Pending
                                </p>
                            </button>
                            <button class="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-gray-100 dark:bg-gray-800 px-4 hover:bg-gray-200 dark:hover:bg-gray-700">
                                <p class="text-gray-800 dark:text-gray-200 text-sm font-medium leading-normal">
                                    In Progress
                                </p>
                            </button>
                            <button class="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-gray-100 dark:bg-gray-800 px-4 hover:bg-gray-200 dark:hover:bg-gray-700">
                                <p class="text-gray-800 dark:text-gray-200 text-sm font-medium leading-normal">
                                    Done
                                </p>
                            </button>
                            <button class="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-full bg-gray-100 dark:bg-gray-800 px-4 hover:bg-gray-200 dark:hover:bg-gray-700">
                                <p class="text-gray-800 dark:text-gray-200 text-sm font-medium leading-normal">
                                    Canceled
                                </p>
                            </button>
                        </div>
                        {/* <!-- Table --> */}
                        <div class="overflow-x-auto">
                            <table class="w-full text-left">
                                <thead>
                                    <tr class="border-b border-gray-200 dark:border-gray-700">
                                        <th class="px-4 py-3 text-sm font-medium text-gray-600 dark:text-gray-400">
                                            Recipient Name
                                        </th>
                                        <th class="px-4 py-3 text-sm font-medium text-gray-600 dark:text-gray-400">
                                            Location
                                        </th>
                                        <th class="px-4 py-3 text-sm font-medium text-gray-600 dark:text-gray-400">
                                            Date &amp; Time
                                        </th>
                                        <th class="px-4 py-3 text-sm font-medium text-gray-600 dark:text-gray-400">
                                            Blood Group
                                        </th>
                                        <th class="px-4 py-3 text-sm font-medium text-gray-600 dark:text-gray-400">
                                            Status
                                        </th>
                                        <th class="px-4 py-3 text-sm font-medium text-gray-600 dark:text-gray-400 text-right">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <tbody class="divide-y divide-gray-200 dark:divide-gray-800">
                                    <tr class="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                                        <td class="px-4 py-4 text-sm font-medium text-gray-900 dark:text-gray-100">
                                            Jane Doe
                                        </td>
                                        <td class="px-4 py-4 text-sm text-gray-600 dark:text-gray-300">
                                            Dhaka, Gulshan
                                        </td>
                                        <td class="px-4 py-4 text-sm text-gray-600 dark:text-gray-300">
                                            25 Oct 2023, 10:30 AM
                                        </td>
                                        <td class="px-4 py-4 text-sm text-gray-600 dark:text-gray-300">
                                            A+
                                        </td>
                                        <td class="px-4 py-4 text-sm">
                                            <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                                                In Progress
                                            </span>
                                        </td>
                                        <td class="px-4 py-4 text-sm text-right">
                                            <div class="flex items-center justify-end gap-2">
                                                <button class="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100">
                                                    <span class="material-symbols-outlined text-xl">
                                                        visibility
                                                    </span>
                                                </button>
                                                <button class="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100">
                                                    <span class="material-symbols-outlined text-xl">
                                                        edit
                                                    </span>
                                                </button>
                                                <button class="text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300">
                                                    <span class="material-symbols-outlined text-xl">
                                                        delete
                                                    </span>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr class="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                                        <td class="px-4 py-4 text-sm font-medium text-gray-900 dark:text-gray-100">
                                            John Smith
                                        </td>
                                        <td class="px-4 py-4 text-sm text-gray-600 dark:text-gray-300">
                                            Chittagong, Pahartali
                                        </td>
                                        <td class="px-4 py-4 text-sm text-gray-600 dark:text-gray-300">
                                            24 Oct 2023, 02:00 PM
                                        </td>
                                        <td class="px-4 py-4 text-sm text-gray-600 dark:text-gray-300">
                                            O-
                                        </td>
                                        <td class="px-4 py-4 text-sm">
                                            <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200">
                                                Pending
                                            </span>
                                        </td>
                                        <td class="px-4 py-4 text-sm text-right">
                                            <div class="flex items-center justify-end gap-2">
                                                <button class="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100">
                                                    <span class="material-symbols-outlined text-xl">
                                                        visibility
                                                    </span>
                                                </button>
                                                <button class="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100">
                                                    <span class="material-symbols-outlined text-xl">
                                                        edit
                                                    </span>
                                                </button>
                                                <button class="text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300">
                                                    <span class="material-symbols-outlined text-xl">
                                                        delete
                                                    </span>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr class="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                                        <td class="px-4 py-4 text-sm font-medium text-gray-900 dark:text-gray-100">
                                            Emily Johnson
                                        </td>
                                        <td class="px-4 py-4 text-sm text-gray-600 dark:text-gray-300">
                                            Sylhet, Sadar
                                        </td>
                                        <td class="px-4 py-4 text-sm text-gray-600 dark:text-gray-300">
                                            23 Oct 2023, 11:00 AM
                                        </td>
                                        <td class="px-4 py-4 text-sm text-gray-600 dark:text-gray-300">
                                            B+
                                        </td>
                                        <td class="px-4 py-4 text-sm">
                                            <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                                                Done
                                            </span>
                                        </td>
                                        <td class="px-4 py-4 text-sm text-right">
                                            <div class="flex items-center justify-end gap-2">
                                                <button class="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100">
                                                    <span class="material-symbols-outlined text-xl">
                                                        visibility
                                                    </span>
                                                </button>
                                                <button class="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100">
                                                    <span class="material-symbols-outlined text-xl">
                                                        edit
                                                    </span>
                                                </button>
                                                <button class="text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300">
                                                    <span class="material-symbols-outlined text-xl">
                                                        delete
                                                    </span>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr class="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                                        <td class="px-4 py-4 text-sm font-medium text-gray-900 dark:text-gray-100">
                                            Michael Brown
                                        </td>
                                        <td class="px-4 py-4 text-sm text-gray-600 dark:text-gray-300">
                                            Dhaka, Dhanmondi
                                        </td>
                                        <td class="px-4 py-4 text-sm text-gray-600 dark:text-gray-300">
                                            22 Oct 2023, 05:45 PM
                                        </td>
                                        <td class="px-4 py-4 text-sm text-gray-600 dark:text-gray-300">
                                            AB+
                                        </td>
                                        <td class="px-4 py-4 text-sm">
                                            <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200">
                                                Canceled
                                            </span>
                                        </td>
                                        <td class="px-4 py-4 text-sm text-right">
                                            <div class="flex items-center justify-end gap-2">
                                                <button class="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100">
                                                    <span class="material-symbols-outlined text-xl">
                                                        visibility
                                                    </span>
                                                </button>
                                                <button class="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100">
                                                    <span class="material-symbols-outlined text-xl">
                                                        edit
                                                    </span>
                                                </button>
                                                <button class="text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300">
                                                    <span class="material-symbols-outlined text-xl">
                                                        delete
                                                    </span>
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                    {/* <!-- Volunteer View Example --> */}
                                    <tr class="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                                        <td class="px-4 py-4 text-sm font-medium text-gray-900 dark:text-gray-100">
                                            Sarah Davis
                                        </td>
                                        <td class="px-4 py-4 text-sm text-gray-600 dark:text-gray-300">
                                            Rajshahi, Boalia
                                        </td>
                                        <td class="px-4 py-4 text-sm text-gray-600 dark:text-gray-300">
                                            21 Oct 2023, 09:15 AM
                                        </td>
                                        <td class="px-4 py-4 text-sm text-gray-600 dark:text-gray-300">
                                            A-
                                        </td>
                                        <td class="px-4 py-4 text-sm">
                                            <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                                                In Progress
                                            </span>
                                        </td>
                                        <td class="px-4 py-4 text-sm text-right">
                                            <div class="flex items-center justify-end gap-2">
                                                <button class="flex items-center justify-center rounded h-8 px-3 bg-primary text-black text-xs font-bold hover:bg-primary/90">
                                                    Done
                                                </button>
                                                <button class="flex items-center justify-center rounded h-8 px-3 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 text-xs font-bold hover:bg-gray-300 dark:hover:bg-gray-600">
                                                    Cancel
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        {/* <!-- Pagination --> */}
                        <div class="flex items-center justify-between mt-6 px-1">
                            <div class="flex items-center gap-2">
                                <span class="text-sm text-gray-600 dark:text-gray-400">
                                    Rows per page:
                                </span>
                                <select class="rounded border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm focus:ring-primary focus:border-primary h-8 py-0 pl-2 pr-7">
                                    <option>10</option>
                                    <option>25</option>
                                    <option>50</option>
                                </select>
                            </div>
                            <div class="flex items-center justify-center">
                                <a
                                    class="flex size-8 items-center justify-center rounded-md text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                                    href="#"
                                >
                                    <span class="material-symbols-outlined text-xl">
                                        chevron_left
                                    </span>
                                </a>
                                <a
                                    class="text-sm font-bold flex size-8 items-center justify-center text-gray-900 dark:text-gray-50 rounded-md bg-primary/20"
                                    href="#"
                                >
                                    1
                                </a>
                                <a
                                    class="text-sm font-medium flex size-8 items-center justify-center text-gray-600 dark:text-gray-300 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
                                    href="#"
                                >
                                    2
                                </a>
                                <a
                                    class="text-sm font-medium flex size-8 items-center justify-center text-gray-600 dark:text-gray-300 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
                                    href="#"
                                >
                                    3
                                </a>
                                <span class="text-sm font-medium flex size-8 items-center justify-center text-gray-600 dark:text-gray-300">
                                    ...
                                </span>
                                <a
                                    class="text-sm font-medium flex size-8 items-center justify-center text-gray-600 dark:text-gray-300 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
                                    href="#"
                                >
                                    10
                                </a>
                                <a
                                    class="flex size-8 items-center justify-center rounded-md text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                                    href="#"
                                >
                                    <span class="material-symbols-outlined text-xl">
                                        chevron_right
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllDonationRequests;
