import CityItem from "./CityItem";
import styles from "../styles/cityList.module.css";
import { useCities } from "../contexts/citiesContext";
import Spinner from "./Spinner";

function CityList() {
    const { cities, loading: apiLoading } = useCities();

    if (apiLoading) {
        return <Spinner />;
    }

    return (
        <ul className={styles.cityList}>
            {cities.map(function (city) {
                return <CityItem city={city} key={city.id} />;
            })}
        </ul>
    );
}

export default CityList;
