import React from "react";
import { IoCall } from "react-icons/io5";
import { MdMail } from "react-icons/md";

const Contact = () => {
    return (
        <div className=" container mx-auto py-16 sm:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                {/* <!-- Left Column: Heading and Contact Info --> */}
                <div className="space-y-8">
                    <div className="flex flex-col gap-3">
                        <h1 className="text-[#0e1b17] dark:text-white text-4xl sm:text-5xl font-black leading-tight tracking-[-0.033em]">
                            Get in Touch
                        </h1>
                        <p className="text-[#4d9981] dark:text-gray-400 text-lg font-normal leading-relaxed">
                            Have questions or feedback? We'd love to hear from
                            you. Fill out the form and we'll get back to you as
                            soon as possible.
                        </p>
                    </div>
                    <div className="space-y-6 pt-4">
                        <div className="flex items-center gap-4">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 text-primary">
                                <span className="material-symbols-outlined">
                                    <MdMail></MdMail>
                                </span>
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg text-[#0e1b17] dark:text-white">
                                    General Inquiries
                                </h3>
                                <a
                                    className="text-[#4d9981] dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
                                    href="mailto:info@bloodlink.com"
                                >
                                    info@bloodlink.com
                                </a>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 text-primary">
                                <span className="material-symbols-outlined">
                                    <IoCall></IoCall>
                                </span>
                            </div>
                            <div>
                                <h3 className="font-semibold text-lg text-[#0e1b17] dark:text-white">
                                    Support Line
                                </h3>
                                <a
                                    className="text-[#4d9981] dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors"
                                    href="tel:+1800555DONATE"
                                >
                                    +1 (800) 555-DONATE
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- Right Column: Contact Form --> */}
                <div className="w-full bg-white dark:bg-[#1a2c26] p-8 sm:p-10 rounded-xl shadow-lg dark:shadow-none border border-transparent dark:border-[#2a453c]">
                    <form action="#" className="space-y-6" method="POST">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <label className="flex flex-col flex-1">
                                <p className="text-[#0e1b17] dark:text-gray-200 text-base font-medium leading-normal pb-2">
                                    Full Name
                                </p>
                                <input
                                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0e1b17] dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-[#d0e7e0] dark:border-gray-600 bg-background-light dark:bg-background-dark focus:border-primary dark:focus:border-primary h-14 placeholder:text-[#4d9981] dark:placeholder:text-gray-500 p-[15px] text-base font-normal leading-normal transition-all"
                                    placeholder="Enter your full name"
                                    required=""
                                    type="text"
                                />
                            </label>
                            <label className="flex flex-col flex-1">
                                <p className="text-[#0e1b17] dark:text-gray-200 text-base font-medium leading-normal pb-2">
                                    Email Address
                                </p>
                                <input
                                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0e1b17] dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-[#d0e7e0] dark:border-gray-600 bg-background-light dark:bg-background-dark focus:border-primary dark:focus:border-primary h-14 placeholder:text-[#4d9981] dark:placeholder:text-gray-500 p-[15px] text-base font-normal leading-normal transition-all"
                                    placeholder="Enter your email address"
                                    required=""
                                    type="email"
                                />
                            </label>
                        </div>
                        <div>
                            <label className="flex flex-col flex-1">
                                <p className="text-[#0e1b17] dark:text-gray-200 text-base font-medium leading-normal pb-2">
                                    Subject
                                </p>
                                <input
                                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0e1b17] dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-[#d0e7e0] dark:border-gray-600 bg-background-light dark:bg-background-dark focus:border-primary dark:focus:border-primary h-14 placeholder:text-[#4d9981] dark:placeholder:text-gray-500 p-[15px] text-base font-normal leading-normal transition-all"
                                    placeholder="Enter the subject"
                                    required=""
                                    type="text"
                                />
                            </label>
                        </div>
                        <div>
                            <label className="flex flex-col flex-1">
                                <p className="text-[#0e1b17] dark:text-gray-200 text-base font-medium leading-normal pb-2">
                                    Your Message
                                </p>
                                <textarea
                                    className="form-textarea flex w-full min-w-0 flex-1 resize-y overflow-hidden rounded-lg text-[#0e1b17] dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-[#d0e7e0] dark:border-gray-600 bg-background-light dark:bg-background-dark focus:border-primary dark:focus:border-primary min-h-36 placeholder:text-[#4d9981] dark:placeholder:text-gray-500 p-[15px] text-base font-normal leading-normal transition-all"
                                    placeholder="Type your message here..."
                                    required=""
                                ></textarea>
                            </label>
                        </div>
                        <div>
                            <button
                                className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-full h-14 px-6 bg-primary text-[#0e1b17] text-base font-bold leading-normal tracking-[0.015em] hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:ring-offset-background-light dark:focus:ring-offset-background-dark transition-all duration-300"
                                type="submit"
                            >
                                <span className="truncate text-white">
                                    Send Message
                                </span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;
