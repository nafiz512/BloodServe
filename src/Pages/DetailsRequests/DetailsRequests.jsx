import React, { useContext, useEffect, useState } from "react";
import { MdBloodtype, MdVolunteerActivism } from "react-icons/md";
import Swal from 'sweetalert2'
import AuthContext from "../../context/AuthContext";
// import useAxios from "../../hooks/useAxios";
import { useParams } from "react-router";
import useSecureAxios from "../../hooks/useSecureAxios";

const DetailsRequests = () => {
    const { user } = useContext(AuthContext)
    const axios = useSecureAxios()
    const { id } = useParams();
    const [data, setData] = useState({})
    const [reFetch, setRefetch] = useState(0)
    useEffect(() => {
        axios.get(`/donation-requests/${id}`).then(data => {
            setData(data.data)
        })
    }, [axios, id, reFetch])

    const handleDonateNow = () => {
        Swal.fire({
            title: "Do you confirm to Blood Donation?",
            html: `
        <div style="text-align: left; margin-top: 10px;">
        <h2>Donor info: </h2>
            <p><strong>Name:</strong> ${user?.displayName}</p>
            <p><strong>Email:</strong> ${user?.email}</p>
        </div>
    `,
            showDenyButton: true,
            // showCancelButton: true,
            confirmButtonText: "Confirm",
            denyButtonText: `Cancel`
        }).then((result) => {
            if (result.isConfirmed) {

                axios.patch(`/donation-request/${id}`, { status: "inprogress", donorName: user?.displayName, donorEmail: user?.email }).then(res => {
                    if (res.data.modifiedCount) {
                        Swal.fire("Saved!", "", "success");
                        setRefetch(reFetch + 1)
                    }
                }).catch(error => {
                    Swal.fire(error.message);
                })
            } else if (result.isDenied) {
                Swal.fire("Changes are not saved", "", "info");
            }
        });
    }

    return (
        <div className="flex flex-1 justify-center py-8 px-4 sm:px-6 lg:px-8">
            <div className="layout-content-container flex flex-col w-full max-w-4xl gap-6">
                <div className="flex flex-wrap justify-between items-start gap-3 px-4">
                    <div className="flex min-w-72 flex-col gap-2">
                        <p className="text-[#0e1b17] dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">
                            Donation Request Details
                        </p>
                        <p className="text-[#4d9981] dark:text-white/70 text-base font-normal leading-normal">
                            Review the information below before committing to
                            donate.
                        </p>
                    </div>
                </div>
                <div className="bg-white dark:bg-background-dark/50 rounded-2xl shadow-sm border border-black/5 dark:border-white/10 p-6 sm:p-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                        <div className="flex flex-col gap-1 border-b border-solid border-b-black/10 dark:border-b-white/10 py-4">
                            <p className="text-[#4d9981] dark:text-white/60 text-sm font-medium leading-normal">
                                Recipient Name
                            </p>
                            <p className="text-[#0e1b17] dark:text-white text-base font-semibold leading-normal">
                                {data?.recipientName}
                            </p>
                        </div>
                        <div className="flex flex-col gap-1 border-b border-solid border-b-black/10 dark:border-b-white/10 py-4">
                            <p className="text-[#4d9981] dark:text-white/60 text-sm font-medium leading-normal">
                                Hospital Name
                            </p>
                            <p className="text-[#0e1b17] dark:text-white text-base font-semibold leading-normal">
                                {data?.hospitalName}
                            </p>
                        </div>
                        <div className="flex flex-col gap-1 border-b border-solid border-b-black/10 dark:border-b-white/10 py-4">
                            <p className="text-[#4d9981] dark:text-white/60 text-sm font-medium leading-normal">
                                Donation Date &amp; Time
                            </p>
                            <p className="text-[#0e1b17] dark:text-white text-base font-semibold leading-normal">
                                {data?.donationDate} , {data?.donationTime}
                            </p>
                        </div>
                        <div className="flex flex-col gap-1 border-b border-solid border-b-black/10 dark:border-b-white/10 py-4">
                            <p className="text-[#4d9981] dark:text-white/60 text-sm font-medium leading-normal">
                                Full Address
                            </p>
                            <p className="text-[#0e1b17] dark:text-white text-base font-semibold leading-normal">
                                {data?.fullAddress}
                            </p>
                        </div>
                        <div className="flex flex-col gap-1 border-b border-solid border-b-black/10 dark:border-b-white/10 py-4">
                            <p className="text-[#4d9981] dark:text-white/60 text-sm font-medium leading-normal">
                                Blood Group
                            </p>
                            <div className="flex items-center gap-2">
                                <span
                                    className="material-symbols-outlined text-red-500"
                                    data-icon="bloodtype"
                                >
                                    <MdBloodtype className="text-xl"></MdBloodtype>
                                </span>
                                <p className="text-red-500 text-base font-bold leading-normal">
                                    {data?.bloodGroup}
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-1 border-b border-solid border-b-black/10 dark:border-b-white/10 py-4">
                            <p className="text-[#4d9981] dark:text-white/60 text-sm font-medium leading-normal">
                                Location
                            </p>
                            <p className="text-[#0e1b17] dark:text-white text-base font-semibold leading-normal">
                                {data?.district}, {data?.upazila}
                            </p>
                        </div>
                        <div className="flex flex-col gap-1 border-b border-solid border-b-black/10 dark:border-b-white/10 py-4 md:col-span-2">
                            <p className="text-[#4d9981] dark:text-white/60 text-sm font-medium leading-normal">
                                Request Status
                            </p>
                            <div className="inline-flex items-center">
                                <span className="bg-yellow-100 dark:bg-yellow-900/50 text-yellow-800 dark:text-yellow-300 text-sm font-semibold me-2 px-3 py-1 rounded-lg">
                                    {data?.status}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="pt-6 ">
                        <h3 className="text-[#0e1b17] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] pb-2">
                            A Message from the Requester
                        </h3>
                        <p className="text-[#4d9981] dark:text-white/80 text-base leading-relaxed">
                            Our family is in urgent need of O+ blood for Jane,
                            who is undergoing a critical surgery. Your kind
                            donation would mean the world to us and could save
                            her life. We are deeply grateful for any help you
                            can provide. Please contact us if you are able to
                            donate. Thank you from the bottom of our hearts.
                        </p>
                    </div>
                    <div className="mt-8 pt-6 border-t border-solid border-black/10 dark:border-t-white/10">
                        <h3 className="text-[#0e1b17] dark:text-white text-lg font-bold leading-tight tracking-[-0.015em] pb-2">
                            Requester Information
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                            <div className="flex flex-col gap-1">
                                <p className="text-[#4d9981] dark:text-white/60 text-sm font-medium leading-normal">
                                    Requester Name
                                </p>
                                <p className="text-[#0e1b17] dark:text-white text-base leading-normal">
                                    {data?.requesterName}
                                </p>
                            </div>
                            <div className="flex flex-col gap-1">
                                <p className="text-[#4d9981] dark:text-white/60 text-sm font-medium leading-normal">
                                    Requester Email
                                </p>
                                <p className="text-[#0e1b17] dark:text-white text-base leading-normal">
                                    {data?.requesterEmail}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 pt-8 border-t border-solid border-black/10 dark:border-t-white/10 flex justify-end">
                        <div>
                            <button onClick={handleDonateNow}
                                disabled={false}
                                className="flex min-w-[120px] items-center justify-center gap-2 overflow-hidden rounded-lg h-12 px-6 bg-primary  font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors duration-200 disabled:bg-gray-300 dark:disabled:bg-gray-700 disabled:cursor-not-allowed disabled:text-gray-500 dark:disabled:text-gray-400 text-white"
                            >
                                <span
                                    className="material-symbols-outlined "
                                    data-icon="volunteer_activism"
                                >
                                    <MdVolunteerActivism className="text-xl"></MdVolunteerActivism>
                                </span>
                                <span className="truncate">Donate Now</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailsRequests;
