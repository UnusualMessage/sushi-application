import { Outlet } from "react-router-dom";

import AdminHeader from "./Header/AdminHeader";
import AdminNav from "./Nav/AdminNav";
import Main from "./Main/Main";
import AdminFooter from "./Footer/AdminFooter";

const Wrapper = () => {
    return(
        <>
            <AdminHeader />
            <AdminNav />
            <Main>
                <Outlet />
            </Main>
            <AdminFooter />
        </>
    );
}

export default Wrapper;