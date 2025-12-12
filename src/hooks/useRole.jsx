import { useContext, useEffect, useState } from "react";
import AuthContext from "../context/AuthContext";
import useAxios from "./useAxios";

const useRole = () => {
    const { user, loading } = useContext(AuthContext);
    const axios = useAxios();

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
                const res = await axios.get(`/users/${user.email}/role`);
                // console.log(res);

                setRole(res.data?.role || "donor");
            } catch (err) {
                console.error(err);
                setRole("donor");
            } finally {
                setRoleLoading(false);
            }
        };

        fetchRole();
    }, [loading, user?.email, axios]);

    return { role, roleLoading };
};

export default useRole;
