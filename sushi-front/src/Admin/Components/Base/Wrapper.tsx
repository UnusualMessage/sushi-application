import { Outlet } from "react-router-dom";

import AdminHeader from "./Header/AdminHeader";
import Footer from "../../../Restaurant/Components/Base/Footer/Footer";
import Main from "../../../Restaurant/Components/Base/Main/Main";
import AdminNav from "./Nav/AdminNav";

const Wrapper = () => {
    return(
        <>
            <AdminHeader />
            <AdminNav />
            <Main>
                <Outlet />
            </Main>
            <Footer />
        </>
    );
}

export default Wrapper;