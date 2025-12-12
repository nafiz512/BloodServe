import axios from "axios";
import React from "react";

const axiosfetch = axios.create({
    baseURL: "http://192.168.1.104:5000",
});
const useAxios = () => {
    return axiosfetch;
};

export default useAxios;
