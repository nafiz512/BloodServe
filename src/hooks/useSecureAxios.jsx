import axios from "axios";
import React, { useEffect } from "react";
import { useContext } from "react";
import AuthContext from "../context/AuthContext";

const instance = axios.create({
    baseURL: "https://blood-serve-server.vercel.app",
});
const useSecureAxios = () => {
    const { user } = useContext(AuthContext)

    useEffect(() => {
        const reqInterceptor = instance.interceptors.request.use(
            (config) => {
                const token = user?.accessToken;

                if (token) {
                    config.headers.userToken = `Bearer ${token}`;
                }
                return config;
            },
            (error) => Promise.reject(error)
        );
        return () => {
            instance.interceptors.request.eject(reqInterceptor);
        };
    }, [user?.accessToken]);
    return instance;
};

export default useSecureAxios;