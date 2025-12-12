import React, { useContext, useEffect, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { NavLink } from "react-router";
import AuthContext from "../../../context/AuthContext";
import useAxios from "../../../hooks/useAxios";
import axios from "axios";

const Register = () => {
    const {
        register,
        handleSubmit,
        control,
        setValue,
        formState: { errors },
    } = useForm();
    const axiosSecure = useAxios();

    const { registerUser, updateUserProfile } = useContext(AuthContext);
    const [district, setDistrict] = useState([]);
    const [upozila, setUpozila] = useState([]);

    const districtName = useWatch({ control, name: "district" });

    // Load district data
    useEffect(() => {
        axios.get("./district.json").then((data) => {
            setDistrict(data.data);
        });
    }, []);

    // Load upazila data
    useEffect(() => {
        axios.get("./upozila.json").then((data) => {
            setUpozila(data.data);
        });
    }, []);

    // Reset upazila when district changes
    useEffect(() => {
        setValue("upazila", ""); // reset to placeholder
    }, [districtName, setValue]);

    // Filter Upazila by District
    const upozilaByDistrict = (districtName) => {
        const dis = district.find((el) => el.name === districtName);

        if (dis?.id) {
            return upozila
                .filter((el) => el.district_id === dis.id)
                .map((el) => el.name);
        }
        return [];
    };

    const handleRegistration = (data) => {
        data.status = "active";
        data.role = "donor";
        data.createdAt = new Date();
        const profileImg = data.photo[0];
        registerUser(data.email, data.password).then(() => {
            // 1. store the image in form data
            const formData = new FormData();
            formData.append("image", profileImg);

            // 2. send the photo to store and get the ul
            const image_API_URL = `https://api.imgbb.com/1/upload?key=${
                import.meta.env.VITE_image_host_key
            }`;

            axios.post(image_API_URL, formData).then((res) => {
                const photoURL = res.data.data.url;
                data.photoURL = photoURL;
                // create user in the database
                const userInfo = {
                    ...data,
                };
                delete userInfo.password;
                delete userInfo.confirmPassword;

                userInfo.po;
                axiosSecure.post("/users", userInfo).then((res) => {
                    if (res.data.insertedId) {
                        console.log("user created in the database");
                    }
                });

                // update user profile to firebase
                const userProfile = {
                    displayName: data.name,
                    photoURL: photoURL,
                };

                updateUserProfile(userProfile)
                    .then(() => {
                        // console.log('user profile updated done.')
                        // navigate(location.state || '/');
                    })
                    .catch((error) => console.log(error));
            });
        });
    };

    return (
        <div>
            <main className="w-full max-w-7xl flex-1 px-4 py-8 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left */}
                    <div className="flex flex-col gap-4 text-center lg:text-left">
                        <h1 className="text-[#0e1b17] dark:text-white text-4xl md:text-5xl font-black">
                            Become a Hero. Register to Donate.
                        </h1>
                        <p className="text-[#4d9981] dark:text-gray-300">
                            Join our community of donors. Your contribution can
                            save lives.
                        </p>

                        <div className="mt-4 hidden lg:block">
                            <img
                                className="rounded-xl w-full h-80 object-cover shadow-md"
                                src="./register_logo.jpg"
                                alt="Register illustration"
                            />
                        </div>
                    </div>

                    {/* Right - Form */}
                    <div className="bg-white dark:bg-background-dark/50 rounded-xl shadow-lg p-6 sm:p-8">
                        <h2 className="text-[#0e1b17] dark:text-white text-[22px] font-bold mb-6">
                            Create Your Account
                        </h2>

                        <form onSubmit={handleSubmit(handleRegistration)}>
                            {/* Name */}
                            <label className="flex flex-col mb-4">
                                <p className="pb-2">Name</p>
                                <input
                                    {...register("name", { required: true })}
                                    type="text"
                                    placeholder="Type here"
                                    className="input w-full"
                                />
                                {errors.name && (
                                    <p className="text-red-500">
                                        Name is required
                                    </p>
                                )}
                            </label>

                            {/* Email */}
                            <label className="flex flex-col mb-4">
                                <p className="pb-2">Email Address</p>
                                <input
                                    {...register("email", { required: true })}
                                    type="email"
                                    placeholder="Enter your email"
                                    className="input w-full"
                                />
                                {errors.email && (
                                    <p className="text-red-500">
                                        Email is required
                                    </p>
                                )}
                            </label>

                            {/* Photo */}
                            <label className="flex flex-col mb-4">
                                <p className="pb-2">Photo</p>
                                <input
                                    type="file"
                                    {...register("photo", { required: true })}
                                    className="file-input w-full"
                                />
                                {errors.photo && (
                                    <p className="text-red-500">
                                        Photo is required
                                    </p>
                                )}
                            </label>

                            {/* Blood Group */}
                            <fieldset className="mb-4">
                                <legend>Blood Group</legend>
                                <select
                                    {...register("bloodGroup", {
                                        required: true,
                                    })}
                                    className="select w-full"
                                >
                                    <option value="">Pick a blood group</option>
                                    <option>A+</option>
                                    <option>A-</option>
                                    <option>B+</option>
                                    <option>B-</option>
                                    <option>AB+</option>
                                    <option>AB-</option>
                                    <option>O+</option>
                                    <option>O-</option>
                                </select>
                                {errors.bloodGroup && (
                                    <p className="text-red-500">
                                        Blood group is required
                                    </p>
                                )}
                            </fieldset>

                            {/* District */}
                            <fieldset className="mb-4">
                                <legend>District</legend>
                                <select
                                    {...register("district", {
                                        required: true,
                                    })}
                                    className="select w-full"
                                >
                                    <option value="">Pick a district</option>
                                    {district.map((el) => (
                                        <option key={el.id} value={el.name}>
                                            {el.name}
                                        </option>
                                    ))}
                                </select>
                                {errors.district && (
                                    <p className="text-red-500">
                                        District is required
                                    </p>
                                )}
                            </fieldset>

                            {/* Upazila */}
                            <fieldset className="mb-4">
                                <legend>Upazila</legend>
                                <select
                                    {...register("upazila", { required: true })}
                                    className="select w-full"
                                >
                                    <option value="">Pick an upazila</option>
                                    {upozilaByDistrict(districtName).map(
                                        (el, index) => (
                                            <option key={index} value={el}>
                                                {el}
                                            </option>
                                        )
                                    )}
                                </select>
                                {errors.upazila && (
                                    <p className="text-red-500">
                                        Upazila is required
                                    </p>
                                )}
                            </fieldset>

                            {/* Password */}
                            <label className="flex flex-col mb-4">
                                <p className="pb-2">Password</p>
                                <input
                                    {...register("password", {
                                        required: true,
                                    })}
                                    type="password"
                                    className="input w-full"
                                />
                                {errors.password && (
                                    <p className="text-red-500">
                                        Password is required
                                    </p>
                                )}
                            </label>

                            {/* Confirm Password */}
                            <label className="flex flex-col mb-4">
                                <p className="pb-2">Confirm Password</p>
                                <input
                                    {...register("confirmPassword", {
                                        required: true,
                                    })}
                                    type="password"
                                    className="input w-full"
                                />
                                {errors.confirmPassword && (
                                    <p className="text-red-500">
                                        Confirm your password
                                    </p>
                                )}
                            </label>

                            {/* Submit */}
                            <button
                                type="submit"
                                className="w-full h-12 rounded-full bg-primary text-white font-bold"
                            >
                                Register
                            </button>
                        </form>

                        <div className="mt-6 text-center">
                            <p>
                                Already have an account?{" "}
                                <NavLink
                                    className="text-primary font-semibold"
                                    to={"/login"}
                                >
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
