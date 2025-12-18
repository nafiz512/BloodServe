import React from 'react';
import { useEffect } from 'react';
import { BiCalendar, BiCheck, BiDownload, BiReceipt, BiShare } from 'react-icons/bi';
import { MdDashboard } from 'react-icons/md';
import { NavLink, useSearchParams } from 'react-router';
import useAxios from '../../hooks/useAxios';
import { useState } from 'react';

const DonationSuccess = () => {
    const [searchParams] = useSearchParams()
    const axios = useAxios()
    const sessionId = searchParams.get('session_id')
    const [donationInfo, setDonationInfo] = useState({})
    // console.log(sessionId);
    useEffect(() => {
        if (!sessionId) return;

        axios.get(`/donation-success?session_id=${sessionId}`)
            .then(successRes => {

                if (!successRes.data.success) return;
                setDonationInfo(successRes.data)
                const paymentInfo = successRes.data;
                axios
                    .get(`/funds?transactionId=${paymentInfo.transactionId}`)
                    .then(fundRes => {

                        // already saved → do nothing
                        if (fundRes.data) return;

                        // not saved → insert
                        axios.post('/funds', paymentInfo)
                    });
            });

    }, [axios, sessionId]);


    return (
        <div>
            <div className="grow flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-lg">
                    {/* <!-- Success Card --> */}
                    <div className="bg-surface-light dark:bg-surface-dark shadow-xl rounded-2xl overflow-hidden ring-1 ring-black/5 dark:ring-white/10 relative">
                        {/* <!-- Decorative Top Gradient --> */}
                        <div className="h-2 w-full bg-linear-to-r from-primary/60 via-primary to-primary/60"></div>
                        <div className="p-8 sm:p-10 flex flex-col items-center text-center">
                            {/* <!-- Success Icon with Animation wrapper --> */}
                            <div className="mb-6 relative">
                                <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
                                <div className="relative bg-primary/10 dark:bg-primary/20 p-5 rounded-full flex items-center justify-center">
                                    <span className="material-symbols-outlined text-primary text-6xl"><BiCheck></BiCheck></span>
                                </div>
                            </div>
                            {/* <!-- Headline --> */}
                            <h1 className="text-[#0e1b17] dark:text-white tracking-tight text-3xl font-bold leading-tight mb-2">
                                Thank You!
                            </h1>
                            {/* <!-- Sub-headline --> */}
                            <h2 className="text-primary-dark dark:text-primary text-lg font-semibold mb-4">
                                Donation Received Successfully
                            </h2>
                            {/* <!-- Body Text --> */}
                            <p className="text-gray-600 dark:text-gray-300 text-base font-normal leading-relaxed mb-8 max-w-sm">
                                Your generous contribution of <span className="font-bold text-[#0e1b17] dark:text-white">${donationInfo?.amount}</span> has been processed. Every drop counts, and your support helps us save lives.
                            </p>
                            {/* <!-- Transaction Details Card --> */}
                            <div className="w-full bg-background-light dark:bg-[#11211c] rounded-xl p-5 mb-8 border border-[#e7f3ef] dark:border-[#2a4038]">
                                <div className="flex justify-between items-center py-2 border-b border-gray-200 dark:border-gray-700/50 last:border-0">
                                    <span className="text-gray-500 dark:text-gray-400 text-sm font-medium flex items-center gap-2">
                                        <span className="material-symbols-outlined text-[18px]"><BiReceipt></BiReceipt></span>
                                        Transaction ID
                                    </span>
                                    <span className="text-[#0e1b17] dark:text-white text-sm font-mono">{donationInfo?.transactionId}</span>
                                </div>
                                <div className="flex justify-between items-center py-2 pt-3">
                                    <span className="text-gray-500 dark:text-gray-400 text-sm font-medium flex items-center gap-2">
                                        <span className="material-symbols-outlined text-[18px]"><BiCalendar></BiCalendar></span>
                                        Date
                                    </span>
                                    <span className="text-[#0e1b17] dark:text-white text-sm">{donationInfo?.createAt && new Date(donationInfo.createAt).toLocaleString()}</span>
                                </div>
                            </div>
                            {/* <!-- Actions --> */}
                            <div className="flex flex-col gap-3 w-full">
                                <NavLink to={'/'}> <button className="w-full bg-primary hover:bg-[#14dcb3] text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md flex items-center justify-center gap-2">
                                    <span className="material-symbols-outlined"><MdDashboard></MdDashboard></span>
                                    Return to Dashboard
                                </button></NavLink>

                                <div className="grid grid-cols-2 gap-3 w-full">
                                    <button className="flex items-center justify-center gap-2 w-full bg-transparent border border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-white/5 text-gray-700 dark:text-gray-200 font-medium py-2.5 px-4 rounded-lg transition-colors text-sm">
                                        <span className="material-symbols-outlined text-[18px]"><BiDownload></BiDownload></span>
                                        Receipt
                                    </button>
                                    <button className="flex items-center justify-center gap-2 w-full bg-transparent border border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-white/5 text-gray-700 dark:text-gray-200 font-medium py-2.5 px-4 rounded-lg transition-colors text-sm">
                                        <span className="material-symbols-outlined text-[18px]"><BiShare></BiShare></span>
                                        Share
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default DonationSuccess;