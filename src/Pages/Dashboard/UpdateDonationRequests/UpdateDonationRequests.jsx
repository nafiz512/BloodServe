import React, { useContext, useEffect } from "react";
import LocationContext from "../../../context/LocationContext";
// import useAxios from "../../../hooks/useAxios";
import useRole from "../../../hooks/useRole";
import { useForm, useWatch } from "react-hook-form";
import { useParams } from "react-router";
import Swal from "sweetalert2";
import useSecureAxios from "../../../hooks/useSecureAxios";

const UpdateDonationRequests = () => {
    const axios = useSecureAxios()
    const { districts, upazilas } = useContext(LocationContext);
    const { isActive } = useRole();
    const { id } = useParams();

    const {
        register,
        handleSubmit,
        control,
        reset,
        setValue,
    } = useForm();

    const selectedDistrict = useWatch({ control, name: "district" });

    // reset upazila when district changes
    useEffect(() => {
        setValue("upazila", "");
    }, [selectedDistrict, setValue]);

    // filter upazilas by district
    const getUpazilasByDistrict = (districtName) => {
        const district = districts.find(d => d.name === districtName);
        if (!district) return [];

        return upazilas
            .filter(u => u.district_id === district.id)
            .map(u => u.name);
    };

    // load existing donation request & reset form
    useEffect(() => {
        axios.get(`/donation-requests/${id}`).then(res => {
            const d = res.data;

            reset({
                recipientName: d.recipientName,
                bloodGroup: d.bloodGroup,
                donationDate: d.donationDate,
                donationTime: d.donationTime,
                district: d.district,
                upazila: d.upazila,
                hospitalName: d.hospitalName,
                fullAddress: d.fullAddress,
                message: d.message,
            });
        });
    }, [axios, id, reset]);

    const handleUpdateRequest = (formData) => {
        const updatedData = {
            ...formData,
            status: "pending",
            UpdatedAt: new Date(),
        };

        axios.patch(`/donation-request/${id}`, updatedData).then(res => {
            if (res.data.modifiedCount) {
                Swal.fire({
                    title: "Updated successfully!",
                    icon: "success",
                    draggable: true
                });
            }
        });
    };

    return (
        <div>
            <div className="flex-1 p-8 overflow-y-auto">
                <div className="max-w-4xl mx-auto">
                    {/* Page Heading */}
                    <div className="flex flex-wrap justify-between gap-3 mb-8">
                        <div className="flex flex-col gap-2">
                            <p className="text-[#0e1b17] dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">
                                Update Donation Request
                            </p>
                        </div>
                    </div>

                    {/* Form Container */}
                    <div className="bg-white dark:bg-background-dark/50 p-8 rounded-xl shadow-2xl">
                        <form onSubmit={handleSubmit(handleUpdateRequest)} className="flex flex-col gap-8">

                            {/* Recipient & Request Details */}
                            <div>
                                <h3 className="text-[#0e1b17] dark:text-white tracking-light text-2xl font-bold leading-tight pb-4 border-b border-gray-200 dark:border-gray-700">
                                    Recipient &amp; Request Details
                                </h3>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
                                    <label className="flex flex-col">
                                        <p className="text-[#0e1b17] dark:text-gray-200 text-base font-medium pb-2">
                                            Recipient Name
                                        </p>
                                        <input
                                            {...register("recipientName", { required: true })}
                                            className="form-input flex w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent h-14 p-4"
                                        />
                                    </label>

                                    <label className="flex flex-col">
                                        <p className="text-[#0e1b17] dark:text-gray-200 text-base font-medium pb-2">
                                            Blood Group
                                        </p>
                                        <select
                                            {...register("bloodGroup", { required: true })}
                                            className="form-select flex w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent h-14 p-4"
                                        >
                                            <option value="">Select Blood Group</option>
                                            <option>A+</option>
                                            <option>A-</option>
                                            <option>B+</option>
                                            <option>B-</option>
                                            <option>AB+</option>
                                            <option>AB-</option>
                                            <option>O+</option>
                                            <option>O-</option>
                                        </select>
                                    </label>

                                    <label className="flex flex-col">
                                        <p className="text-[#0e1b17] dark:text-gray-200 text-base font-medium pb-2">
                                            Donation Date
                                        </p>
                                        <input
                                            type="date"
                                            {...register("donationDate", { required: true })}
                                            className="form-input flex w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent h-14 p-4"
                                        />
                                    </label>

                                    <label className="flex flex-col">
                                        <p className="text-[#0e1b17] dark:text-gray-200 text-base font-medium pb-2">
                                            Donation Time
                                        </p>
                                        <input
                                            type="time"
                                            {...register("donationTime", { required: true })}
                                            className="form-input flex w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent h-14 p-4"
                                        />
                                    </label>
                                </div>
                            </div>

                            {/* Location & Message */}
                            <div>
                                <h3 className="text-[#0e1b17] dark:text-white tracking-light text-2xl font-bold leading-tight pb-4 border-b border-gray-200 dark:border-gray-700">
                                    Location &amp; Message
                                </h3>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
                                    <label className="flex flex-col">
                                        <p className="text-[#0e1b17] dark:text-gray-200 text-base font-medium pb-2">
                                            District
                                        </p>
                                        <select
                                            {...register("district", { required: true })}
                                            className="form-select flex w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent h-14 p-4"
                                        >
                                            <option value="">Select District</option>
                                            {districts.map(d => (
                                                <option key={d.id} value={d.name}>{d.name}</option>
                                            ))}
                                        </select>
                                    </label>

                                    <label className="flex flex-col">
                                        <p className="text-[#0e1b17] dark:text-gray-200 text-base font-medium pb-2">
                                            Upazila
                                        </p>
                                        <select
                                            {...register("upazila", { required: true })}
                                            className="form-select flex w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent h-14 p-4"
                                        >
                                            <option value="">Select Upazila</option>
                                            {getUpazilasByDistrict(selectedDistrict).map(u => (
                                                <option key={u} value={u}>{u}</option>
                                            ))}
                                        </select>
                                    </label>

                                    <label className="flex flex-col">
                                        <p className="text-[#0e1b17] dark:text-gray-200 text-base font-medium pb-2">
                                            Hospital Name
                                        </p>
                                        <input
                                            {...register("hospitalName", { required: true })}
                                            className="form-input flex w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent h-14 p-4"
                                        />
                                    </label>

                                    <label className="flex flex-col">
                                        <p className="text-[#0e1b17] dark:text-gray-200 text-base font-medium pb-2">
                                            Full Address
                                        </p>
                                        <input
                                            {...register("fullAddress", { required: true })}
                                            className="form-input flex w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent h-14 p-4"
                                        />
                                    </label>

                                    <label className="flex flex-col md:col-span-2">
                                        <p className="text-[#0e1b17] dark:text-gray-200 text-base font-medium pb-2">
                                            Request Message
                                        </p>
                                        <textarea
                                            {...register("message", { required: true })}
                                            className="form-textarea flex w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-transparent min-h-32 p-4"
                                        />
                                    </label>
                                </div>
                            </div>

                            {/* Actions */}
                            <div className="flex flex-col items-start gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                                <button
                                    disabled={!isActive}
                                    type="submit"
                                    className="flex min-w-[120px] items-center justify-center rounded-lg h-12 px-6 bg-primary text-white font-bold disabled:bg-gray-300 disabled:cursor-not-allowed"
                                >
                                    Update Request
                                </button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateDonationRequests;
