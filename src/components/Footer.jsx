import React from "react";
import Logo from "./Logo";

const Footer = () => {
    return (
        <div>
            <footer className="px-[8%] bg-white/50 dark:bg-background-dark/30 border-t border-black/5 dark:border-white/10 mt-12 pt-6">
                <div className=" mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div>
                        <div className="flex items-center gap-3 text-[#0e1b17] dark:text-white mb-4">
                            <Logo></Logo>
                        </div>
                        <p className="text-[#4d9981] dark:text-white/70 text-sm">
                            Connecting donors with those in need. Saving lives,
                            one drop at a time.
                        </p>
                    </div>
                    <div>
                        <h4 className="font-bold text-[#0e1b17] dark:text-white mb-4">
                            Quick Links
                        </h4>
                        <ul className="space-y-2">
                            <li>
                                <a
                                    className="text-[#4d9981] text-sm dark:text-white/70 hover:text-primary"
                                    href="/"
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    className="text-[#4d9981] text-sm dark:text-white/70 hover:text-primary"
                                    href="/about"
                                >
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a
                                    className="text-[#4d9981] text-sm dark:text-white/70 hover:text-primary"
                                    href="/contact"
                                >
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-[#0e1b17] dark:text-white mb-4">
                            Support
                        </h4>
                        <ul className="space-y-2">
                            <li>
                                <a
                                    className="text-[#4d9981] text-sm dark:text-white/70 hover:text-primary"
                                    href="#"
                                >
                                    FAQ
                                </a>
                            </li>
                            <li>
                                <a
                                    className="text-[#4d9981] text-sm dark:text-white/70 hover:text-primary"
                                    href="#"
                                >
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a
                                    className="text-[#4d9981] text-sm dark:text-white/70 hover:text-primary"
                                    href="#"
                                >
                                    Terms of Service
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold text-[#0e1b17]  dark:text-white mb-4">
                            Contact Us
                        </h4>
                        <p className="text-[#4d9981]  dark:text-white/70 text-sm">
                            123 Life Saver St, Dhaka, Bangladesh
                        </p>
                        <p className="text-[#4d9981] dark:text-white/70 text-sm">
                            contact@bloodlink.com
                        </p>
                    </div>
                </div>
                <div className="mt-4 border-t border-black/5 dark:border-white/10 py-3 text-center text-sm text-[#4d9981] dark:text-white/60">
                    <p>© 2025 BloodLink. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
