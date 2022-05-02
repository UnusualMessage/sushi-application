import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Nav from "./Nav/Nav";
import { Outlet } from "react-router-dom";

const Wrapper = (props) => {
    return (
        <>
            <Header />
            <Nav />
            <Outlet />
            <Footer />
        </>
    );
}

export default Wrapper;