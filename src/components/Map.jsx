import { useNavigate } from "react-router"
import styles from "../styles/map.module.css"
443328
function Map() {
    const Navigate = useNavigate();
    const latVal = "34.47443328617457";
    const lngVal = "103.36212158203125";
    function handleClick() {
        return Navigate(`form/lat${latVal}&lngVal=${lngVal}`);
    }
    return (
        <div className={styles.map}>
           <button onClick={handleClick}>click here</button>
        </div>
    )
}

export default Map
