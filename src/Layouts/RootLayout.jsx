import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const RootLayout = () => {
    return (
        <div>
            <div className=" sticky top-0 z-50 w-full">
                <Navbar></Navbar>
            </div>

            <div className="min-h-screen w-10/12 mx-auto">
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default RootLayout;
