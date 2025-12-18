import React, { useContext, useEffect } from "react";
import LocationContext from "../../../context/LocationContext";
import useAxios from "../../../hooks/useAxios";
import AuthContext from "../../../context/AuthContext";
import { useForm, useWatch } from "react-hook-form";
import useRole from "../../../hooks/useRole";
import Swal from "sweetalert2";

const CreateDonationRequest = () => {
    const axiosSecure = useAxios();
    const { user } = useContext(AuthContext);
    const { districts, upazilas } = useContext(LocationContext);
    const { isActive } = useRole()

    const {
        register,
        handleSubmit,
        control,
        setValue,
        // formState: { errors },
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
    const handleCreateRequest = (data) => {
        data.status = "pending"
        data.createdAt = new Date()
        axiosSecure.post('/donation-request', data).then(data => {
            if (data.data.insertedId) {
                Swal.fire({
                    title: "Request Created !",
                    icon: "success",
                    draggable: true
                });
            }
        })
    }


    return (
        <div>
            <main className="flex-1 p-8 overflow-y-auto">
                <div className="max-w-4xl mx-auto">
                    {/* <!-- PageHeading --> */}
                    <div className="flex flex-wrap justify-between gap-3 mb-8">
                        <div className="flex flex-col gap-2">
                            <p className="text-[#0e1b17] dark:text-white text-4xl font-black leading-tight tracking-[-0.033em]">
                                Create Donation Request
                            </p>
                            <p className="text-gray-500 dark:text-gray-400 text-base font-normal leading-normal">
                                Fill in the details below to create a new blood
                                donation request.
                            </p>
                        </div>
                    </div>
                    {/* <!-- Form Container --> */}
                    <div className="bg-white dark:bg-background-dark/50 p-8 rounded-xl shadow-sm">
                        <form onSubmit={handleSubmit(handleCreateRequest)} className="flex flex-col gap-8">
                            {/* <!-- Section 1: Requester Information --> */}
                            <div>
                                <h3 className="text-[#0e1b17] dark:text-white tracking-light text-2xl font-bold leading-tight pb-4 border-b border-gray-200 dark:border-gray-700">
                                    Requester Information
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
                                    <label className="flex flex-col">
                                        <p className="text-[#0e1b17] dark:text-gray-200 text-base font-medium leading-normal pb-2">
                                            Requester Name
                                        </p>
                                        <input  {...register("requesterName", { required: true })}
                                            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-gray-500 dark:text-gray-400 focus:outline-0 focus:ring-0 border-none bg-gray-100 dark:bg-gray-800/50 h-14 p-4 text-base font-normal leading-normal cursor-not-allowed"
                                            readOnly=""
                                            value={user?.displayName}
                                        />
                                    </label>
                                    <label className="flex flex-col">
                                        <p className="text-[#0e1b17] dark:text-gray-200 text-base font-medium leading-normal pb-2">
                                            Requester Email
                                        </p>
                                        <input  {...register("requesterEmail", { required: true })}
                                            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-gray-500 dark:text-gray-400 focus:outline-0 focus:ring-0 border-none bg-gray-100 dark:bg-gray-800/50 h-14 p-4 text-base font-normal leading-normal cursor-not-allowed"
                                            readOnly=""
                                            value={user?.email}
                                        />
                                    </label>
                                </div>
                            </div>
                            {/* <!-- Section 2: Recipient & Request Details --> */}
                            <div>
                                <h3 className="text-[#0e1b17] dark:text-white tracking-light text-2xl font-bold leading-tight pb-4 border-b border-gray-200 dark:border-gray-700">
                                    Recipient &amp; Request Details
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
                                    <label className="flex flex-col">
                                        <p className="text-[#0e1b17] dark:text-gray-200 text-base font-medium leading-normal pb-2">
                                            Recipient Name
                                        </p>
                                        <input  {...register("recipientName", { required: true })}
                                            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0e1b17] dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary border border-gray-300 dark:border-gray-600 bg-transparent dark:bg-background-dark/30 h-14 placeholder:text-gray-400 dark:placeholder:text-gray-500 p-4 text-base font-normal leading-normal"
                                            placeholder="Enter recipient's full name"
                                        />
                                    </label>
                                    <label className="flex flex-col">
                                        <p className="text-[#0e1b17] dark:text-gray-200 text-base font-medium leading-normal pb-2">
                                            Blood Group
                                        </p>
                                        <select {...register("bloodGroup", { required: true })} className="form-select flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0e1b17] dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary border border-gray-300 dark:border-gray-600 bg-transparent dark:bg-background-dark/30 h-14 p-4 text-base font-normal leading-normal">
                                            <option>Select Blood Group</option>
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
                                        <p className="text-[#0e1b17] dark:text-gray-200 text-base font-medium leading-normal pb-2">
                                            Donation Date
                                        </p>
                                        <input {...register("donationDate", { required: true })}
                                            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0e1b17] dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary border border-gray-300 dark:border-gray-600 bg-transparent dark:bg-background-dark/30 h-14 placeholder:text-gray-400 dark:placeholder:text-gray-500 p-4 text-base font-normal leading-normal"
                                            type="date"
                                        />
                                    </label>
                                    <label className="flex flex-col">
                                        <p className="text-[#0e1b17] dark:text-gray-200 text-base font-medium leading-normal pb-2">
                                            Donation Time
                                        </p>
                                        <input  {...register("donationTime", { required: true })}
                                            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0e1b17] dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary border border-gray-300 dark:border-gray-600 bg-transparent dark:bg-background-dark/30 h-14 placeholder:text-gray-400 dark:placeholder:text-gray-500 p-4 text-base font-normal leading-normal"
                                            type="time"
                                        />
                                    </label>
                                </div>
                            </div>
                            {/* <!-- Section 3: Location & Message --> */}
                            <div>
                                <h3 className="text-[#0e1b17] dark:text-white tracking-light text-2xl font-bold leading-tight pb-4 border-b border-gray-200 dark:border-gray-700">
                                    Location &amp; Message
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
                                    <label className="flex flex-col">
                                        <p className="text-[#0e1b17] dark:text-gray-200 text-base font-medium leading-normal pb-2">
                                            District
                                        </p>
                                        <select    {...register("district", { required: true })} className="form-select flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0e1b17] dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary border border-gray-300 dark:border-gray-600 bg-transparent dark:bg-background-dark/30 h-14 p-4 text-base font-normal leading-normal">
                                            <option value="">Select District</option>
                                            {districts.map((d) => (
                                                <option key={d.id} value={d.name}>
                                                    {d.name}
                                                </option>
                                            ))}
                                        </select>
                                    </label>
                                    <label className="flex flex-col">
                                        <p className="text-[#0e1b17] dark:text-gray-200 text-base font-medium leading-normal pb-2">
                                            Upazila
                                        </p>
                                        <select   {...register("upazila", { required: true })} className="form-select flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0e1b17] dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary border border-gray-300 dark:border-gray-600 bg-transparent dark:bg-background-dark/30 h-14 p-4 text-base font-normal leading-normal">
                                            <option value="">Select Upazila</option>
                                            {getUpazilasByDistrict(selectedDistrict).map((u) => (
                                                <option key={u} value={u}>
                                                    {u}
                                                </option>
                                            ))}
                                        </select>
                                    </label>
                                    <label className="flex flex-col">
                                        <p className="text-[#0e1b17] dark:text-gray-200 text-base font-medium leading-normal pb-2">
                                            Hospital Name
                                        </p>
                                        <input {...register("hospitalName", { required: true })}
                                            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0e1b17] dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary border border-gray-300 dark:border-gray-600 bg-transparent dark:bg-background-dark/30 h-14 placeholder:text-gray-400 dark:placeholder:text-gray-500 p-4 text-base font-normal leading-normal"
                                            placeholder="Hospital Name"
                                        />
                                    </label>
                                    <label className="flex flex-col">
                                        <p className="text-[#0e1b17] dark:text-gray-200 text-base font-medium leading-normal pb-2">
                                            Full Address
                                        </p>
                                        <input {...register("fullAddress", { required: true })}
                                            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0e1b17] dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary border border-gray-300 dark:border-gray-600 bg-transparent dark:bg-background-dark/30 h-14 placeholder:text-gray-400 dark:placeholder:text-gray-500 p-4 text-base font-normal leading-normal"
                                            placeholder="Full address"
                                        />
                                    </label>
                                    <label className="flex flex-col md:col-span-2">
                                        <p className="text-[#0e1b17] dark:text-gray-200 text-base font-medium leading-normal pb-2">
                                            Request Message
                                        </p>
                                        <textarea {...register("message", { required: true })}
                                            className="form-textarea flex w-full min-w-0 flex-1 resize-y overflow-hidden rounded-lg text-[#0e1b17] dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-primary border border-gray-300 dark:border-gray-600 bg-transparent dark:bg-background-dark/30 min-h-32 placeholder:text-gray-400 dark:placeholder:text-gray-500 p-4 text-base font-normal leading-normal"
                                            placeholder="Enter any additional details or a short message..."
                                        ></textarea>
                                    </label>
                                </div>
                            </div>
                            {/* <!-- Section 4: Actions --> */}
                            <div className="flex flex-col items-start gap-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                                <button disabled={!isActive}
                                    className="flex min-w-[120px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-6 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors disabled:bg-gray-300 disabled:dark:bg-gray-600 disabled:cursor-not-allowed"
                                    type="submit"
                                >
                                    <span className="truncate">Create Request</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default CreateDonationRequest;
