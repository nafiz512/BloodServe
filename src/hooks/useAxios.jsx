import axios from "axios";
import React from "react";

const axiosfetch = axios.create({
    baseURL: "https://blood-serve-server.vercel.app",
});
const useAxios = () => {
    return axiosfetch;
};

export default useAxios;
