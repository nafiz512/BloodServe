import React from "react";
import { BsCash } from "react-icons/bs";
import { HiHeart } from "react-icons/hi";
import { MdGroups2 } from "react-icons/md";
import { NavLink } from "react-router";

const Home = () => {
    return (
        <div className="container mx-auto space-y-15 my-10 sm:my-20 sm:space-y-32">
            <section className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
                <div className="flex flex-col gap-6 text-center lg:text-left">
                    <h1 className="text-5xl font-black leading-tight tracking-tighter text-gray-900 dark:text-white md:text-6xl">
                        Give a little. Save a life.
                    </h1>
                    <p className="text-lg text-gray-600 dark:text-gray-400">
                        Connect with a network of voluntary blood donors and
                        organizations. Your contribution can make a world of
                        difference.t
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 lg:justify-start">
                        <NavLink to={'/register'}>  <button className="flex h-12 min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-primary px-6 text-base font-bold text-white shadow-lg shadow-primary/30 hover:bg-opacity-90">
                            <span>Join as a donor</span>
                        </button></NavLink>
                        <NavLink to={'/find-doners'}>  <button className="flex h-12 min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-primary/20 px-6 text-base font-bold text-primary hover:bg-primary/30">
                            <span>Search Donors</span>
                        </button>  </NavLink>

                    </div>
                </div>
                <div className="flex justify-center">
                    <div
                        className="aspect-square w-full max-w-md rounded-xl bg-cover bg-center bg-[url('https://lh3.googleusercontent.com/aida-public/AB6AXuDU6yo6bUHr43gB2h6xvHTff1RAHfztKIoczkTCcIuVVwcx4wd8koRuL0l9EezhghaEUbmCVVI7tb2aqN-dl-bmoh2Uro33w_AV5kJODRnnRB3h7u6e_z2nd98UD7eaB7mes8LEBrfsNXVvo9IMYr7q0NnxF2b9s7clOSoSFq0DzZqiEy05b3-xlZRKm6F6PucpOdhLLufV30r2dhRaQo6iSDhW0gLKyswuHaBcT1kdfYnmFwmJ12OXKrK9Iks8efYA7EPp6cqDmyo')]"
                        data-alt="A clean and modern illustration showing a heart and a plus sign, symbolizing medical help and community support."
                    ></div>
                </div>
            </section>

            <section>
                <h2 className="mb-4 text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Our Impact at a Glance
                </h2>
                <p className="mb-12 text-center text-gray-600 dark:text-gray-400">
                    Join a growing community making a tangible difference.
                </p>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    <div className="flex flex-col gap-4 rounded-2xl border border-primary/20 bg-background-light p-8 shadow-sm dark:bg-background-dark dark:border-primary/30">
                        <span className="material-symbols-outlined text-4xl text-primary">
                            <MdGroups2></MdGroups2>
                        </span>
                        <p className="text-base font-medium text-gray-600 dark:text-gray-400">
                            Total Donors
                        </p>
                        <p className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                            1,200+
                        </p>
                    </div>
                    <div className="flex flex-col gap-4 rounded-2xl border border-primary/20 bg-background-light p-8 shadow-sm dark:bg-background-dark dark:border-primary/30">
                        <span className="material-symbols-outlined text-4xl text-primary">
                            <HiHeart></HiHeart>
                        </span>
                        <p className="text-base font-medium text-gray-600 dark:text-gray-400">
                            Lives Saved
                        </p>
                        <p className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                            500+
                        </p>
                    </div>
                    <div className="flex flex-col gap-4 rounded-2xl border border-primary/20 bg-background-light p-8 shadow-sm dark:bg-background-dark dark:border-primary/30">
                        <span className="material-symbols-outlined text-4xl text-primary">
                            <BsCash></BsCash>
                        </span>
                        <p className="text-base font-medium text-gray-600 dark:text-gray-400">
                            Total Funds
                        </p>
                        <p className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white">
                            $10,000+
                        </p>
                    </div>
                </div>
            </section>

            <section >
                <h2 className="mb-4 text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Simple Steps to Make a Difference
                </h2>
                <p className="mb-12 text-center text-gray-600 dark:text-gray-400">
                    Donating is easy, safe, and incredibly rewarding.
                </p>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    <div className="flex flex-col items-center gap-4 rounded-2xl border border-primary/20 bg-background-light p-8 text-center shadow-sm dark:bg-background-dark dark:border-primary/30">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 text-lg font-bold text-primary">
                            1
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                            Register
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                            Create your account in minutes and become a part
                            of our life-saving community.
                        </p>
                    </div>
                    <div className="flex flex-col items-center gap-4 rounded-2xl border border-primary/20 bg-background-light p-8 text-center shadow-sm dark:bg-background-dark dark:border-primary/30">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 text-lg font-bold text-primary">
                            2
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                            Create/Respond
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                            Post a request for blood or respond to an
                            existing one in your area.
                        </p>
                    </div>
                    <div className="flex flex-col items-center gap-4 rounded-2xl border border-primary/20 bg-background-light p-8 text-center shadow-sm dark:bg-background-dark dark:border-primary/30">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 text-lg font-bold text-primary">
                            3
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                            Donate
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                            Connect with the requester, donate blood, and
                            update the status to save a life.
                        </p>
                    </div>
                </div>
            </section>

            <section >
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                        Get in Touch
                    </h2>
                    <p className="mb-8 text-gray-600 dark:text-gray-400">
                        Have questions or want to partner with us? We'd love
                        to hear from you.
                    </p>
                </div>
                <div className="mx-auto max-w-xl">
                    <form className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                Name
                            </label>
                            <input
                                className="mt-1 p-3 block w-full rounded-lg border-gray-300 bg-background-light shadow-sm focus:border-primary focus:ring-primary dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                                id="name"
                                placeholder="Enter your name"
                                name="name"
                                type="text"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                Email
                            </label>
                            <input
                                className="mt-1 block w-full rounded-lg border-gray-300 bg-background-light shadow-sm focus:border-primary p-3 focus:ring-primary dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                                id="email"
                                name="email"
                                placeholder="Enter your email"
                                type="email"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                                Message
                            </label>
                            <textarea
                                className="mt-1 block w-full rounded-lg border-gray-300 bg-background-light shadow-sm focus:border-primary p-2 focus:ring-primary dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                                id="message"
                                name="message"
                                placeholder="write your message"
                                rows="4"
                            ></textarea>
                        </div>
                        <div>
                            <button
                                className="flex w-full h-12 cursor-pointer items-center justify-center overflow-hidden rounded-lg bg-primary px-6 text-base font-bold text-white shadow-lg shadow-primary/30 hover:bg-opacity-90"
                                type="submit"
                            >
                                <span>Submit</span>
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Home;
