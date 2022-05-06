import { Outlet } from "react-router-dom";

import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Nav from "./Nav/Nav";
import Main from "./Main/Main";

const Wrapper = () => {
    return (
        <>
            <Header />
            <Nav />
            <Main>
                <Outlet />
            </Main>

            <Footer />
        </>
    );
}

export default Wrapper;