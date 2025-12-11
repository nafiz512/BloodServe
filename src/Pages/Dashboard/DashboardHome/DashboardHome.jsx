import React from "react";
import AdminDashboardHome from "./AdminDashboardHome";
import VolunteerDashboardHome from "./VolunteerDashboardHome";
import DonerDashboardHome from "./DonerDashboardHome";
import useRole from "../../../hooks/useRole";
import Loading from "../../../Loading/Loading";

const DashboardHome = () => {
    const { role, roleLoading } = useRole();

    if (roleLoading) {
        return <Loading></Loading>;
    }
    if (role === "admin") {
        return <AdminDashboardHome></AdminDashboardHome>;
    } else if (role === "volunteer") {
        return <VolunteerDashboardHome></VolunteerDashboardHome>;
    } else {
        return <DonerDashboardHome></DonerDashboardHome>;
    }
};

export default DashboardHome;
