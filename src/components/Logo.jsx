import React from "react";
import { NavLink } from "react-router";
import { MdBloodtype } from "react-icons/md";
const Logo = () => {
    return (
        <NavLink to={"/"} className="flex items-center justify-center  text-xl">
            <MdBloodtype className="text-red-600 text-3xl"></MdBloodtype>
            BloodServe
        </NavLink>
    );
};

export default Logo;
