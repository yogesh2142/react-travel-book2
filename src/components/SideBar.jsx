import style from "../styles/sideBar.module.css";
import LogoBox from "../components/LogoBox";
import AppNav from "./AppNav";
import { Outlet } from "react-router";
import Footer from "./Footer";

function SideBar() {
    return (
        <div className={style.sideBar}>
            <LogoBox />
            <AppNav />
            <Outlet />
            <Footer />
        </div>
    );
}

export default SideBar;
