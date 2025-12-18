import React from 'react';
import { MdGppBad } from 'react-icons/md';
import { NavLink } from 'react-router';

const DonationCancel = () => {
    return (
        <div>
            <main class="grow flex items-center justify-center px-4 py-12 md:py-20">
                <div class="layout-content-container flex flex-col w-full max-w-[560px]">
                    {/* <!-- Central Status Card --> */}
                    <div class="bg-surface-light dark:bg-surface-dark rounded-2xl p-8 md:p-12 shadow-xl border border-[#e6e0db] dark:border-[#3e3228] text-center">
                        {/* <!-- Visual Indicator --> */}
                        <div class="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-red-50 dark:bg-red-900/20">
                            <span class="material-symbols-outlined text-6xl text-red-500 dark:text-red-400">
                                <MdGppBad></MdGppBad>
                            </span>
                        </div>
                        {/* <!-- Headline --> */}
                        <h1 class="text-text-main dark:text-white tracking-tight text-3xl md:text-[32px] font-bold leading-tight px-4 pb-3">
                            Transaction Unsuccessful
                        </h1>
                        {/* <!-- Body Text --> */}
                        <p class="text-[#635243] dark:text-[#a89b92] text-base font-normal leading-relaxed pb-8 px-4 max-w-md mx-auto">
                            We couldn't process your payment at this time. No funds have been deducted from your account. Please check your payment details or try a different method.
                        </p>
                        {/* <!-- Additional Info / Error Code (Optional refinement) --> */}
                        <div class="bg-background-light dark:bg-[#221910] rounded-lg p-3 mb-8 inline-block mx-auto border border-[#e6e0db] dark:border-[#3e3228]">
                            <p class="text-xs font-mono text-[#8c7b6d] dark:text-[#7d6e63] uppercase tracking-wider">
                                Error Code: PAY-ERR-402
                            </p>
                        </div>
                        {/* <!-- Action Buttons --> */}
                        <div class="flex flex-col sm:flex-row gap-3 justify-center w-full">
                            <NavLink to={-1}> <button class="flex-1 min-w-[140px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-6 bg-primary hover:bg-[#d9720b] transition-colors text-white text-base font-bold leading-normal tracking-[0.015em] shadow-sm">
                                <span class="truncate">Try Again</span>
                            </button> </NavLink>
                            <NavLink to={'/dashboard'}> <button class="flex-1 min-w-[140px] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-6 bg-transparent border border-[#d0c6bc] dark:border-[#5c4d41] hover:bg-[#f3ede7] dark:hover:bg-[#3a2e25] transition-colors text-text-main dark:text-white text-base font-bold leading-normal tracking-[0.015em]">
                                <span class="truncate">Return to Dashboard</span>
                            </button></NavLink>

                        </div>

                    </div>
                </div>
            </main>
        </div>
    );
};

export default DonationCancel;