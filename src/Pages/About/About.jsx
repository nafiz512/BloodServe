import React from "react";
import { CgNotifications } from "react-icons/cg";
import { FaSchool } from "react-icons/fa";
import { GrGroup } from "react-icons/gr";
import {
    MdTravelExplore,
    MdVerifiedUser,
    MdVolunteerActivism,
} from "react-icons/md";

const About = () => {
    return (
        <div className="">
            {/* */}
            <section className="relative py-20 sm:py-28">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat 
                    bg-[linear-gradient(rgba(246,248,247,0.8)_0%,rgb(246,248,247)_100%),url('https://lh3.googleusercontent.com/aida-public/AB6AXuDyjNO75S2Xmp4P8RD2_roK67mRypUxPy98rTP2mS8ivkpLCG4Vzt8eYRHZFuu56XF4R6eSxx4S_coGKbdN4nk3t7jQPLQSvbQ1_N-8M6XdP-zFBwooNwHeRGRaFM9zY8OnVa9ZEo5-hGR5GUKesX26PGOii6_q7Ose28JS8xCkEBE8iwwIIedr1p7x4mVzJEgy8byEeC2T2FwmEhWcXaOgXGIdtisej0XdB-c7sHg8KKe0pfp9-hvNcrdl78xWoO8je4gAcjQzY2Q')]"
                    data-alt="Soft-focus, optimistic image showing a diverse group of smiling people, conveying community and hope."
                ></div>
                <div className="dark:absolute dark:inset-0 dark:bg-background-dark/80"></div>
                <div className="relative mx-auto  lg:px-8">
                    <div className="mx-auto max-w-3xl text-center">
                        <h1 className="text-4xl font-black leading-tight tracking-[-0.033em] text-[#0e1b17] dark:text-white sm:text-5xl lg:text-6xl">
                            Connecting Lifesavers, One Donation at a Time
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-gray-700 dark:text-gray-300">
                            Welcome to BloodLink, where technology and
                            compassion meet to save lives. We are dedicated to
                            creating a seamless, supportive, and efficient
                            network for blood donors, volunteers, and those in
                            urgent need.
                        </p>
                    </div>
                </div>
            </section>
            {/* ... rest of the component ... */}
            <section className="py-16 sm:py-24">
                <div className="">
                    <div className="mx-auto max-w-2xl lg:max-w-none">
                        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-24">
                            <div className="overflow-hidden rounded-2xl shadow-lg">
                                <img
                                    className="h-full w-full object-cover object-center"
                                    data-alt="A close-up photo of a healthcare professional carefully handling a blood bag, representing care and safety."
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDBF05rjmoNUXqDqMHLKcbhFsQ-68pszuDtmnqUFLxpe0lbflzQmbHtASDZVaj6-CpemB7HKFoOfNgF6w3VI5A632qli2Ra86odg_7mId5QD9L3s861SMirUecgTolG0cqU-KvsiVT_CzQiBVhAQlcr2FfOlv4YxR1yuiDLdiccnytApfgR_EPckJEXO9luupFYsBIYgL9IRvCotrF7Wqy8DIfEA_4QNupABSds3nWdGkpkA5mGhYGXAuqV6yaKn2i_N82IE375Kug"
                                />
                            </div>
                            <div>
                                <h2 className="text-3xl font-bold tracking-tight text-[#0e1b17] dark:text-white sm:text-4xl">
                                    Our Mission
                                </h2>
                                <p className="mt-6 text-base leading-7 text-gray-700 dark:text-gray-300">
                                    Our mission is to save lives by
                                    revolutionizing the blood donation process.
                                    We leverage digital innovation to make
                                    donating and receiving blood more
                                    accessible, efficient, and reliable for
                                    everyone. We believe in building a
                                    supportive community where every drop counts
                                    and every person has a chance to make a
                                    difference.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* */}
            <section className="bg-white/50 dark:bg-background-dark/50 py-16 sm:py-24">
                <div className="">
                    <div className="mx-auto max-w-2xl lg:text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-[#0e1b17] dark:text-white sm:text-4xl">
                            How We Make a Difference
                        </h2>
                        <p className="mt-4 text-lg leading-8 text-gray-700 dark:text-gray-300">
                            We have built a platform with powerful features
                            designed to connect donors and recipients quickly
                            and safely, creating a lifeline in critical moments.
                        </p>
                    </div>
                    <div className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-2 lg:mt-16 lg:max-w-none lg:grid-cols-3">
                        <div className="flex flex-col gap-3 rounded-2xl border border-gray-200/80 dark:border-gray-700/50 bg-background-light dark:bg-background-dark p-6 shadow-md">
                            <span className="material-symbols-outlined text-primary text-3xl">
                                <GrGroup></GrGroup>
                            </span>
                            <div className="flex flex-col gap-1">
                                <h3 className="text-lg font-semibold leading-tight text-[#0e1b17] dark:text-white">
                                    Donor-Recipient Matching
                                </h3>
                                <p className="text-sm font-normal leading-normal text-gray-600 dark:text-gray-400">
                                    Intelligently connecting compatible donors
                                    with recipients in need based on blood type
                                    and location.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3 rounded-2xl border border-gray-200/80 dark:border-gray-700/50 bg-background-light dark:bg-background-dark p-6 shadow-md">
                            <span className="material-symbols-outlined text-primary text-3xl">
                                <CgNotifications></CgNotifications>
                            </span>
                            <div className="flex flex-col gap-1">
                                <h3 className="text-lg font-semibold leading-tight text-[#0e1b17] dark:text-white">
                                    Real-Time Requests
                                </h3>
                                <p className="text-sm font-normal leading-normal text-gray-600 dark:text-gray-400">
                                    Instantly broadcast urgent blood requests to
                                    nearby, available donors via push
                                    notifications.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3 rounded-2xl border border-gray-200/80 dark:border-gray-700/50 bg-background-light dark:bg-background-dark p-6 shadow-md">
                            <span className="material-symbols-outlined text-primary text-3xl">
                                <MdVerifiedUser></MdVerifiedUser>
                            </span>
                            <div className="flex flex-col gap-1">
                                <h3 className="text-lg font-semibold leading-tight text-[#0e1b17] dark:text-white">
                                    Verified Donors
                                </h3>
                                <p className="text-sm font-normal leading-normal text-gray-600 dark:text-gray-400">
                                    Ensuring the safety and reliability of our
                                    network with a thorough donor verification
                                    process.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3 rounded-2xl border border-gray-200/80 dark:border-gray-700/50 bg-background-light dark:bg-background-dark p-6 shadow-md">
                            <span className="material-symbols-outlined text-primary text-3xl">
                                <MdTravelExplore></MdTravelExplore>
                            </span>
                            <div className="flex flex-col gap-1">
                                <h3 className="text-lg font-semibold leading-tight text-[#0e1b17] dark:text-white">
                                    Location-Based Search
                                </h3>
                                <p className="text-sm font-normal leading-normal text-gray-600 dark:text-gray-400">
                                    Find donors or donation centers in your
                                    vicinity with our powerful, map-based search
                                    functionality.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3 rounded-2xl border border-gray-200/80 dark:border-gray-700/50 bg-background-light dark:bg-background-dark p-6 shadow-md">
                            <span className="material-symbols-outlined text-primary text-3xl">
                                <FaSchool></FaSchool>
                            </span>
                            <div className="flex flex-col gap-1">
                                <h3 className="text-lg font-semibold leading-tight text-[#0e1b17] dark:text-white">
                                    Awareness & Education
                                </h3>
                                <p className="text-sm font-normal leading-normal text-gray-600 dark:text-gray-400">
                                    Providing vital information and resources to
                                    promote the importance and safety of blood
                                    donation.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-3 rounded-2xl border border-gray-200/80 dark:border-gray-700/50 bg-background-light dark:bg-background-dark p-6 shadow-md">
                            <span className="material-symbols-outlined text-primary text-3xl">
                                <MdVolunteerActivism></MdVolunteerActivism>
                            </span>
                            <div className="flex flex-col gap-1">
                                <h3 className="text-lg font-semibold leading-tight text-[#0e1b17] dark:text-white">
                                    Community Building
                                </h3>
                                <p className="text-sm font-normal leading-normal text-gray-600 dark:text-gray-400">
                                    Fostering a community of lifesavers through
                                    events, stories, and shared purpose.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* */}
            <section className="py-16 sm:py-24">
                <div className="">
                    <div className="mx-auto max-w-3xl text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-[#0e1b17] dark:text-white sm:text-4xl">
                            Why We Built This Platform
                        </h2>
                        <p className="mt-6 text-lg leading-8 text-gray-700 dark:text-gray-300">
                            Finding a matching blood donor in an emergency is a
                            stressful and often inefficient process, relying on
                            scattered social media posts and frantic phone
                            calls. We saw an opportunity for technology to
                            bridge this critical gap. BloodLink was created to
                            replace uncertainty with reliability, connecting
                            those in need with volunteer donors in real-time,
                            making the process of saving a life simpler, faster,
                            and more hopeful.
                        </p>
                    </div>
                </div>
            </section>
            {/* */}
            <section className="py-16 sm:py-24">
                <div className="">
                    <div className="relative isolate overflow-hidden bg-primary/20 dark:bg-primary/10 rounded-2xl px-6 py-20 text-center shadow-lg sm:px-16">
                        <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-[#0e1b17] dark:text-white sm:text-4xl">
                            Our Commitment to You
                        </h2>
                        <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-800 dark:text-gray-200">
                            Your trust is our foundation. We are committed to
                            upholding the highest standards of privacy, safety,
                            and transparency. Every connection made on our
                            platform is handled with care and social
                            responsibility, ensuring a safe and supportive
                            environment for both donors and recipients.
                        </p>
                    </div>
                </div>
            </section>
            {/* */}
            <section className="py-16 sm:py-24">
                <div className="">
                    <div className="mx-auto max-w-3xl text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-[#0e1b17] dark:text-white sm:text-4xl">
                            Be a Part of the Mission
                        </h2>
                        <p className="mt-4 text-lg leading-8 text-gray-700 dark:text-gray-300">
                            Your decision to donate can bring hope and a second
                            chance at life to someone in need. Join our growing
                            community of lifesavers today.
                        </p>
                        <div className="mt-10 flex-wrap gap-4 flex justify-center">
                            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-opacity-80 transition-opacity">
                                <span className="truncate">Become a Donor</span>
                            </button>
                            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-gray-200 dark:bg-gray-700 text-[#0e1b17] dark:text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-opacity-80 dark:hover:bg-opacity-80 transition-opacity">
                                <span className="truncate">Support Us</span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
