import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaAngleDown, FaArrowLeft, FaArrowRight } from "react-icons/fa";

const DonorManagement = () => {
    return (
        <div>
            <main className="flex-1 p-8">
                <div className="mx-auto max-w-7xl">
                    {/* <!-- Page Heading --> */}
                    <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
                        <h1 className="text-gray-900 dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">
                            All Users
                        </h1>
                        <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-11 px-5 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors">
                            <span className="truncate">+ Add User</span>
                        </button>
                    </div>
                    {/* <!-- Content Card --> */}
                    <div className="bg-white dark:bg-background-dark rounded-xl shadow-sm border border-gray-200 dark:border-gray-800">
                        {/* <!-- Filters --> */}
                        <div className="flex items-center justify-end p-4 border-b border-gray-200 dark:border-gray-800">
                            <div className="flex gap-3 flex-wrap">
                                <div className="relative">
                                    <select className="appearance-none h-9 w-40 rounded-lg bg-background-light border border-gray-300 dark:bg-black/20 pl-4 pr-8 text-gray-900 dark:text-white text-sm font-medium leading-normal ">
                                        <option>All</option>
                                        <option>Active</option>
                                        <option>Blocked</option>
                                    </select>
                                    <span className="material-symbols-outlined text-gray-500 dark:text-gray-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none">
                                        <FaAngleDown></FaAngleDown>
                                    </span>
                                </div>
                            </div>
                        </div>
                        {/* <!-- Table --> */}
                        <div className="overflow-x-auto">
                            <table className="w-full text-left">
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
                                    <tr className="hover:bg-gray-50 dark:hover:bg-black/10">
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center gap-3">
                                                <img
                                                    className="h-10 w-10 rounded-full"
                                                    data-alt="User avatar for Priya Patel"
                                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfGNQF_mLrq1e6nY8ARCu7RuZ2NFiy529ZnuDuDuqnRu0pDfbM9gZisYmimf9Y0W-QNpfmpiQi4IxIa8B_8N6DVi5cbxNfaAJimHF7a-vQoVkOW0n5Z7sLL3gRHEBhYlvpIV2Q7ozzKjn62bGE7kAsEMiOaE7jJ6_FximQDuc29hccJawT2L5NYFWF56FAw7l0SL96qQFcXVpV1e8YuUqa5H0Az1eLjUPzoIU9Egf7aIlW3GDvEOGw-vkhxEp7ITwjjpJRZzraV8U"
                                                />
                                                <span className="text-gray-900 dark:text-white text-sm font-medium">
                                                    Priya Patel
                                                </span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-gray-500 dark:text-gray-400 text-sm">
                                            priya.patel@example.com
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-gray-500 dark:text-gray-400 text-sm">
                                            Volunteer
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
                                                Active
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <button className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary">
                                                <span className="material-symbols-outlined">
                                                    <BsThreeDotsVertical></BsThreeDotsVertical>
                                                </span>
                                            </button>
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 dark:hover:bg-black/10">
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center gap-3">
                                                <img
                                                    className="h-10 w-10 rounded-full"
                                                    data-alt="User avatar for Rohan Das"
                                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVM4OXM04cqH3RTHkHWZBRF1q02Xg2rgiLxr7Bu71Z4zYis1skhdOmuUX7Z6-gCUtoGX1DGtzxZrslXvJKt6VzV_f3wCLbWUtZBa7cOKZdUqax1Tf9U5s_yJXGP1YQG8x5L6QDwQp4Fil1OTNinKfCDuXuaTR9vikgOZ76fw2QnX8xzq-D2XrI9jrA5lFD2r4LgSu3OPGPNrzJCKlxptpYdXWHk9jFnrskIFsgDGGRNvzp_ApnO_AELjET5y_4soAxBGx98uRa0m8"
                                                />
                                                <span className="text-gray-900 dark:text-white text-sm font-medium">
                                                    Rohan Das
                                                </span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-gray-500 dark:text-gray-400 text-sm">
                                            rohan.das@example.com
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-gray-500 dark:text-gray-400 text-sm">
                                            Admin
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
                                                Active
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <button className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary">
                                                <span className="material-symbols-outlined">
                                                    more_vert
                                                </span>
                                            </button>
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 dark:hover:bg-black/10">
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center gap-3">
                                                <img
                                                    className="h-10 w-10 rounded-full"
                                                    data-alt="User avatar for Ananya Gupta"
                                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-gf-J2zBsCqOEMzs8ZQPvqAV0E3fV8Aj0kb2ZLBpw6wAGx9nWa7SKqT2ArfzHLnHbasydD-7GJKlYxrzQJp1kYUMTV7j4orXKxn7gmAurTfB7juXiYCxcZAm5wd1bXJuosYgp_qNoQTg1C50_JOY3IlTrGBhHv2l1LrW8L5P5V4PMWhUa8vNjETlX4T8hw33KWgmQciac3BehXqYe3w20QM4EH7lP-g5pOWPCMGfIxHgtsFozT4TQre6K7lh1LJqolU_YyrcZZsQ"
                                                />
                                                <span className="text-gray-900 dark:text-white text-sm font-medium">
                                                    Ananya Gupta
                                                </span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-gray-500 dark:text-gray-400 text-sm">
                                            ananya.gupta@example.com
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-gray-500 dark:text-gray-400 text-sm">
                                            Donor
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300">
                                                Blocked
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <button className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary">
                                                <span className="material-symbols-outlined">
                                                    more_vert
                                                </span>
                                            </button>
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 dark:hover:bg-black/10">
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center gap-3">
                                                <img
                                                    className="h-10 w-10 rounded-full"
                                                    data-alt="User avatar for Vikram Singh"
                                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLx_PjN9R-Tg_m8dtEAO5kD5IRixcTrXs9W2iTj3UCDGPY4Mc_tLv8ku9sGnBc5LTlsu6lohR8F7T1izjSG6A0VoynVJfbT2QVviuUi5hG49ftgaWyHrPrbTOLF8Al2Gr2JVV4ah7V0H9s6xgH7xMvMLojBSBwcy0csyJyjO-jeEW4YRJxps8rK6ZpxefwPeTOWr7NzFw_FObMNz-pY-8NIQOHRc9VubMdgFZsSr3ObfnSoqwbsmgJv0Hri67U-IARuuXLGN966FQ"
                                                />
                                                <span className="text-gray-900 dark:text-white text-sm font-medium">
                                                    Vikram Singh
                                                </span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-gray-500 dark:text-gray-400 text-sm">
                                            vikram.singh@example.com
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-gray-500 dark:text-gray-400 text-sm">
                                            Volunteer
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
                                                Active
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <button className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary">
                                                <span className="material-symbols-outlined">
                                                    more_vert
                                                </span>
                                            </button>
                                        </td>
                                    </tr>
                                    <tr className="hover:bg-gray-50 dark:hover:bg-black/10">
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <div className="flex items-center gap-3">
                                                <img
                                                    className="h-10 w-10 rounded-full"
                                                    data-alt="User avatar for Sneha Reddy"
                                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7Im-AJx2fkYCEqxCKjDy35oeid_6ZEzHGEyyqeApq_n-eO3pD4Dj85djQmeC2HiNAhmfhb2AgWuKQFoOhjs7h3rW-hlhTSOB0DtxO3pB5seszUQn-BTAmzxg4EkfnHX1uoiCxtkHgzKkrlCLQgiuCrdCRSUMuxoF2olqMr4UfoScjI8UcGqrdRZF0BYj8iUSBycag8dobfo4ckxDSsPWwST6Sf64eMORjZMI-lV8Qq0FaK1qxvHwz7rxmPKCI1R9H8fZPlM9n4PM"
                                                />
                                                <span className="text-gray-900 dark:text-white text-sm font-medium">
                                                    Sneha Reddy
                                                </span>
                                            </div>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-gray-500 dark:text-gray-400 text-sm">
                                            sneha.reddy@example.com
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-gray-500 dark:text-gray-400 text-sm">
                                            Donor
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
                                                Active
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                            <button className="text-gray-500 dark:text-gray-400 hover:text-primary dark:hover:text-primary">
                                                <span className="material-symbols-outlined">
                                                    more_vert
                                                </span>
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        {/* <!-- Pagination --> */}
                        <div className="flex items-center justify-between p-4 border-t border-gray-200 dark:border-gray-800">
                            <div className="text-sm text-gray-500 dark:text-gray-400">
                                Showing{" "}
                                <span className="font-medium text-gray-900 dark:text-white">
                                    1
                                </span>{" "}
                                to{" "}
                                <span className="font-medium text-gray-900 dark:text-white">
                                    5
                                </span>{" "}
                                of{" "}
                                <span className="font-medium text-gray-900 dark:text-white">
                                    123
                                </span>{" "}
                                users
                            </div>
                            <div className="flex items-center gap-3">
                                <a
                                    className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/10"
                                    href="#"
                                >
                                    <span className="material-symbols-outlined text-base">
                                        <FaArrowLeft></FaArrowLeft>
                                    </span>
                                </a>
                                <a
                                    className="flex h-9 w-9 items-center justify-center rounded-lg text-sm font-bold bg-primary text-white"
                                    href="#"
                                >
                                    1
                                </a>
                                <a
                                    className="flex h-9 w-9 items-center justify-center rounded-lg text-sm font-medium text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/10"
                                    href="#"
                                >
                                    2
                                </a>
                                <a
                                    className="flex h-9 w-9 items-center justify-center rounded-lg text-sm font-medium text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/10"
                                    href="#"
                                >
                                    3
                                </a>
                                <span className="flex h-9 w-9 items-center justify-center text-sm font-medium text-gray-500 dark:text-gray-400">
                                    ...
                                </span>
                                <a
                                    className="flex h-9 w-9 items-center justify-center rounded-lg text-sm font-medium text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/10"
                                    href="#"
                                >
                                    12
                                </a>
                                <a
                                    className="flex h-9 w-9 items-center justify-center rounded-lg text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/10"
                                    href="#"
                                >
                                    <span className="material-symbols-outlined text-base">
                                        <FaArrowRight />
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default DonorManagement;
