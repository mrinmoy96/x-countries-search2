import React, { useEffect, useState } from "react";
import CountryCard from "./CountryCard";

function Countries() {
    const API_ENDPOINT = "https://xcountries-backend.azurewebsites.net/all";

    const [flags, setFlags] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        fetch(API_ENDPOINT)
            .then(res => res.json())
            .then(data => setFlags(data))
            .catch((error) => console.error("Error fetching data:", error));
    }, []);

    // Filter countries safely
    const filteredFlags = flags.filter(flag => {
        const countryName = flag?.name?.toLowerCase() || "";  // Ensure it's a string
        const countryAbbr = flag?.abbr?.toLowerCase() || "";  // Ensure it's a string
        return countryName.includes(searchTerm.toLowerCase()) || 
               countryAbbr.includes(searchTerm.toLowerCase());
    });

    return (
        <div style={{ textAlign: "center", padding: "20px" }}>
            {/* Search Input , here how input connect with api*/}
            <input 
                type="text" 
                placeholder="Search for a country..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ marginBottom: "10px", padding: "5px", width: "500px",display: "flex", justifyContent: "center"}}
            />

            {/* Country Flags Display */}
            <div style={{ display: "flex", flexWrap: "wrap" }}>
                {
                    filteredFlags.map((flag, index) => (
                        <CountryCard 
                            key={index} 
                            name={flag.name || "Unknown"} 
                            flagImg={flag.flag || ""} 
                            flagAltText={flag.abbr || "No Abbr"} 
                        />
                    ))
                }
            </div>
        </div>
    );
}

export default Countries;
