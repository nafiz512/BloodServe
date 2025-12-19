import React, { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { BiLock, BiSolidDonateBlood } from "react-icons/bi";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import { NavLink, useLocation, useNavigate } from "react-router";
import AuthContext from "../../../context/AuthContext";
import Swal from "sweetalert2";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const { signInUser } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = async (data) => {
        try {
            await signInUser(data.email, data.password);
            navigate(location.state?.from || "/");
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Login Failed",
                text: error.message || "Invalid email or password.",
            });
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };

    return (
        <div className="font-display text-text-light dark:text-text-dark">
            <div className="flex min-h-screen w-full items-center justify-center p-4 bg-gray-50 dark:bg-[#0e0e0e]">
                <div className="grid w-full max-w-6xl grid-cols-1 overflow-hidden rounded-2xl shadow-2xl md:grid-cols-2">
                    {/* Left Column: Branding */}
                    <div className="relative hidden flex-col justify-between bg-primary p-10 md:flex">
                        <div
                            className="absolute inset-0 bg-cover bg-center opacity-20"
                            style={{
                                backgroundImage:
                                    "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDnx9bcJz7CWwwy682-xdfRHmGh-cA3dBd7xcbEBpqgHiQovRbVV1plR9szZZ0GU1GqEBoOLgA_LLxpqeuilXOvhI0AwrybDcuM8uzky-GQz-muTHbbvjDZOR-ViyiWUiEr_sK2SvcgT_ZBgPi236o-B-6s7PVz5tm20HMwaLFykqb6tXrgJuZaOZfOQKECTIPouc0cUDnxfkqDSLeD5pylVmvjd_hPTF6A6Envk15Qe4Cz150-8TTLTePaNR-elOlCkW6WNA_64HY')",
                            }}
                        ></div>

                        <div className="relative z-10">
                            <div className="flex items-center gap-4">
                                <BiSolidDonateBlood className="text-5xl text-white" />
                                <span className="text-3xl font-bold text-white">VitalFlow</span>
                            </div>
                        </div>

                        <div className="relative z-10 text-white">
                            <h1 className="mb-6 text-4xl md:text-5xl font-black leading-tight">
                                Be a Hero.<br />Donate Blood.
                            </h1>
                            <p className="text-lg font-medium text-white/90 max-w-md">
                                Your donation can make a world of difference. Join our life-saving community today.
                            </p>
                        </div>
                    </div>

                    {/* Right Column: Login Form */}
                    <div className="flex w-full flex-col justify-center bg-white dark:bg-[#1b1b1b] p-8 sm:p-12">
                        <div className="w-full max-w-md mx-auto">
                            <div className="mb-10 text-left">
                                <h2 className="text-3xl font-bold text-text-light dark:text-text-dark">
                                    Welcome Back
                                </h2>
                                <p className="mt-3 text-subtle-text-light dark:text-subtle-text-dark">
                                    Log in to your account to continue saving lives.
                                </p>
                            </div>

                            <form onSubmit={handleSubmit(handleLogin)} className="space-y-6">
                                {/* Email Field */}
                                <div>
                                    <label className="block text-sm font-medium text-subtle-text-light dark:text-subtle-text-dark mb-2">
                                        Email Address
                                    </label>
                                    <div className="relative">
                                        <IoMdMail className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-xl text-subtle-text-light dark:text-subtle-text-dark" />
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
                                            className="w-full rounded-lg border border-border-light dark:border-border-dark bg-transparent dark:bg-gray-800 py-3.5 pl-12 pr-4 text-text-light dark:text-text-dark placeholder:text-subtle-text-light dark:placeholder:text-subtle-text-dark focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                                        />
                                    </div>
                                    {errors.email && (
                                        <p className="mt-2 text-sm text-red-500">{errors.email.message}</p>
                                    )}
                                </div>

                                {/* Password Field */}
                                <div>
                                    <label className="block text-sm font-medium text-subtle-text-light dark:text-subtle-text-dark mb-2">
                                        Password
                                    </label>
                                    <div className="relative">
                                        <BiLock className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-xl text-subtle-text-light dark:text-subtle-text-dark" />
                                        <input
                                            {...register("password", {
                                                required: "Password is required",
                                            })}
                                            type={showPassword ? "text" : "password"}
                                            placeholder="Enter your password"
                                            className="w-full rounded-lg border border-border-light dark:border-border-dark bg-transparent dark:bg-gray-800 py-3.5 pl-12 pr-12 text-text-light dark:text-text-dark placeholder:text-subtle-text-light dark:placeholder:text-subtle-text-dark focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                                        />
                                        <button
                                            type="button"
                                            onClick={togglePasswordVisibility}
                                            className="absolute right-4 top-1/2 -translate-y-1/2 text-xl text-subtle-text-light dark:text-subtle-text-dark hover:text-primary transition-colors"
                                            aria-label={showPassword ? "Hide password" : "Show password"}
                                        >
                                            {showPassword ? <BsEyeSlash /> : <BsEye />}
                                        </button>
                                    </div>
                                    {errors.password && (
                                        <p className="mt-2 text-sm text-red-500">{errors.password.message}</p>
                                    )}
                                </div>

                                {/* Login Button */}
                                <div>
                                    <button
                                        type="submit"
                                        className="w-full rounded-full bg-primary px-6 py-3.5 text-lg font-semibold text-white shadow-lg transition-all duration-200 hover:bg-primary/90 hover:scale-[1.02] focus:outline-none focus:ring-4 focus:ring-primary/50"
                                    >
                                        Login
                                    </button>
                                </div>
                            </form>

                            {/* Register Link */}
                            <p className="mt-10 text-center text-sm text-subtle-text-light dark:text-subtle-text-dark">
                                Don't have an account?{" "}
                                <NavLink
                                    to="/register"
                                    className="font-semibold text-primary hover:text-primary/80 hover:underline transition"
                                >
                                    Register here
                                </NavLink>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;