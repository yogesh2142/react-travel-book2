import style from "../styles/spinner.module.css";

function Spinner() {
    return (
        <div className={style.loaderBox}>
            <div className={style.loader}></div>
        </div>
    );
}

export default Spinner;
