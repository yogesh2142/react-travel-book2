import CityItem from "./CityItem";
import styles from "../styles/cityList.module.css";

const tempCities = [
    {
        cityName: "Devdaha",
        country: "Nepal",
        emoji: "🇳🇵",
        date: "2024-10-26T04:53:08.130Z",
        notes: "This is a note about Devdaha",
        position: {
            lat: "27.60323689456203",
            lng: "83.55926513671876",
        },
        id: 3,
    },
    {
        cityName: "Boalmari",
        country: "Bangladesh",
        emoji: "🇧🇩",
        date: "2024-10-26T04:53:34.170Z",
        notes: "This is a note about Boalmari",
        position: {
            lat: "23.36242859340884",
            lng: "89.747314453125",
        },
        id: 4,
    },
    {
        cityName: "Athang Gewog",
        country: "Bhutan",
        emoji: "🇧🇹",
        date: "2024-10-26T04:54:54.493Z",
        notes: "This is a note about Athang Gewog",
        position: {
            lat: "27.293689224852407",
            lng: "90.24169921875001",
        },
        id: 7,
    },
    {
        cityName: "Raipur",
        country: "India",
        emoji: "🇮🇳",
        date: "2024-11-06T08:43:16.000Z",
        notes: "This is all about Raipur",
        position: {
            lat: "21.23673002019399",
            lng: "81.63459777832033",
        },
        id: 11,
    },
    {
        cityName: "Burao",
        country: "Somalia",
        emoji: "🇸🇴",
        date: "2024-08-20T16:47:10.000Z",
        notes: "This is all about Burao, lskjlakjflskj j...",
        position: {
            lat: "9.060058316542385",
            lng: "45.97503662109375",
        },
        id: 13,
    },
    {
        cityName: "Jeffrey City",
        country: "United States of America (the)",
        emoji: "🇺🇸",
        date: "2025-01-11T05:46:51.036Z",
        notes: "This is all about Jeffrey City",
        position: {
            lat: "42.85456125392396",
            lng: "-107.8490063777907",
        },
        id: 14,
    },
];

function CityList() {
    return (
        <ul className={styles.cityList}>
            {tempCities.map(function (city) {
                return <CityItem city={city} key={city.id} />;
            })}
        </ul>
    );
}

export default CityList;
