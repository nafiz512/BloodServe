import React from "react";

const Funding = () => {
    return (
        <div>
            <div className="flex-1 p-8">
                <div className="flex flex-col gap-6 max-w-7xl mx-auto">
                    {/* <!-- PageHeading & Stats --> */}
                    <div className="flex flex-wrap justify-between items-start gap-6">
                        <div className="flex flex-col gap-6">
                            <h1 className="text-text-light dark:text-text-dark text-4xl font-black leading-tight tracking-[-0.033em]">
                                Funding
                            </h1>
                            <div className="flex min-w-[280px] flex-1 flex-col gap-2 rounded-xl p-6 bg-foreground-light dark:bg-foreground-dark border border-border-light dark:border-border-dark shadow-sm">
                                <p className="text-text-light dark:text-text-dark text-base font-medium leading-normal">
                                    Total Funds Raised
                                </p>
                                <p className="text-primary tracking-light text-3xl font-bold leading-tight">
                                    $12,345.67
                                </p>
                            </div>
                        </div>
                        <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-12 px-6 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] shadow-lg shadow-primary/30 hover:bg-opacity-90 transition-colors">
                            <span className="truncate">Give fund</span>
                        </button>
                    </div>
                    {/* <!-- Table --> */}
                    <div className="flex flex-col gap-4">
                        <h2 className="text-text-light dark:text-text-dark text-2xl font-bold">
                            Transaction History
                        </h2>
                        <div className="overflow-hidden rounded-xl border border-border-light dark:border-border-dark bg-foreground-light dark:bg-foreground-dark">
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead>
                                        <tr className="bg-foreground-light dark:bg-foreground-dark">
                                            <th className="px-6 py-4 text-left text-text-light dark:text-text-dark text-sm font-medium leading-normal">
                                                Name
                                            </th>
                                            <th className="px-6 py-4 text-left text-text-light dark:text-text-dark text-sm font-medium leading-normal">
                                                Amount
                                            </th>
                                            <th className="px-6 py-4 text-left text-text-light dark:text-text-dark text-sm font-medium leading-normal">
                                                Date
                                            </th>
                                            <th className="px-6 py-4 text-left text-text-light dark:text-text-dark text-sm font-medium leading-normal">
                                                Status
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-t border-border-light dark:border-border-dark">
                                            <td className="h-[72px] px-6 py-2 text-text-light dark:text-text-dark text-sm font-normal leading-normal">
                                                John Doe
                                            </td>
                                            <td className="h-[72px] px-6 py-2 text-subtle-light dark:text-subtle-dark text-sm font-normal leading-normal">
                                                $50.00
                                            </td>
                                            <td className="h-[72px] px-6 py-2 text-subtle-light dark:text-subtle-dark text-sm font-normal leading-normal">
                                                Oct 27, 2023
                                            </td>
                                            <td className="h-[72px] px-6 py-2 text-sm font-normal leading-normal">
                                                <div className="flex items-center gap-2 rounded-full py-1 px-3 bg-primary/20 text-primary w-fit">
                                                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                                                    <span>Completed</span>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className="border-t border-border-light dark:border-border-dark">
                                            <td className="h-[72px] px-6 py-2 text-text-light dark:text-text-dark text-sm font-normal leading-normal">
                                                Jane Smith
                                            </td>
                                            <td className="h-[72px] px-6 py-2 text-subtle-light dark:text-subtle-dark text-sm font-normal leading-normal">
                                                $100.00
                                            </td>
                                            <td className="h-[72px] px-6 py-2 text-subtle-light dark:text-subtle-dark text-sm font-normal leading-normal">
                                                Oct 26, 2023
                                            </td>
                                            <td className="h-[72px] px-6 py-2 text-sm font-normal leading-normal">
                                                <div className="flex items-center gap-2 rounded-full py-1 px-3 bg-primary/20 text-primary w-fit">
                                                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                                                    <span>Completed</span>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className="border-t border-border-light dark:border-border-dark">
                                            <td className="h-[72px] px-6 py-2 text-text-light dark:text-text-dark text-sm font-normal leading-normal">
                                                Anonymous Donor
                                            </td>
                                            <td className="h-[72px] px-6 py-2 text-subtle-light dark:text-subtle-dark text-sm font-normal leading-normal">
                                                $25.00
                                            </td>
                                            <td className="h-[72px] px-6 py-2 text-subtle-light dark:text-subtle-dark text-sm font-normal leading-normal">
                                                Oct 25, 2023
                                            </td>
                                            <td className="h-[72px] px-6 py-2 text-sm font-normal leading-normal">
                                                <div className="flex items-center gap-2 rounded-full py-1 px-3 bg-primary/20 text-primary w-fit">
                                                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                                                    <span>Completed</span>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className="border-t border-border-light dark:border-border-dark">
                                            <td className="h-[72px] px-6 py-2 text-text-light dark:text-text-dark text-sm font-normal leading-normal">
                                                Michael Brown
                                            </td>
                                            <td className="h-[72px] px-6 py-2 text-subtle-light dark:text-subtle-dark text-sm font-normal leading-normal">
                                                $75.00
                                            </td>
                                            <td className="h-[72px] px-6 py-2 text-subtle-light dark:text-subtle-dark text-sm font-normal leading-normal">
                                                Oct 24, 2023
                                            </td>
                                            <td className="h-[72px] px-6 py-2 text-sm font-normal leading-normal">
                                                <div className="flex items-center gap-2 rounded-full py-1 px-3 bg-primary/20 text-primary w-fit">
                                                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                                                    <span>Completed</span>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr className="border-t border-border-light dark:border-border-dark">
                                            <td className="h-[72px] px-6 py-2 text-text-light dark:text-text-dark text-sm font-normal leading-normal">
                                                Emily White
                                            </td>
                                            <td className="h-[72px] px-6 py-2 text-subtle-light dark:text-subtle-dark text-sm font-normal leading-normal">
                                                $150.00
                                            </td>
                                            <td className="h-[72px] px-6 py-2 text-subtle-light dark:text-subtle-dark text-sm font-normal leading-normal">
                                                Oct 23, 2023
                                            </td>
                                            <td className="h-[72px] px-6 py-2 text-sm font-normal leading-normal">
                                                <div className="flex items-center gap-2 rounded-full py-1 px-3 bg-primary/20 text-primary w-fit">
                                                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                                                    <span>Completed</span>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    {/* <!-- Pagination --> */}
                    <div className="flex items-center justify-center p-4">
                        <a
                            className="flex size-10 items-center justify-center rounded-full hover:bg-primary/20 text-text-light dark:text-text-dark"
                            href="#"
                        >
                            <span className="material-symbols-outlined text-lg">
                                chevron_left
                            </span>
                        </a>
                        <a
                            className="text-sm font-bold leading-normal tracking-[0.015em] flex size-10 items-center justify-center text-white rounded-full bg-primary"
                            href="#"
                        >
                            1
                        </a>
                        <a
                            className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-text-light dark:text-text-dark rounded-full hover:bg-primary/20"
                            href="#"
                        >
                            2
                        </a>
                        <a
                            className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-text-light dark:text-text-dark rounded-full hover:bg-primary/20"
                            href="#"
                        >
                            3
                        </a>
                        <a
                            className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-text-light dark:text-text-dark rounded-full hover:bg-primary/20"
                            href="#"
                        >
                            4
                        </a>
                        <a
                            className="text-sm font-normal leading-normal flex size-10 items-center justify-center text-text-light dark:text-text-dark rounded-full hover:bg-primary/20"
                            href="#"
                        >
                            5
                        </a>
                        <a
                            className="flex size-10 items-center justify-center rounded-full hover:bg-primary/20 text-text-light dark:text-text-dark"
                            href="#"
                        >
                            <span className="material-symbols-outlined text-lg">
                                chevron_right
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Funding;
