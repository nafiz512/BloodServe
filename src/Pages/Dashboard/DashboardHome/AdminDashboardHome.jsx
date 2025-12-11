import React from "react";

const AdminDashboardHome = () => {
    return (
        <div>
            <main class="flex-1 p-6 lg:p-10">
                <div class="max-w-7xl mx-auto">
                    <div class="flex flex-wrap justify-between gap-4 mb-8">
                        <h1 class="text-text-light-primary dark:text-text-dark-primary text-4xl font-black leading-tight tracking-[-0.033em]">
                            Dashboard Overview
                        </h1>
                    </div>
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                        <div class="flex min-w-[158px] flex-col gap-4 rounded-xl p-6 bg-foreground-light dark:bg-foreground-dark border border-border-light dark:border-border-dark shadow-sm">
                            <div class="flex items-center justify-between">
                                <p class="text-text-light-primary dark:text-text-dark-primary text-base font-medium leading-normal">
                                    Total Users
                                </p>
                                <div class="w-10 h-10 flex items-center justify-center bg-primary/20 rounded-lg">
                                    <span class="material-symbols-outlined text-primary">
                                        group
                                    </span>
                                </div>
                            </div>
                            <p class="text-text-light-primary dark:text-text-dark-primary tracking-light text-4xl font-bold leading-tight">
                                1,250
                            </p>
                        </div>
                        <div class="flex min-w-[158px] flex-col gap-4 rounded-xl p-6 bg-foreground-light dark:bg-foreground-dark border border-border-light dark:border-border-dark shadow-sm">
                            <div class="flex items-center justify-between">
                                <p class="text-text-light-primary dark:text-text-dark-primary text-base font-medium leading-normal">
                                    Total Funds
                                </p>
                                <div class="w-10 h-10 flex items-center justify-center bg-primary/20 rounded-lg">
                                    <span class="material-symbols-outlined text-primary">
                                        payments
                                    </span>
                                </div>
                            </div>
                            <p class="text-text-light-primary dark:text-text-dark-primary tracking-light text-4xl font-bold leading-tight">
                                $15,480
                            </p>
                        </div>
                        <div class="flex min-w-[158px] flex-col gap-4 rounded-xl p-6 bg-foreground-light dark:bg-foreground-dark border border-border-light dark:border-border-dark shadow-sm">
                            <div class="flex items-center justify-between">
                                <p class="text-text-light-primary dark:text-text-dark-primary text-base font-medium leading-normal">
                                    Donation Requests
                                </p>
                                <div class="w-10 h-10 flex items-center justify-center bg-primary/20 rounded-lg">
                                    <span class="material-symbols-outlined text-primary">
                                        bloodtype
                                    </span>
                                </div>
                            </div>
                            <p class="text-text-light-primary dark:text-text-dark-primary tracking-light text-4xl font-bold leading-tight">
                                892
                            </p>
                        </div>
                    </div>
                    <div class="bg-foreground-light dark:bg-foreground-dark rounded-xl border border-border-light dark:border-border-dark shadow-sm p-6">
                        <div class="flex flex-wrap justify-between items-center gap-4 mb-4">
                            <h2 class="text-text-light-primary dark:text-text-dark-primary text-[22px] font-bold leading-tight tracking-[-0.015em]">
                                Donation Trends
                            </h2>
                            <div class="flex w-full max-w-xs">
                                <div class="flex h-10 flex-1 items-center justify-center rounded-lg bg-background-light dark:bg-background-dark p-1 border border-border-light dark:border-border-dark">
                                    <label class="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-md px-2 has-[:checked]:bg-foreground-light has-[:checked]:dark:bg-foreground-dark has-[:checked]:shadow-sm has-[:checked]:text-text-light-primary has-[:checked]:dark:text-text-dark-primary text-text-light-secondary dark:text-text-dark-secondary text-sm font-medium leading-normal transition-colors duration-200">
                                        <span class="truncate">Daily</span>
                                        <input
                                            class="invisible w-0"
                                            name="trends-timespan"
                                            type="radio"
                                            value="Daily"
                                        />
                                    </label>
                                    <label class="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-md px-2 has-checked:bg-foreground-light has-checked:dark:bg-foreground-dark has-[:checked]:shadow-sm has-checked:text-text-light-primary has-checked:dark:text-text-dark-primary text-text-light-secondary dark:text-text-dark-secondary text-sm font-medium leading-normal transition-colors duration-200">
                                        <span class="truncate">Weekly</span>
                                        <input
                                            checked=""
                                            class="invisible w-0"
                                            name="trends-timespan"
                                            type="radio"
                                            value="Weekly"
                                        />
                                    </label>
                                    <label class="flex cursor-pointer h-full grow items-center justify-center overflow-hidden rounded-md px-2 has-[:checked]:bg-foreground-light has-[:checked]:dark:bg-foreground-dark has-[:checked]:shadow-sm has-[:checked]:text-text-light-primary has-[:checked]:dark:text-text-dark-primary text-text-light-secondary dark:text-text-dark-secondary text-sm font-medium leading-normal transition-colors duration-200">
                                        <span class="truncate">Monthly</span>
                                        <input
                                            class="invisible w-0"
                                            name="trends-timespan"
                                            type="radio"
                                            value="Monthly"
                                        />
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div class="h-80 flex items-center justify-center bg-background-light dark:bg-background-dark rounded-lg">
                            <div class="w-full h-full p-4">
                                <div
                                    class="h-full flex items-end gap-3"
                                    data-alt="A placeholder bar chart showing weekly donation trends with vertical bars of varying heights."
                                >
                                    <div class="flex-1 h-[60%] bg-primary/30 rounded-t-md"></div>
                                    <div class="flex-1 h-[45%] bg-primary/30 rounded-t-md"></div>
                                    <div class="flex-1 h-[75%] bg-primary rounded-t-md"></div>
                                    <div class="flex-1 h-[50%] bg-primary/30 rounded-t-md"></div>
                                    <div class="flex-1 h-[85%] bg-primary/30 rounded-t-md"></div>
                                    <div class="flex-1 h-[65%] bg-primary/30 rounded-t-md"></div>
                                    <div class="flex-1 h-[70%] bg-primary/30 rounded-t-md"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default AdminDashboardHome;
