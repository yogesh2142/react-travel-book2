import style from "../styles/sideBar.module.css";
import LogoBox from "../components/LogoBox";
import AppNav from "./AppNav";
import CityList from "./CityList";
import Footer from "./Footer";

function SideBar() {
    return (
        <div className={style.sideBar}>
            <LogoBox />
            <AppNav />
            <CityList />
            <Footer />
        </div>
    );
}

export default SideBar;
