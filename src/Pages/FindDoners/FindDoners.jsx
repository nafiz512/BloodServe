import React, { useContext, useEffect, useState } from "react";
import { BiCalendar, BiDownArrow, BiSearch } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import useAxios from "../../hooks/useAxios";
import LocationContext from "../../context/LocationContext";
import { useForm, useWatch } from "react-hook-form";
import Loading from "../../Loading/Loading";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import Swal from "sweetalert2";


const FindDoners = () => {
    const axios = useAxios()
    const [donors, setDonors] = useState([]);
    const { districts, upazilas } = useContext(LocationContext);
    const [loading, setLoading] = useState(false)
    const {
        register,
        handleSubmit,
        control,
        setValue,
        // formState: { errors },
    } = useForm();

    const selectedDistrict = useWatch({ control, name: "district" });
    // reset upazila when district changes
    useEffect(() => {
        setValue("upazila", "");
    }, [selectedDistrict, setValue]);

    // filter upazilas by district
    const getUpazilasByDistrict = (districtName) => {
        const district = districts.find(d => d.name === districtName);
        if (!district) return [];

        return upazilas
            .filter(u => u.district_id === district.id)
            .map(u => u.name);
    };

    const handleSearch = async (data) => {
        setLoading(true);

        try {
            const res = await axios.get("/users/donor", {
                params: { ...data },
            });

            setDonors(res.data);
        } catch (err) {
            Swal.fire({
                icon: "error",
                title: err.message,
                text: "Something went wrong!",
            });
        } finally {
            setLoading(false);
        }
    };

    const handleDownloadPDF = () => {
        const doc = new jsPDF();

        doc.setFontSize(18);
        doc.text("Blood Donors List", 14, 15);

        const tableColumn = [
            "Name",
            "Email",
            "Blood Group",
            "District",
            "Upazila",
        ];

        const tableRows = donors.map(donor => [
            donor.name,
            donor.email,
            donor.bloodGroup,
            donor.district,
            donor.upazila,
        ]);

        autoTable(doc, {
            head: [tableColumn],
            body: tableRows,
            startY: 25,
            styles: { fontSize: 10 },
            headStyles: { fillColor: [220, 38, 38] },
        });

        doc.save("donors-list.pdf");
    };
    if (loading) {
        return <Loading></Loading>
    }
    return (
        <div className="container mx-auto py-8">
            {/* <!-- Page Heading --> */}
            <div className="flex flex-wrap justify-between items-center gap-4 mb-8">
                <div className="flex flex-col gap-2">
                    <h1 className="text-text-light dark:text-text-dark text-4xl font-black leading-tight tracking-[-0.033em]">
                        Find a Donor
                    </h1>
                    <p className="text-gray-500 dark:text-gray-400 text-base font-normal leading-normal">
                        Use the filters below to find donors in your area.
                    </p>
                </div>
            </div>
            {/* <!-- Filters Section --> */}
            <div className="mb-8 p-6 bg-card-light dark:bg-card-dark rounded-xl shadow-sm  ">
                <form onSubmit={handleSubmit(handleSearch)} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-end">
                    <label className="flex flex-col w-full">
                        <p className="text-sm font-medium pb-2">
                            Blood Group
                        </p>
                        <select {...register("bloodGroup", { required: true })} className="form-select flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0e1b17] dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-[#d0e7e0] dark:border-gray-600 bg-background-light dark:bg-gray-700/50 focus:border-primary h-12 p-3 text-base font-normal leading-normal">
                            <option disabled>select Blood Group</option>
                            <option>A+</option>
                            <option>A-</option>
                            <option>B+</option>
                            <option>B-</option>
                            <option>AB+</option>
                            <option>AB-</option>
                            <option>O+</option>
                            <option>O-</option>
                        </select>
                    </label>
                    {/* <!-- District --> */}
                    <div>
                        <label className="flex flex-col">
                            <p className="text-[#0e1b17] dark:text-gray-200 text-sm font-medium leading-normal pb-2">
                                District
                            </p>
                            <select  {...register("district", { required: true })} className="form-select flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#0e1b17] dark:text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-[#d0e7e0] dark:border-gray-600 bg-background-light dark:bg-gray-700/50 focus:border-primary h-12 p-3 text-base font-normal leading-normal">
                                <option value="">Select District</option>
                                {districts.map((d) => (
                                    <option key={d.id} value={d.name}>
                                        {d.name}
                                    </option>
                                ))}
                            </select>
                        </label>
                    </div>
                    {/* <!-- Upazila --> */}
                    <div className="">
                        <label className="flex flex-col">
                            <p className="text-[#0e1b17] dark:text-gray-200 text-sm font-medium leading-normal pb-2">
                                Upazila
                            </p>
                            <select  {...register("upazila", { required: true })} className="form-select flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-dark dark:text-gray-400 focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-[#d0e7e0] dark:border-gray-600 bg-background-light/50 dark:bg-gray-800/50 h-12 p-3 text-base font-normal leading-normal ">
                                <option value="">Select Upazila</option>
                                {getUpazilasByDistrict(selectedDistrict).map((u) => (
                                    <option key={u} value={u}>
                                        {u}
                                    </option>
                                ))}
                            </select>
                        </label>
                    </div>
                    <button className="flex w-full lg:w-auto min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] gap-2">
                        <span className="material-symbols-outlined">
                            <BiSearch></BiSearch>
                        </span>
                        <span className="truncate">Search</span>
                    </button>
                </form>
            </div>
            {/* <!-- Results Section Header --> */}
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-lg font-semibold">
                    Showing {donors.length} results
                </h3>
                {donors.length > 0 && <button onClick={handleDownloadPDF}
                    className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary/20 text-primary dark:bg-primary/30 dark:text-white text-sm font-medium gap-2">
                    <span className="material-symbols-outlined text-base">
                        <BiDownArrow></BiDownArrow>
                    </span>
                    <span className="truncate">Download as PDF</span>
                </button>}

            </div>
            {/* <!-- Donor Cards Grid --> */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {/* <!-- Sample Donor Card 1 --> */}
                {
                    donors.map(el => <div key={el._id} className=" dark:bg-card-dark rounded-2xl shadow-md p-3 flex flex-col items-center text-center   ">
                        <img
                            className="size-24 rounded-full mb-4 object-cover"
                            data-alt="Portrait of John Doe"
                            src={el.photoURL}
                        />
                        <div className="flex flex-wrap justify-around w-full">
                            <h4 className="text-lg font-bold text-text-light dark:text-text-dark">
                                {el.name}
                            </h4>
                            <div className="items-center bg-red-100 dark:bg-red-900/40 text-red-700 dark:text-red-300 text-sm font-bold px-3 py-1 rounded-full mb-4">
                                {el.bloodGroup}
                            </div>
                        </div>
                        <h3 className="mb-2">{el.email}</h3>
                        <div className="flex gap-2 items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                            <CiLocationOn></CiLocationOn>
                            <span>{el.district}, {el.upazila} </span>
                        </div>
                        <button className="w-full flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary/20 text-primary dark:bg-primary/30 dark:text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/30 dark:hover:bg-primary/40 transition-colors">
                            <span className="truncate">Contact</span>
                        </button>
                    </div>)
                }
            </div>
            {/* <!-- Empty State Example (comment out or remove when showing results) --> */}
            {donors.length === 0 && (
                <div className="text-center py-20 px-4">
                    <h3 className="text-2xl font-bold mb-2">No Donors Found</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                        No donors match your search criteria.
                    </p>
                    <p className="text-gray-500 dark:text-gray-400">
                        Try adjusting your filters to find more results.
                    </p>
                </div>
            )}
        </div>
    );
};

export default FindDoners;
