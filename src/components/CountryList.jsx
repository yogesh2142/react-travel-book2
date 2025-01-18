import CountryItem from "./CountryItem";
import styles from "../styles/countryList.module.css";
import { useCities } from "../contexts/citiesContext";

function CountryList() {
    // With key-value pair
    const { cities } = useCities();
    const countryListObj = cities.reduce(function (acc, city) {
        const key = city.country;
        acc[key] = { countryName: city.country, flag: city.emoji };
        return acc;
    }, {});

    const countryListArr = Object.values(countryListObj);

    return (
        <div className={styles.countryList}>
            {countryListArr.map(function (country) {
                return (
                    <CountryItem country={country} key={country.couryName} />
                );
            })}
        </div>
    );
}

export default CountryList;
