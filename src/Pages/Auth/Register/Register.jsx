import React, { useContext, useEffect } from "react";
import { useForm, useWatch } from "react-hook-form";
import { NavLink, useNavigate } from "react-router";
import AuthContext from "../../../context/AuthContext";
import useAxios from "../../../hooks/useAxios";
import axios from "axios";
import LocationContext from "../../../context/LocationContext";
import Swal from "sweetalert2";

const Register = () => {
    const {
        register,
        handleSubmit,
        control,
        setValue,
        watch,
        formState: { errors },
    } = useForm();

    const axiosSecure = useAxios();
    const { districts, upazilas } = useContext(LocationContext);
    const navigate = useNavigate();
    const { registerUser, updateUserProfile } = useContext(AuthContext);

    const districtName = useWatch({ control, name: "district" });
    const password = watch("password");

    // Reset upazila when district changes
    useEffect(() => {
        setValue("upazila", "");
    }, [districtName, setValue]);

    // Filter Upazilas by selected District
    const getUpazilaByDistrict = (districtName) => {
        if (!districtName) return [];
        const district = districts.find((d) => d.name === districtName);
        if (!district) return [];

        return upazilas
            .filter((u) => u.district_id === district.id)
            .map((u) => u.name);
    };

    const handleRegistration = async (data) => {
        data.status = "active";
        data.role = "donor";
        data.createdAt = new Date();

        const profileImg = data.photo[0];

        try {
            // Register user in Firebase Auth
            await registerUser(data.email, data.password);

            // Upload image to ImgBB
            const formData = new FormData();
            formData.append("image", profileImg);

            const image_API_URL = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_host_key}`;

            const res = await axios.post(image_API_URL, formData);
            const photoURL = res.data.data.url;

            // Prepare user info for database
            const userInfo = {
                name: data.name,
                email: data.email,
                photoURL,
                bloodGroup: data.bloodGroup,
                district: data.district,
                upazila: data.upazila,
                status: data.status,
                role: data.role,
                createdAt: data.createdAt,
            };

            // Save user to your backend
            await axiosSecure.post("/users", userInfo);

            // Update Firebase profile
            await updateUserProfile({
                displayName: data.name,
                photoURL,
            });
            navigate("/");
        } catch (error) {
            console.error(error);
            Swal.fire({
                icon: "error",
                title: "Registration Failed",
                text: error.message || "Something went wrong!",
            });
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-[#0a0f0d]">
            <main className="w-full max-w-7xl mx-auto flex-1 px-4 py-8 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left - Hero Section */}
                    <div className="flex flex-col gap-6 text-center lg:text-left">
                        <h1 className="text-4xl md:text-5xl font-black text-[#0e1b17] dark:text-white leading-tight">
                            Become a Hero.<br />Register to Donate.
                        </h1>
                        <p className="text-lg text-gray-700 dark:text-gray-300">
                            Join our community of life-savers. Every donation counts.
                        </p>

                        <div className="mt-8 hidden lg:block">
                            <img
                                className="rounded-2xl w-full h-96 object-cover shadow-2xl border border-gray-200 dark:border-gray-700"
                                src="./register_logo.jpg"
                                alt="Blood donation illustration"
                            />
                        </div>
                    </div>

                    {/* Right - Registration Form */}
                    <div className="bg-white dark:bg-[#121a17] rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700">
                        <h2 className="text-2xl font-bold text-[#0e1b17] dark:text-white mb-8">
                            Create Your Account
                        </h2>

                        <form onSubmit={handleSubmit(handleRegistration)} className="space-y-5">
                            {/* Name */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Name
                                </label>
                                <input
                                    {...register("name", { required: "Name is required" })}
                                    type="text"
                                    placeholder="Your full name"
                                    className="input input-bordered w-full bg-gray-50 dark:bg-[#1f2a24] border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary focus:border-transparent"
                                />
                                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                            </div>

                            {/* Email */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Email Address
                                </label>
                                <input
                                    {...register("email", {
                                        required: "Email is required",
                                        pattern: {
                                            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                            message: "Invalid email address",
                                        },
                                    })}
                                    type="email"
                                    placeholder="you@example.com"
                                    className="input input-bordered w-full bg-gray-50 dark:bg-[#1f2a24] border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white"
                                />
                                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                            </div>

                            {/* Photo */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Profile Photo
                                </label>
                                <input
                                    type="file"
                                    accept="image/*"
                                    {...register("photo", { required: "Photo is required" })}
                                    className="file-input file-input-bordered w-full bg-gray-50 dark:bg-[#1f2a24] border-gray-300 dark:border-gray-600"
                                />
                                {errors.photo && <p className="text-red-500 text-sm mt-1">{errors.photo.message}</p>}
                            </div>

                            {/* Blood Group */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Blood Group
                                </label>
                                <select
                                    {...register("bloodGroup", { required: "Blood group is required" })}
                                    className="select select-bordered w-full bg-gray-50 dark:bg-[#1f2a24] border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white"
                                >
                                    <option value="">Select blood group</option>
                                    {["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"].map((group) => (
                                        <option key={group} value={group}>
                                            {group}
                                        </option>
                                    ))}
                                </select>
                                {errors.bloodGroup && <p className="text-red-500 text-sm mt-1">{errors.bloodGroup.message}</p>}
                            </div>

                            {/* District */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    District
                                </label>
                                <select
                                    {...register("district", { required: "District is required" })}
                                    className="select select-bordered w-full bg-gray-50 dark:bg-[#1f2a24] border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white"
                                >
                                    <option value="">Select district</option>
                                    {districts.map((el) => (
                                        <option key={el.id} value={el.name}>
                                            {el.name}
                                        </option>
                                    ))}
                                </select>
                                {errors.district && <p className="text-red-500 text-sm mt-1">{errors.district.message}</p>}
                            </div>

                            {/* Upazila */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Upazila
                                </label>
                                <select
                                    {...register("upazila", { required: "Upazila is required" })}
                                    className="select select-bordered w-full bg-gray-50 dark:bg-[#1f2a24] border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white"
                                    disabled={!districtName}
                                >
                                    <option value="">{districtName ? "Select upazila" : "First select district"}</option>
                                    {getUpazilaByDistrict(districtName).map((el, index) => (
                                        <option key={index} value={el}>
                                            {el}
                                        </option>
                                    ))}
                                </select>
                                {errors.upazila && <p className="text-red-500 text-sm mt-1">{errors.upazila.message}</p>}
                            </div>

                            {/* Password */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Password
                                </label>
                                <input
                                    {...register("password", {
                                        required: "Password is required",
                                        minLength: {
                                            value: 6,
                                            message: "Password must be at least 6 characters",
                                        },
                                    })}
                                    type="password"
                                    placeholder="••••••••"
                                    className="input input-bordered w-full bg-gray-50 dark:bg-[#1f2a24] border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white"
                                />
                                {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
                            </div>

                            {/* Confirm Password */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Confirm Password
                                </label>
                                <input
                                    {...register("confirmPassword", {
                                        required: "Please confirm your password",
                                        validate: (value) =>
                                            value === password || "Passwords do not match",
                                    })}
                                    type="password"
                                    placeholder="••••••••"
                                    className="input input-bordered w-full bg-gray-50 dark:bg-[#1f2a24] border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white"
                                />
                                {errors.confirmPassword && (
                                    <p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</p>
                                )}
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full h-12 rounded-full bg-primary hover:bg-primary/90 text-white font-bold transition duration-200 shadow-lg"
                            >
                                Register
                            </button>
                        </form>

                        <div className="mt-8 text-center text-gray-600 dark:text-gray-400">
                            <p>
                                Already have an account?{" "}
                                <NavLink to="/login" className="text-primary font-semibold hover:underline">
                                    Log In
                                </NavLink>
                            </p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Register;