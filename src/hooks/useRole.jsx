import { useContext, useEffect, useState } from "react";
import AuthContext from "../context/AuthContext";
// import useAxios from "./useAxios";
import Swal from "sweetalert2";
import useSecureAxios from "./useSecureAxios";

const useRole = () => {
    const { user, loading } = useContext(AuthContext);
    const axiosSecure = useSecureAxios();
    const [isActive, setActive] = useState(false)

    const [role, setRole] = useState("donor");
    const [roleLoading, setRoleLoading] = useState(true);

    useEffect(() => {
        // Wait until Firebase finishes loading
        if (loading) return;

        // If no user logged in
        if (!user?.email) {
            setRole("donor");
            setRoleLoading(false);
            return;
        }

        // Fetch role
        const fetchRole = async () => {
            try {
                const res = await axiosSecure.get(`/users/role?email=${user.email}`);
                setRole(res.data?.role || "donor");
                setActive(res.data.status == 'active')
            } catch {

                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!",
                });
                setRole("donor");
            } finally {
                setRoleLoading(false);
            }
        };

        fetchRole();
    }, [loading, user.email, axiosSecure]);

    return { role, roleLoading, isActive };
};

export default useRole;
