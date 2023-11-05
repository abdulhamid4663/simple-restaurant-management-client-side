import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { ToastContainer } from "react-toastify";

const MainLayouts = () => {
    return (
        <div>
            <NavBar />
            <Outlet />
            <Footer />
            <ToastContainer />
        </div>
    );
};

export default MainLayouts;