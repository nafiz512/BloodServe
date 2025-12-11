import React from "react";

const UserProfile = () => {
    return (
        <div>
            <div className="flex-1 overflow-y-auto p-8">
                <div className="mx-auto max-w-4xl">
                    {/* <!-- Page Heading --> */}
                    <div className="mb-8">
                        <p className="text-text-light-primary dark:text-text-dark-primary text-4xl font-black leading-tight tracking-[-0.033em]">
                            My Profile
                        </p>
                        <p className="text-text-light-secondary dark:text-text-dark-secondary text-base font-normal leading-normal">
                            View and edit your personal information.
                        </p>
                    </div>
                    {/* <!-- Profile Card --> */}
                    <div className="rounded-2xl border border-border-light bg-surface-light p-6 shadow-sm dark:border-border-dark dark:bg-surface-dark">
                        {/* <!-- Profile Header --> */}
                        <div className="flex w-full flex-col items-start gap-6 border-b border-border-light pb-6 dark:border-border-dark sm:flex-row sm:items-center sm:justify-between">
                            <div className="flex items-center gap-6">
                                <div className="relative">
                                    <div
                                        className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-24 bg-[url('https://lh3.googleusercontent.com/aida-public/AB6AXuCUpS8eoqTB49BKuKo-1Okmp5cJwYrwXomWhu04eiGLrDT3TKALoOgK7sVGSJBhKkWQ881616jGaQD50aeZnNfyJqvRrCMCOjS4XpNJsYKO5GcPbBQa1YOAXcgQZY7Sg1SzKv8cXAbegvUZjriddxp1DciXdR_WoETyfP1kiAaZYIRt_p--L2hCz5BF2NxXa6a95PomdYMHmty0t6dRalONpNTMh-RrGouXNkmshas-gDh6jIWHckv_Rd76cMDUsaC4Q6rTWMPQviQ')]"
                                        data-alt="User avatar image"
                                    ></div>
                                    {/* <!-- Avatar Upload Overlay - shown in edit mode --> */}
                                    <div className="absolute inset-0 flex cursor-pointer items-center justify-center rounded-full bg-black/50 opacity-0 transition-opacity hover:opacity-100">
                                        <span className="material-symbols-outlined text-3xl text-white">
                                            photo_camera
                                        </span>
                                        <input
                                            accept="image/*"
                                            className="absolute inset-0 h-full w-full cursor-pointer opacity-0"
                                            type="file"
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col justify-center">
                                    <p className="text-text-light-primary dark:text-text-dark-primary text-2xl font-bold leading-tight tracking-[-0.015em]">
                                        John Doe
                                    </p>
                                    <p className="text-text-light-secondary dark:text-text-dark-secondary text-base font-normal leading-normal">
                                        Blood Group: O+
                                    </p>
                                </div>
                            </div>
                            {/* <!-- Action Buttons --> */}
                            <div className="flex w-full gap-3 sm:w-auto">
                                <button className="flex flex-1 min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-text-light-primary text-sm font-bold leading-normal tracking-[0.015em] sm:flex-none transition-transform hover:scale-105">
                                    <span className="truncate text-white">
                                        Edit Profile
                                    </span>
                                </button>
                                {/* <!-- Save and Cancel buttons - shown in edit mode --> */}

                                {/* <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-surface-subtle-light dark:bg-surface-subtle-dark text-text-light-primary dark:text-text-dark-primary text-sm font-bold leading-normal tracking-[0.015em]">
                                    <span className="truncate">Cancel</span>
                                </button>
                                <button className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-text-light-primary text-sm font-bold leading-normal tracking-[0.015em]">
                                    <span className="truncate">Save Changes</span>
                                </button> */}
                            </div>
                        </div>
                        {/* <!-- Profile Form --> */}
                        <div className="grid grid-cols-1 gap-6 pt-6 md:grid-cols-2">
                            <div className="flex flex-col">
                                <p className="text-text-light-primary dark:text-text-dark-primary text-base font-medium leading-normal pb-2">
                                    Full Name
                                </p>
                                <input
                                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg border border-border-light bg-background-light px-4 py-3 text-base font-normal leading-normal text-text-light-primary placeholder:text-text-light-secondary focus:border-primary focus:outline-0 focus:ring-2 focus:ring-primary/40 dark:border-border-dark dark:bg-background-dark dark:text-text-dark-primary dark:placeholder:text-text-dark-secondary"
                                    value="John Doe"
                                />
                            </div>
                            <div className="flex flex-col">
                                <p className="text-text-light-primary dark:text-text-dark-primary text-base font-medium leading-normal pb-2">
                                    Email Address
                                </p>
                                <input
                                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg border border-border-light bg-background-light/50 px-4 py-3 text-base font-normal leading-normal text-text-light-secondary placeholder:text-text-light-secondary focus:outline-0 focus:ring-0 cursor-not-allowed dark:border-border-dark dark:bg-background-dark/50 dark:text-text-dark-secondary"
                                    disabled=""
                                    value="john.doe@email.com"
                                />
                            </div>
                            <div className="flex flex-col">
                                <p className="text-text-light-primary dark:text-text-dark-primary text-base font-medium leading-normal pb-2">
                                    Blood Group
                                </p>
                                <input
                                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg border border-border-light bg-background-light px-4 py-3 text-base font-normal leading-normal text-text-light-primary placeholder:text-text-light-secondary focus:border-primary focus:outline-0 focus:ring-2 focus:ring-primary/40 dark:border-border-dark dark:bg-background-dark dark:text-text-dark-primary dark:placeholder:text-text-dark-secondary"
                                    value="O+"
                                />
                            </div>
                            <div className="flex flex-col">
                                <p className="text-text-light-primary dark:text-text-dark-primary text-base font-medium leading-normal pb-2">
                                    District
                                </p>
                                <input
                                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg border border-border-light bg-background-light px-4 py-3 text-base font-normal leading-normal text-text-light-primary placeholder:text-text-light-secondary focus:border-primary focus:outline-0 focus:ring-2 focus:ring-primary/40 dark:border-border-dark dark:bg-background-dark dark:text-text-dark-primary dark:placeholder:text-text-dark-secondary"
                                    value="Dhaka"
                                />
                            </div>
                            <div className="flex flex-col md:col-span-2">
                                <p className="text-text-light-primary dark:text-text-dark-primary text-base font-medium leading-normal pb-2">
                                    Upazila
                                </p>
                                <input
                                    className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg border border-border-light bg-background-light px-4 py-3 text-base font-normal leading-normal text-text-light-primary placeholder:text-text-light-secondary focus:border-primary focus:outline-0 focus:ring-2 focus:ring-primary/40 dark:border-border-dark dark:bg-background-dark dark:text-text-dark-primary dark:placeholder:text-text-dark-secondary"
                                    value="Savar"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
