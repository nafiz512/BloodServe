import React, { useContext, useState, useEffect } from "react";
import Swal from "sweetalert2";
import useAxios from "../../../hooks/useAxios";
import AuthContext from "../../../context/AuthContext";
import { BiDonateBlood } from "react-icons/bi";

const Funding = () => {
    const axios = useAxios();
    const { user } = useContext(AuthContext);
    const [funds, setFunds] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get("/all-funds")
            .then((res) => {
                setFunds(res.data);
            })
            .catch((err) => {
                Swal.fire({
                    icon: "error",
                    title: err.message,
                    text: "Something went wrong!",
                });
            })
            .finally(() => setLoading(false));
    }, [axios]);

    const handleGiveFund = () => {
        Swal.fire({
            title: "Donate to the Fund",
            html: `
        <input 
          type="number" 
          id="swal-input-amount" 
          class="swal2-input" 
          placeholder="Enter amount in USD" 
          min="1" 
          step="0.01"
        >
      `,
            showCancelButton: true,
            confirmButtonColor: "#6366f1", // Indigo
            cancelButtonColor: "#ef4444",
            confirmButtonText: "Proceed to Payment",
            preConfirm: () => {
                const amount = document.getElementById("swal-input-amount").value;
                if (!amount || amount <= 0) {
                    Swal.showValidationMessage("Please enter a valid amount");
                }
                return parseFloat(amount);
            },
        }).then(async (result) => {
            if (result.isConfirmed) {
                const payInfo = {
                    amount: result.value,
                    email: user?.email,
                    name: user?.displayName || "Anonymous",
                    createAt: new Date(),
                };

                try {
                    const res = await axios.post("create-checkout-session", payInfo);
                    window.location.assign(res.data.url);
                } catch {
                    Swal.fire("Error", "Payment initiation failed", "error");
                }
            }
        });
    };

    // Format date nicely
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
        });
    };

    // Calculate total funds
    // const totalFunds = funds.reduce((sum, fund) => sum + parseFloat(fund.amount || 0), 0).toFixed(2);

    return (
        <div className="min-h-screen  dark:from-gray-900 dark:to-black py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 mb-12">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
                            All Fundings
                        </h1>
                        <p className="mt-3 text-lg text-gray-600 dark:text-gray-400">
                            Support the community by contributing to our shared fund
                        </p>
                    </div>

                    <button
                        onClick={handleGiveFund}
                        className="group relative flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-green-700 rounded-2xl shadow-2xl hover:shadow-indigo-500/30 transform hover:scale-105 transition-all duration-300 overflow-hidden"
                    >
                        <span className="relative flex gap-2 justify-center items-center z-10"> <span>Give Fund</span> <BiDonateBlood></BiDonateBlood></span>
                        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity"></div>
                    </button>
                </div>



                {/* Transaction History */}
                <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-700">
                    <div className="px-8 py-6 border-b border-gray-200 dark:border-gray-700">
                        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                            Transaction History
                        </h2>
                        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                            All contributions made to the fund
                        </p>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-gray-50 dark:bg-gray-900/50">
                                <tr>
                                    <th className="px-8 py-5 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                                        Donor
                                    </th>
                                    <th className="px-8 py-5 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                                        Amount
                                    </th>
                                    <th className="px-8 py-5 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                                        Date
                                    </th>
                                    <th className="px-8 py-5 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                                        Status
                                    </th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                                {loading ? (
                                    <tr>
                                        <td colSpan="4" className="px-8 py-20 text-center text-gray-500">
                                            <div className="flex justify-center items-center">
                                                <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-indigo-600"></div>
                                                <span className="ml-3">Loading transactions...</span>
                                            </div>
                                        </td>
                                    </tr>
                                ) : funds.length === 0 ? (
                                    <tr>
                                        <td colSpan="4" className="px-8 py-20 text-center text-gray-500 dark:text-gray-400">
                                            <div className="text-6xl mb-4">📭</div>
                                            <p className="text-lg">No contributions yet</p>
                                            <p className="text-sm mt-2">Be the first to donate!</p>
                                        </td>
                                    </tr>
                                ) : (
                                    funds.map((fund, index) => (
                                        <tr
                                            key={index}
                                            className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                                        >
                                            <td className="px-4 py-6 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    <div className="ml-4">
                                                        <div className="text-sm font-medium text-gray-900 dark:text-white">
                                                            {fund.name || "Anonymous"}
                                                        </div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="px-8 py-6 whitespace-nowrap">
                                                <span className="text-lg font-semibold text-indigo-600 dark:text-indigo-400">
                                                    ${parseFloat(fund.amount || 0).toFixed(2)}
                                                </span>
                                            </td>
                                            <td className="px-8 py-6 text-sm text-gray-600 dark:text-gray-400">
                                                {formatDate(fund.createAt)}
                                            </td>
                                            <td className="px-8 py-6 whitespace-nowrap">
                                                <span className="inline-flex items-center px-4 py-2 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                                                    <span className="w-2 h-2 mr-2 rounded-full bg-green-500"></span>
                                                    Completed
                                                </span>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>

                    {/* Scrollable body if >5 items */}
                    {funds.length > 5 && (
                        <style jsx>{`
              tbody {
                display: block;
                max-height: 480px;
                overflow-y: auto;
              }
              thead,
              tbody tr {
                display: table;
                width: 100%;
                table-layout: fixed;
              }
            `}</style>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Funding;