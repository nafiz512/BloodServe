import React, { useEffect, useState } from "react";
import AuthContext from "./AuthContext";
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
    updateProfile,
} from "firebase/auth";
import { auth } from "../firebase/firebase.config";

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const registerUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };
    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    };
    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile);
    };
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    };
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unSubscribe();
        };
    }, []);

    const info = {
        user,
        loading,
        registerUser,
        signInUser,
        updateUserProfile,
        logOut,
    };
    return <AuthContext value={info}>{children}</AuthContext>;
};

export default AuthProvider;
