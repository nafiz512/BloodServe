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
import DonationSuccess from "../Pages/Donation Success/DonationSuccess";
import DonationCancel from "../Pages/Donation Cancel/DonationCancel";
import UpdateDonationRequests from "../Pages/Dashboard/UpdateDonationRequests/UpdateDonationRequests";

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
                path: "/find-donors",
                element: <FindDoners></FindDoners>,
            },
            {
                path: "/requests",
                element: <Requests></Requests>,
            },
            {
                path: "/requests/:id",
                element: <PrivateRoute> <DetailsRequests></DetailsRequests>  </PrivateRoute>,
            },
            {
                path: "/fundings",
                element: <PrivateRoute> <Funding></Funding> </PrivateRoute>,
            },
            {
                path: "/about",
                element: <About></About>,
            },
            {
                path: "/contact",
                element: <Contact></Contact>,
            },
            {
                path: "/donation-success",
                element: <DonationSuccess></DonationSuccess>,
            },
            {
                path: "/donation-cancel",
                element: <DonationCancel></DonationCancel>,
            },
        ],
    },
    {
        path: "dashboard",
        element: <PrivateRoute> <DashboardLayout></DashboardLayout> </PrivateRoute>,
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
                path: "update-donation-request/:id",
                element: <UpdateDonationRequests></UpdateDonationRequests>,
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
