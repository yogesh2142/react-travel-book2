import styles from "../styles/addCityForm.module.css";
import BackButton from "./BackButton";
import useQueryParams from "../hooks/useQueryParams";
import Message from "./Message";
import { useEffect, useState } from "react";
import { useCities } from "../contexts/citiesContext";
import { formatDateForInputValue, getFlagEmoji } from "../helper";

const BASE_URL = `https://api.bigdatacloud.net/data/reverse-geocode-client`;

function AddCityForm() {
    const { handleAddCity } = useCities();
    const [lat, lng] = useQueryParams("lat", "lng");

    const [cityDetails, setCityDetails] = useState({
        date: new Date().toISOString(),
        position: {
            lat: lat,
            lng: lng,
        },
    });

    useEffect(
        function () {
            async function fetchCityDetails() {
                const url = `${BASE_URL}?latitude=${lat}&longitude=${lng}`;
                const respose = await fetch(url);
                const data = await respose.json();

                setCityDetails(function (cityDetails) {
                    const updatedCityDetails = {
                        ...cityDetails,
                        cityName: data.city || data.locality,
                        country: data.countryName,
                        emoji: getFlagEmoji(data.countryCode),
                        notes: `A note about ${data.city || data.locality}`,
                    };
                    return updatedCityDetails;
                });
            }
            if (lat && lng) fetchCityDetails();
        },
        [lat, lng]
    );

    function handleDateChange(e) {
        setCityDetails(function (citiyDetails) {
            return {
                ...citiyDetails,
                date: new Date(e.target.value).toISOString(),
            };
        });
    }
    function handleNotesChange(e) {
        setCityDetails(function (cityDetails) {
            return { ...cityDetails, notes: e.target.value };
        });
    }

    if (!lat || !lng) {
        return <Message emoji="😯" txt="Oops! No city found!" />;
    }

    return (
        <div className={styles.addCityForm}>
            <form>
                <div>
                    <label>City name</label>
                    <input
                        type="text"
                        defaultValue={cityDetails.cityName}
                        disabled={true}
                    />
                </div>

                <div>
                    <label>When did you go to #cityName</label>
                    <input
                        type="date"
                        value={formatDateForInputValue(cityDetails.date)}
                        onChange={handleDateChange}
                    />
                </div>

                <div>
                    <label>How was your experience !</label>
                    <textarea
                        rows="4"
                        cols="50"
                        value={cityDetails.notes}
                        onChange={handleNotesChange}
                    />
                </div>

                <div className={styles.buttonBox}>
                    <button type="primary">Add</button>
                    <BackButton />
                </div>
            </form>
        </div>
    );
}

export default AddCityForm;
