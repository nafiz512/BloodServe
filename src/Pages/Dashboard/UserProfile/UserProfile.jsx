import React, { useContext, useEffect, useState } from "react";
import { use } from "react";
import AuthContext from "../../../context/AuthContext";
import { IoCameraOutline } from "react-icons/io5";
// import useAxios from "../../../hooks/useAxios";
import Loading from "../../../Loading/Loading";
import { useForm, useWatch } from "react-hook-form";
import axios from "axios";
import LocationContext from "../../../context/LocationContext";
import Swal from "sweetalert2";
import useSecureAxios from "../../../hooks/useSecureAxios";

const UserProfile = () => {
    const { user, updateUserProfile } = use(AuthContext);
    const [userInfo, setUserInfo] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const axiosSecure = useSecureAxios();
    const { districts, upazilas } = useContext(LocationContext);
    const { register, handleSubmit, setValue, control } = useForm();
    const selectedDistrict = useWatch({ control, name: "district" });

    // reset upazila value when district selection changes in editing mode
    useEffect(() => {
        if (isEditing && selectedDistrict) {
            setValue("upazila", "");
        }
    }, [selectedDistrict, setValue, isEditing]);

    // filter upazilas by district
    const getUpazilasByDistrict = (districtName) => {
        const district = districts.find(d => d.name === districtName);
        if (!district) return [];

        return upazilas
            .filter(u => u.district_id === district.id)
            .map(u => u.name);
    };

    // Fetch user data on component mount
    useEffect(() => {
        if (user?.email) {
            axiosSecure.get(`/users/role?email=${user?.email}`)
                .then(response => {
                    const userData = response.data;
                    setUserInfo(userData);
                })
                .catch(error => {
                    Swal.fire({
                        icon: "error",
                        title: error.message,
                        text: "Something went wrong!",
                    });
                });
        }
    }, [axiosSecure, user?.email]);

    // Handle edit button click
    const handleEditClick = () => {
        setIsEditing(true);
    };

    // Handle cancel button click
    const handleCancelClick = (e) => {
        e.preventDefault();
        setIsEditing(false);
    };

    // Handle save button click
    const handleSave = async (data) => {
        if (!user?.email) return;
        setIsLoading(true);

        // Prepare data for API update
        const updateData = { ...data };

        if (data.photo instanceof File) {
            // Upload new photo if it's a File object (meaning a new image was selected)
            const formData = new FormData();
            formData.append("image", data.photo);
            const image_API_URL = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_image_host_key}`;

            try {
                const res = await axios.post(image_API_URL, formData);
                updateData.photoURL = res.data.data.url;
            } catch (error) {
                Swal.fire({
                    icon: "error",
                    title: error.message,
                    text: "Something went wrong!",
                });
                setIsLoading(false);
                return; // Stop saving if photo upload fails
            }
        } else {
            updateData.photoURL = userInfo.photoURL;
        }
        delete updateData.photo;

        try {
            const response = await axiosSecure.patch(`/users/${user?.email}`, updateData);

            if (response.status === 200) {
                // Update the userInfo state and Firebase profile
                const updatedUserInfo = {
                    ...userInfo,
                    ...updateData,
                    photoURL: updateData.photoURL || userInfo.photoURL
                };

                const userProfile = {
                    displayName: updatedUserInfo.name,
                    photoURL: updatedUserInfo.photoURL,
                };

                updateUserProfile(userProfile);
                setUserInfo(updatedUserInfo);
                setIsEditing(false);
            }
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: error.message,
                text: "Something went wrong!",
            });
        } finally {
            setIsLoading(false);
        }
    };

    // Handle avatar upload 
    const handleAvatarUpload = (e) => {
        const file = e.target.files[0];
        if (file) {
            // Set the File object to the 'photo' field
            setValue('photo', file, { shouldDirty: true })
            const reader = new FileReader();
            reader.onloadend = () => {
            };
            reader.readAsDataURL(file);
        }
    };

    if (!userInfo) {
        return <Loading />;
    }
    // Determine the current image source for display
    const currentPhotoURL = (isEditing && control._fields.photo?._f.value instanceof File)
        ? URL.createObjectURL(control._fields.photo?._f.value)
        : userInfo.photoURL;

    return (
        <div>
            <div className="flex-1 overflow-y-auto p-8">
                <div className="mx-auto max-w-4xl">
                    {/* Page Heading */}
                    <div className="mb-8">
                        <p className="text-text-light-primary text-4xl font-black leading-tight tracking-[-0.033em]">
                            My Profile
                        </p>
                        <p className="text-base font-normal">
                            View and edit your personal information.
                        </p>
                    </div>

                    {/* Profile Card */}
                    <div className="rounded-2xl border-gray-150 p-6 shadow-2xl dark:bg-surface-dark">
                        {/* Profile Header */}
                        <div className="flex w-full flex-col items-start gap-6 border-b border-gray-300 pb-6 sm:flex-row sm:items-center sm:justify-between">
                            <div className="flex items-center gap-6">
                                <div className="relative">
                                    {currentPhotoURL ? (
                                        <img
                                            src={currentPhotoURL}
                                            alt="User avatar"
                                            className="size-24 rounded-full object-cover"
                                            onError={(e) => {
                                                e.target.onerror = null;
                                                e.target.src = 'https://via.placeholder.com/96';
                                            }}
                                        />
                                    ) : (
                                        <div className="size-24 rounded-full] flex items-center justify-center text-white font-bold text-2xl">
                                            {userInfo?.name?.charAt(0) || 'U'}
                                        </div>
                                    )}

                                    {isEditing && (
                                        <div className="absolute inset-0 flex cursor-pointer items-center justify-center rounded-full bg-black/30">
                                            <label htmlFor="avatar-upload" className="cursor-pointer">
                                                <span className="absolute text-2xl text-white -right-2 bottom-1 bg-gray-700 rounded-2xl p-1">
                                                    <IoCameraOutline />
                                                </span>
                                                <input
                                                    id="avatar-upload"
                                                    accept="image/*"
                                                    className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
                                                    type="file"
                                                    onChange={handleAvatarUpload}
                                                    disabled={!isEditing}
                                                />
                                            </label>
                                        </div>
                                    )}
                                </div>

                                <div className="flex flex-col justify-center">
                                    <p className="text-text-light-primary text-2xl font-bold leading-tight tracking-[-0.015em]">
                                        {userInfo?.name}
                                    </p>
                                    <p className="text-base font-normal">
                                        Blood Group: {userInfo?.bloodGroup || 'Not specified'}
                                    </p>
                                </div>
                            </div>

                            {/* Action Buttons - NOT inside form */}
                            <div className="flex w-full gap-3 sm:w-auto">
                                {!isEditing ? (
                                    <button
                                        type="button"
                                        onClick={handleEditClick}
                                        className="flex flex-1 min-w-[84px] cursor-pointer items-center justify-center rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold sm:flex-none"
                                    >
                                        <span className="truncate">
                                            Edit Profile
                                        </span>
                                    </button>
                                ) : (
                                    <>
                                        <button
                                            type="button"
                                            onClick={handleCancelClick}
                                            className="flex min-w-[84px] cursor-pointer items-center justify-center rounded-lg h-10 px-4 text-text-light-primary text-sm font-bold transition-colors"
                                            disabled={isLoading}
                                        >
                                            <span className="truncate">Cancel</span>
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => {
                                                const form = document.getElementById('profile-form');
                                                if (form) form.requestSubmit();
                                            }}
                                            className="flex min-w-[84px] cursor-pointer items-center justify-center rounded-lg h-10 px-4 text-white bg-primary text-sm font-bold hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                                            disabled={isLoading}
                                        >
                                            {isLoading ? (
                                                <span className="flex items-center gap-2">
                                                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                                                    Saving...
                                                </span>
                                            ) : (
                                                <span className="truncate">Save Changes</span>
                                            )}
                                        </button>
                                    </>
                                )}
                            </div>
                        </div>

                        {/* Profile Form - Wrap the form fields only */}
                        <form id="profile-form" onSubmit={handleSubmit(handleSave)}>
                            <div className="grid grid-cols-1 gap-6 pt-6 md:grid-cols-2">
                                {/* Full Name */}
                                <div className="flex flex-col">
                                    <label htmlFor="name" className="text-text-light-primary text-base font-medium pb-2">
                                        Full Name
                                    </label>
                                    <input
                                        defaultValue={userInfo.name}
                                        {...register('name', { required: true })}
                                        id="name"
                                        readOnly={!isEditing}
                                        className={`form-input flex w-full min-w-0 flex-1 rounded-lg border border-gray-200 px-4 py-3 text-base font-normal ${isEditing
                                            ? 'text-text-light-primary focus:border-primary focus:outline-0 focus:ring-2 focus:ring-primary/40'
                                            : 'bg-gray-50 text-text-light-secondary cursor-not-allowed'
                                            }`}
                                    />
                                </div>
                                {/* hidden photo field. Will contain the photoURL string OR the new File object */}
                                <input type="hidden" {...register("photo")} />

                                {/* Email Address - Always read-only */}
                                <div className="flex flex-col">
                                    <label htmlFor="email" className="text-text-light-primary text-base font-medium pb-2">
                                        Email Address
                                    </label>
                                    <input
                                        value={userInfo?.email || ''}
                                        readOnly
                                        className="form-input flex w-full min-w-0 flex-1 rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-base font-normal text-text-light-secondary cursor-not-allowed"
                                    />
                                </div>
                                {/* Blood Group */}
                                <div className="flex flex-col">
                                    <label htmlFor="bloodGroup" className="text-text-light-primary text-base font-medium pb-2">
                                        Blood Group
                                    </label>
                                    {isEditing ? (
                                        <select
                                            {...register('bloodGroup', { required: true })}
                                            id="bloodGroup"
                                            className="form-input flex w-full min-w-0 flex-1 rounded-lg border border-gray-200 px-4 py-3 text-base font-normal text-text-light-primary focus:border-primary focus:outline-0 focus:ring-2 focus:ring-primary/40"
                                        >
                                            <option value="">Select Blood Group</option>
                                            <option value="A+">A+</option>
                                            <option value="A-">A-</option>
                                            <option value="B+">B+</option>
                                            <option value="B-">B-</option>
                                            <option value="AB+">AB+</option>
                                            <option value="AB-">AB-</option>
                                            <option value="O+">O+</option>
                                            <option value="O-">O-</option>
                                        </select>
                                    ) : (
                                        <input
                                            value={userInfo?.bloodGroup || 'Not specified'}
                                            readOnly
                                            className="form-input flex w-full min-w-0 flex-1 rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-base font-normal text-text-light-secondary cursor-not-allowed"
                                        />
                                    )}
                                </div>

                                {/* District (Fixed) */}
                                <div className="flex flex-col">
                                    <label htmlFor="district" className="text-text-light-primary text-base font-medium pb-2">
                                        District
                                    </label>
                                    {isEditing ? (
                                        <select
                                            id="district"
                                            {...register("district", { required: true })}
                                            className="form-select rounded-lg text-text-light-primary border border-gray-300 p-4 text-base font-normal leading-normal focus:border-primary focus:outline-0 focus:ring-2 focus:ring-primary/40"
                                        >
                                            <option value="">Select District</option>
                                            {districts.map((d) => (
                                                <option key={d.id} value={d.name}>
                                                    {d.name}
                                                </option>
                                            ))}
                                        </select>
                                    ) : (
                                        <input
                                            value={userInfo?.district || 'Not specified'}
                                            readOnly
                                            className="form-input flex w-full min-w-0 flex-1 rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-base font-normal text-text-light-secondary cursor-not-allowed"
                                        />
                                    )}
                                </div>

                                {/* Upazila (Fixed) */}
                                <div className="flex flex-col md:col-span-2">
                                    <label htmlFor="upazila" className="text-text-light-primary text-base font-medium pb-2">
                                        Upazila
                                    </label>
                                    {isEditing ? (
                                        <select
                                            {...register("upazila", { required: true })}
                                            className="form-select flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-light-primary border border-gray-300 p-4 text-base font-normal leading-normal focus:outline-none focus:ring-2 focus:ring-primary"
                                            disabled={!selectedDistrict}
                                        >
                                            <option value="">Select Upazila</option>
                                            {getUpazilasByDistrict(selectedDistrict).map((u) => (
                                                <option key={u} value={u}>
                                                    {u}
                                                </option>
                                            ))}
                                        </select>
                                    ) : (
                                        <input
                                            value={userInfo?.upazila || 'Not specified'}
                                            readOnly
                                            className="form-input flex w-full min-w-0 flex-1 rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-base font-normal text-text-light-secondary cursor-not-allowed"
                                        />
                                    )}
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;