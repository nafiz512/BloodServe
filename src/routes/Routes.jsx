import React from "react";
import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import FindDoners from "../Pages/FindDoners/FindDoners";
import Home from "../Pages/Home/Home";
import Requests from "../Pages/Requests/Requests";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Funding from "../Pages/Dashboard/Funding/Funding"
import Login from "../Pages/Auth/Login/Login";
import Register from "../Pages/Auth/Register/Register";
import DetailsRequests from "../Pages/DetailsRequests/DetailsRequests";
import DashboardLayout from "../Layouts/DashboardLayout";
import DashboardHome from "../Pages/Dashboard/DashboardHome/DashboardHome";
import UserProfile from "../Pages/Dashboard/UserProfile/UserProfile";
import CreateDonationRequest from "../Pages/Dashboard/CreateDonationRequest/CreateDonationRequest";
import DonorManagement from "../Pages/Dashboard/DonorManagement/DonorManagement";
import AllDonationRequests from "../Pages/Dashboard/AllDonationRequests/AllDonationRequests";

import PrivateRoute from "./PrivateRoute";

const Routes = createBrowserRouter([
    {
        path: "/",

        element: <RootLayout></RootLayout>,
        children: [
            {
                index: true,
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/register",
                element: <Register></Register>,
            },
            {
                path: "/find-doners",
                element: <FindDoners></FindDoners>,
            },
            {
                path: "/requests",
                element: <Requests></Requests>,
            },
            {
                path: "/requests/:id",
                element: <DetailsRequests></DetailsRequests>,
            },
            {
                path: "/fundings",
                element: <Funding></Funding>,
            },
            {
                path: "/about",
                element: <About></About>,
            },
            {
                path: "/contact",
                element: <Contact></Contact>,
            },
        ],
    },
    {
        path: "dashboard",
        element: <PrivateRoute> <DashboardLayout></DashboardLayout>    </PrivateRoute>,
        children: [
            {
                index: true,
                element: <DashboardHome></DashboardHome>,
            },
            {
                path: "profile",
                element: <UserProfile></UserProfile>,
            },
            {
                path: "create-donation-request",
                element: <CreateDonationRequest></CreateDonationRequest>,
            },
            {
                path: "all-users",
                element: <DonorManagement></DonorManagement>,
            },
            {
                path: "donation-requests",
                element: <AllDonationRequests></AllDonationRequests>,
            },
            {
                path: "funding",
                element: <Funding></Funding>,
            },
        ],
    },
]);

export default Routes;
