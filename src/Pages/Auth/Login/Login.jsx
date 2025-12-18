import React from "react";
import { use } from "react";
import { useForm } from "react-hook-form";
import { BiLock, BiSolidDonateBlood } from "react-icons/bi";
import { BsEye } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import { NavLink, useLocation, useNavigate } from "react-router";
import AuthContext from "../../../context/AuthContext";

const Login = () => {
    const {
        register,
        handleSubmit,

    } = useForm();
    const { signInUser } = use(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();


    const handleLogin = (data) => {
        signInUser(data.email, data.password).then(() => {
            navigate(location.state || '/');
        });
    };
    return (
        <div>
            <div className="font-display   text-text-light dark:text-text-dark">
                <div className="flex min-h-screen w-full items-center justify-center p-4">
                    <div className="grid w-full max-w-6xl grid-cols-1 overflow-hidden rounded-xl shadow-lg md:grid-cols-2">
                        {/* <!-- Left Column: Branding --> */}
                        <div className="relative hidden flex-col justify-between bg-primary p-10 md:flex">
                            <div
                                className="absolute inset-0 bg-cover bg-center opacity-10 bg-[url('https://lh3.googleusercontent.com/aida-public/AB6AXuDnx9bcJz7CWwwy682-xdfRHmGh-cA3dBd7xcbEBpqgHiQovRbVV1plR9szZZ0GU1GqEBoOLgA_LLxpqeuilXOvhI0AwrybDcuM8uzky-GQz-muTHbbvjDZOR-ViyiWUiEr_sK2SvcgT_ZBgPi236o-B-6s7PVz5tm20HMwaLFykqb6tXrgJuZaOZfOQKECTIPouc0cUDnxfkqDSLeD5pylVmvjd_hPTF6A6Envk15Qe4Cz150-8TTLTePaNR-elOlCkW6WNA_64HY')]"
                                data-alt="Abstract pattern of interconnecting lines suggesting community and connection."
                            ></div>
                            <div className="relative z-10">
                                <div className="flex items-center gap-3">
                                    <span className="material-symbols-outlined text-4xl text-white">
                                        <BiSolidDonateBlood></BiSolidDonateBlood>
                                    </span>
                                    <span className="text-2xl font-bold text-white">
                                        VitalFlow
                                    </span>
                                </div>
                            </div>
                            <div className="relative z-10 text-white">
                                <h1 className="mb-4 text-4xl font-black leading-tight tracking-tight">
                                    Be a Hero. Donate Blood.
                                </h1>
                                <p className="text-lg font-normal text-white/80">
                                    Your donation can make a world of
                                    difference. Connect with us and become a
                                    part of a life-saving community.
                                </p>
                            </div>
                        </div>
                        {/* <!-- Right Column: Form --> */}
                        <div className="flex w-full flex-col justify-center bg-white  p-8 sm:p-12">
                            <div className="w-full max-w-md">
                                <div className="mb-8 text-left">
                                    <h2 className="text-3xl font-bold text-text-light dark:text-text-dark">
                                        Welcome Back
                                    </h2>
                                    <p className="mt-2 text-subtle-text-light dark:text-subtle-text-dark">
                                        Log in to your account to continue.
                                    </p>
                                </div>
                                <form
                                    onSubmit={handleSubmit(handleLogin)}
                                    className="space-y-6"
                                >
                                    {/* <!-- Email Field --> */}
                                    <div>
                                        <label className="block text-sm font-medium text-subtle-text-light dark:text-subtle-text-dark mb-2">
                                            Email Address
                                        </label>
                                        <div className="relative">
                                            <span className="material-symbols-outlined pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-subtle-text-light dark:text-subtle-text-dark">
                                                <IoMdMail></IoMdMail>
                                            </span>
                                            <input
                                                {...register("email", {
                                                    required: true,
                                                })}
                                                className="block w-full rounded-md border border-border-light dark:border-border-dark  dark:bg-gray-800 py-3 pl-10 pr-3 text-text-light dark:text-text-dark placeholder:text-subtle-text-light dark:placeholder:text-subtle-text-dark focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50 dark:focus:ring-primary/40 sm:text-sm"
                                                id="email"
                                                name="email"
                                                placeholder="you@example.com"
                                                required=""
                                                type="email"
                                            />
                                        </div>
                                        {/* <!-- Example Error Message --> */}
                                        <p className="mt-2 hidden text-sm text-error">
                                            Invalid email format.
                                        </p>
                                    </div>
                                    {/* <!-- Password Field --> */}
                                    <div>
                                        <label className="block text-sm font-medium text-subtle-text-light dark:text-subtle-text-dark mb-2">
                                            Password
                                        </label>
                                        <div className="relative">
                                            <span className="material-symbols-outlined pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-subtle-text-light dark:text-subtle-text-dark">
                                                <BiLock></BiLock>
                                            </span>
                                            <input
                                                {...register("password", {
                                                    required: true,
                                                })}
                                                className="block w-full rounded-md border border-border-light dark:border-border-dark  dark:bg-gray-800 py-3 pl-10 pr-10 text-text-light dark:text-text-dark placeholder:text-subtle-text-light dark:placeholder:text-subtle-text-dark focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50 dark:focus:ring-primary/40 sm:text-sm"
                                                id="password"
                                                name="password"
                                                placeholder="Enter your password"
                                                required=""
                                                type="password"
                                            />
                                            <button
                                                className="absolute inset-y-0 right-0 flex items-center pr-3 text-subtle-text-light dark:text-subtle-text-dark cursor-pointer"
                                                type="button"
                                            >
                                                <span className="material-symbols-outlined h-5 w-5">
                                                    <BsEye></BsEye>
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                    {/* Login Button  */}
                                    <div>
                                        <button
                                            className="flex w-full justify-center rounded-full bg-primary px-3 py-3 text-sm font-semibold leading-6 text-white shadow-sm transition-transform duration-150 ease-in-out hover:scale-[1.02] hover:bg-primary/90 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-primary"
                                            type="submit"
                                        >
                                            Login
                                        </button>
                                    </div>
                                </form>
                                {/* <!-- Registration Link --> */}
                                <p className="mt-8 text-center text-sm text-subtle-text-light dark:text-subtle-text-dark">
                                    Don't have an account?
                                    <NavLink
                                        className="font-semibold leading-6 pl-2 text-primary hover:text-primary/80"
                                        to={"/register"}
                                    >
                                        Register
                                    </NavLink>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
