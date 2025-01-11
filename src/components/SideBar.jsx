import style from "../styles/sideBar.module.css";
import LogoBox from "../components/LogoBox";
import AppNav from "./AppNav";
import CityList from "./CityList";
import Footer from "./Footer";
import City from "./City";
import AddCityForm from "./AddCityForm";

function SideBar() {
    return (
        <div className={style.sideBar}>
            <LogoBox />
            <AppNav />
            <City />
            {/* <CityList />
            <City />
            <AddCityForm /> */}
            <Footer />
        </div>
    );
}

export default SideBar;
