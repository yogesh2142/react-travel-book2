import { useNavigate } from "react-router";
import { useCities } from "../contexts/citiesContext";
import { formatDate } from "../helper";
import styles from "../styles/cityItem.module.css";

function CityItem({ city }) {
    const { cityName, emoji, date, id, position } = city;
    const { handleRemoveCity, handleLoadCity } = useCities();
    const navigate = useNavigate();

    /*

        1. Click to CityItem(6)
        2. load City(6) to Context
        3. navigate to "/app/city/6" ==> City.jsx
        4. City.jsx [ city ] / context

    */

    function navigateToCityRoute() {
        navigate(`/app/city/${id}`);
        handleLoadCity(id);
    }

    function handleDelete(e) {
        e.stopPropagation();
        handleRemoveCity(id);
    }

    return (
        <li onClick={navigateToCityRoute}>
            <div className={styles.cityItem}>
                <span className={styles.emoji}>{emoji}</span>
                <h3 className={styles.cityName}>{cityName}</h3>
                <time className={styles.time}>{formatDate(date)}</time>
                <button onClick={handleDelete} className={styles.deleteBtn}>
                    &times;
                </button>
            </div>
        </li>
    );
}

export default CityItem;
