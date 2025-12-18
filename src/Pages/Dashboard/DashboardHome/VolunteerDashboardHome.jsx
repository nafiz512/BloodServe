import React, { useContext, useEffect, useState } from "react";
import AuthContext from "../../../context/AuthContext";
import useAxios from "../../../hooks/useAxios";
import { MdBloodtype, MdGroup, MdPayment } from "react-icons/md";
import {
    BarChart,
    Bar,
    XAxis,
    Tooltip,
    ResponsiveContainer,
} from "recharts";
import Swal from "sweetalert2";

const VolunteerDashboardHome = () => {
    const { user } = useContext(AuthContext);
    const axios = useAxios();

    const [totalUser, setTotalUser] = useState(0);
    const [amount, setAmount] = useState(0);
    const [donationRequests, setDonationRequests] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        Promise.all([
            axios.get("/total-donors"),
            axios.get("/all-funds"),
            axios.get("/total-donation-requests"),
        ])
            .then(([donorsRes, fundsRes, requestsRes]) => {
                setTotalUser(donorsRes.data || 0);

                const totalFunds = fundsRes.data.reduce(
                    (sum, el) => sum + parseFloat(el.amount || 0),
                    0
                );
                setAmount(totalFunds.toFixed(2));

                setDonationRequests(requestsRes.data || 0);
            })
            .catch((err) => {
                Swal.fire({
                    icon: "error",
                    title: err,
                    text: "Something went wrong!",
                });
            })
            .finally(() => setLoading(false));
    }, [axios]);

    // Data for the tiny bar chart — one value per category
    const chartData = [
        { name: "Donors", value: totalUser, fill: "#3B82F6" },
        { name: "Funds ($)", value: Math.round(amount), fill: "#10B981" },
        { name: "Requests", value: donationRequests, fill: "#EF4444" },
    ];

    const stats = [
        {
            title: "Total Donors",
            value: totalUser,
            icon: <MdGroup className="text-3xl" />,
            color: "text-blue-600 dark:text-blue-400",
            bg: "bg-blue-100 dark:bg-blue-900/30",
        },
        {
            title: "Total Funds Raised",
            value: `$${amount}`,
            icon: <MdPayment className="text-3xl" />,
            color: "text-green-600 dark:text-green-400",
            bg: "bg-green-100 dark:bg-green-900/30",
        },
        {
            title: "Donation Requests",
            value: donationRequests,
            icon: <MdBloodtype className="text-3xl" />,
            color: "text-red-600 dark:text-red-400",
            bg: "bg-red-100 dark:bg-red-900/30",
        },
    ];

    return (
        <div className="flex-1 p-6 lg:p-10 bg-linear-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-black min-h-screen">
            <div className="max-w-7xl mx-auto">
                {/* Welcome Section */}
                <div className="mb-10 rounded-3xl bg-linear-to-r from-red-600 via-pink-600 to-rose-600 p-8 shadow-2xl text-white">
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
                        Welcome back, {user?.displayName || "Hero"}! 🩸
                    </h1>
                    <p className="mt-4 text-xl opacity-90">
                        Thank you for your life-saving contributions. Together, we're making a real difference.
                    </p>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="group relative overflow-hidden rounded-3xl bg-white dark:bg-gray-800 p-8 shadow-xl border border-gray-200 dark:border-gray-700 transform hover:scale-105 transition-all duration-300"
                        >
                            <div className="flex items-center justify-between mb-6">
                                <p className="text-sm font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                                    {stat.title}
                                </p>
                                <div className={`p-4 rounded-2xl ${stat.bg}`}>
                                    <div className={stat.color}>{stat.icon}</div>
                                </div>
                            </div>

                            <p className={`text-5xl font-bold ${stat.color}`}>
                                {loading ? (
                                    <span className="inline-block w-32 h-12 bg-gray-200 dark:bg-gray-700 rounded animate-pulse" />
                                ) : (
                                    stat.value
                                )}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Tiny Bar Chart */}
                <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 border border-gray-200 dark:border-gray-700">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                        Platform Overview
                    </h3>

                    {loading ? (
                        <div className="h-64 flex items-center justify-center">
                            <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-indigo-600"></div>
                        </div>
                    ) : (
                        <>
                            <ResponsiveContainer width="100%" height={240}>
                                <BarChart
                                    data={chartData}
                                    margin={{ top: 20, right: 20, left: 20, bottom: 20 }}
                                    barSize={50}
                                >
                                    <XAxis
                                        dataKey="name"
                                        tick={{ fontSize: 14, fill: "#4b5563" }}
                                        axisLine={false}
                                        tickLine={false}
                                    />
                                    <Bar dataKey="value" radius={[12, 12, 0, 0]}>
                                        {chartData.map((entry, index) => (
                                            <Bar key={`bar-${index}`} dataKey="value" fill={entry.fill} />
                                        ))}
                                    </Bar>
                                </BarChart>
                            </ResponsiveContainer>

                            {/* Legend */}
                            <div className="flex justify-center gap-8 mt-6 text-sm">
                                <div className="flex items-center gap-2">
                                    <div className="w-4 h-4 rounded bg-blue-500"></div>
                                    <span className="text-gray-700 dark:text-gray-300">Total Donors</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-4 h-4 rounded bg-green-500"></div>
                                    <span className="text-gray-700 dark:text-gray-300">Funds Raised</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="w-4 h-4 rounded bg-red-500"></div>
                                    <span className="text-gray-700 dark:text-gray-300">Requests</span>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default VolunteerDashboardHome;