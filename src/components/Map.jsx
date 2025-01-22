// import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import styles from "../styles/map.module.css";
import {
    MapContainer,
    Marker,
    Popup,
    TileLayer,
    useMap,
    useMapEvents,
} from "react-leaflet";
import { useCities } from "../contexts/citiesContext";
import Emoji from "./Emoji";
import { useNavigate } from "react-router";
import useCurrentCoords from "../hooks/useCurrentCoords";

const newYorkCoords = [40.712776, -74.005974];

function Map() {
    const { cities, city } = useCities();
    const [centerPos, setCenterPos] = useState(newYorkCoords);
    const { position: currPosition } = useCurrentCoords(...newYorkCoords);

    // Change Center
    // Case 1 : User Allow to for his CurrLoacation
    useEffect(
        function () {
            setCenterPos(currPosition);
        },
        [currPosition]
    );

    // Case 2 : User Click in CityItem
    useEffect(
        function () {
            setCenterPos(function (currPos) {
                if (city.position?.lat && city.position?.lng)
                    return [city.position.lat, city.position.lng];
                else return currPos;
            });
        },
        [city]
    );

    return (
        <div className={styles.mapContainer}>
            <MapContainer
                className={styles.map}
                center={centerPos}
                zoom={5}
                scrollWheelZoom={true}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
                />

                <ListenMapClick />
                <ChangeCenter position={centerPos} />

                {cities.map(function (city) {
                    return (
                        <Marker
                            position={[city.position.lat, city.position.lng]}
                            key={city.id}
                        >
                            <Popup>
                                <span>
                                    <Emoji txt={city.emoji} />
                                    &nbsp;&nbsp;&nbsp;
                                    {city.cityName}
                                </span>
                            </Popup>
                        </Marker>
                    );
                })}
            </MapContainer>
        </div>
    );
}

function ListenMapClick() {
    const navigate = useNavigate();
    useMapEvents({
        click: (e) => navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`),
    });
    return null;
}

function ChangeCenter({ position }) {
    const map = useMap();
    map.setView(position);
    return null;
}

export default Map;
