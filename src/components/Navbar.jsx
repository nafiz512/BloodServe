import React from "react";
import { NavLink } from "react-router";

import Logo from "./Logo";
import { use } from "react";
import AuthContext from "../context/AuthContext";

const Navbar = () => {
    const { user, logOut } = use(AuthContext);
    console.log(user);

    const links = (
        <>
            <li>
                <NavLink to={"/"}>Home</NavLink>
            </li>
            <li>
                <NavLink to={"/find-doners"}>Find Doners</NavLink>
            </li>
            <li>
                <NavLink to={"/requests"}>Requests</NavLink>
            </li>
            <li>
                <NavLink to={"/foundings"}>Foundings</NavLink>
            </li>
            <li>
                <NavLink to={"/about"}>About us </NavLink>
            </li>
            <li>
                <NavLink to={"/contact"}>Contact</NavLink>
            </li>
        </>
    );
    return (
        <div className="px-[8%]  navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div
                        tabIndex={0}
                        role="button"
                        className="btn btn-ghost lg:hidden"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
                    >
                        {links}
                    </ul>
                </div>
                <Logo></Logo>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">{links}</ul>
            </div>
            <div className="navbar-end">
                {user ? (
                    <div className="dropdown dropdown-bottom dropdown-end">
                        <div tabIndex={0} role="button" className=" m-1">
                            <img
                                src={user?.photoURL}
                                alt="profile avater"
                                className="h-10 w-10 rounded-full border-gray-300 border-2"
                            />
                        </div>
                        <ul
                            tabIndex="-1"
                            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
                        >
                            <li>
                                <NavLink to={"/dashboard"}>Dashboard</NavLink>
                            </li>
                            <li>
                                <a onClick={() => logOut()}>Log-out</a>
                            </li>
                        </ul>
                    </div>
                ) : (
                    <NavLink to={"/login"}>
                        <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-6 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] transition-colors hover:bg-primary/90">
                            <span className="truncate">Log In</span>
                        </button>
                    </NavLink>
                )}
            </div>
        </div>
    );
};

export default Navbar;
