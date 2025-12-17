import React, { useEffect, useState } from 'react';
import LocationContext from './LocationContext';
import axios from 'axios';

const LocationProvider = ({ children }) => {
    const [districts, setDistricts] = useState([]);
    const [upazilas, setUpazilas] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadData = async () => {
            try {
                const [districtRes, upazilaRes] = await Promise.all([
                    axios.get("/district.json"),
                    axios.get("/upozila.json"),
                ]);

                setDistricts(districtRes.data);
                setUpazilas(upazilaRes.data);
            } catch (error) {
                console.error("Location data load failed", error);
            } finally {
                setLoading(false);
            }
        };

        loadData();
    }, []);

    const info = { loading, districts, upazilas }
    return (
        <LocationContext value={info}>{children}</LocationContext>
    );
};

export default LocationProvider;