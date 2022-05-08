import { Outlet } from "react-router-dom";

import AdminHeader from "./Header/AdminHeader";
import Footer from "../../../Restaurant/Components/Base/Footer/Footer";
import Main from "../../../Restaurant/Components/Base/Main/Main";
import Nav from "../../../Restaurant/Components/Base/Nav/Nav";

const Wrapper = () => {
    return(
        <>
            <AdminHeader />
            <Nav />
            <Main>
                <Outlet />
            </Main>
            <Footer />
        </>
    );
}

export default Wrapper;