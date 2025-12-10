import React from "react";
import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import FindDoners from "../Pages/FindDoners/FindDoners";
import Home from "../Pages/Home/Home";
import Requests from "../Pages/Requests/Requests";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Foundings from "../Pages/Foundings/Foundings";

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
                path: "/find-doners",
                element: <FindDoners></FindDoners>,
            },
            {
                path: "/requests",
                element: <Requests></Requests>,
            },
            {
                path: "/foundings",
                element: <Foundings></Foundings>,
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
]);

export default Routes;
