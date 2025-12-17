import React from "react";
import { CiDeliveryTruck } from "react-icons/ci";
import {
    FaMotorcycle,
    FaRegCreditCard,
    FaTasks,
    FaUsers,
} from "react-icons/fa";
import { RiEBikeFill, RiRefundFill } from "react-icons/ri";
import { SiGoogletasks } from "react-icons/si";
import { Link, NavLink, Outlet, useNavigate } from "react-router";
import useRole from "../hooks/useRole";
import { MdBloodtype, MdNoteAdd } from "react-icons/md";
import { GrGroup } from "react-icons/gr";
import { LuLogOut, LuNotebookText } from "react-icons/lu";
import { PiPerson } from "react-icons/pi";
import { IoPerson } from "react-icons/io5";
import { BiSolidDonateBlood } from "react-icons/bi";
import { use } from "react";
import AuthContext from "../context/AuthContext";

const DashboardLayout = () => {
    const { role } = useRole();
    const { user, logOut } = use(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logOut().then(() => {
            navigate("/");
        });
    };

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* Navbar */}
                <nav className="navbar w-full bg-base-300">
                    <label
                        htmlFor="my-drawer-4"
                        aria-label="open sidebar"
                        className="btn btn-square btn-ghost"
                    >
                        {/* Sidebar toggle icon */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2"
                            fill="none"
                            stroke="currentColor"
                            className="my-1.5 inline-block size-4"
                        >
                            <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                            <path d="M9 4v16"></path>
                            <path d="M14 10l2 2l-2 2"></path>
                        </svg>
                    </label>
                    <div className="px-4">BloodServe</div>
                </nav>
                {/* Page content here */}
                <Outlet></Outlet>
            </div>

            <div className="drawer-side is-drawer-close:overflow-visible">
                <label
                    htmlFor="my-drawer-4"
                    aria-label="close sidebar"
                    className="drawer-overlay"
                ></label>
                <div className="flex min-h-full flex-col items-start bg-base-200 is-drawer-close:w-14 is-drawer-open:w-64">
                    {/* Sidebar content here */}
                    <ul className="menu w-full grow">
                        {/* List item */}
                        <li>
                            <div
                                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                                data-tip={user?.displayName}
                            >
                                <img
                                    src={user?.photoURL}
                                    alt="profile avater"
                                    className="rounded-full h-10 is-drawer-close:w-7 is-drawer-close:h-7"
                                />
                                <div className="is-drawer-close:hidden">
                                    <p className="text-lg">
                                        {user?.displayName}
                                    </p>
                                    <p>{role}</p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <Link
                                to="/"
                                data-tip="BloodServe"
                                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                            >
                                <MdBloodtype className="text-2xl text-red-600"></MdBloodtype>
                                <h2 className="text-xl font-bold is-drawer-close:hidden">
                                    BloodServe
                                </h2>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/dashboard"
                                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                                data-tip="Homepage"
                            >
                                {/* Home icon */}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                    strokeWidth="2"
                                    fill="none"
                                    stroke="currentColor"
                                    className="my-1.5 inline-block size-4"
                                >
                                    <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
                                    <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                                </svg>
                                <span className="is-drawer-close:hidden">
                                    Home page
                                </span>
                            </Link>
                        </li>
                        <li>
                            <NavLink
                                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                                data-tip="My Profile"
                                to="/dashboard/profile"
                            >
                                <IoPerson></IoPerson>
                                <span className="is-drawer-close:hidden">
                                    My Profile
                                </span>
                            </NavLink>
                        </li>

                        {/* dashboard links */}
                        <li>
                            <NavLink
                                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                                data-tip="Funding"
                                to="/dashboard/funding"
                            >
                                <RiRefundFill></RiRefundFill>
                                <span className="is-drawer-close:hidden">
                                    Funding
                                </span>
                            </NavLink>
                        </li>

                        {role === "volunteer" && (
                            <>


                            </>
                        )}

                        {/* doner only links */}
                        {role === "donor" && (
                            <>
                                <li>
                                    <NavLink
                                        className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                                        data-tip="Create Donation Request"
                                        to="/dashboard/create-donation-request"
                                    >
                                        <MdNoteAdd></MdNoteAdd>
                                        <span className="is-drawer-close:hidden">
                                            Create Donation Request
                                        </span>
                                    </NavLink>
                                </li>
                            </>
                        )}
                        {/* admin only links */}
                        {role === "admin" && (
                            <>
                                <li>
                                    <NavLink
                                        className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                                        data-tip="All Users"
                                        to="/dashboard/all-users"
                                    >
                                        <FaUsers></FaUsers>
                                        <span className="is-drawer-close:hidden">
                                            All Users
                                        </span>
                                    </NavLink>
                                </li>
                            </>
                        )}
                        <li>
                            <NavLink
                                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                                data-tip="Donation Requests"
                                to="/dashboard/donation-requests"
                            >
                                <LuNotebookText></LuNotebookText>
                                <span className="is-drawer-close:hidden">
                                    Donation Requests
                                </span>
                            </NavLink>
                        </li>

                    </ul>
                    <ul className="menu ">
                        <li onClick={handleLogout}>
                            <NavLink
                                className="is-drawer-close:tooltip is-drawer-close:tooltip-right"
                                data-tip="Logout"
                                to="/dashboard/donation-requests"
                            >
                                <LuLogOut></LuLogOut>
                                <span className="is-drawer-close:hidden">
                                    Log-Out
                                </span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;
