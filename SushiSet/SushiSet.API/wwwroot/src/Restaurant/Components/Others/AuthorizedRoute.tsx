import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";

import AuthStore from "../../../Stores/AuthStore";

const AuthorizedRoute = () => {
    useEffect(() => {
        AuthStore.checkAuth();
    }, []);

    return(
        AuthStore.isAuthenticated ? <Outlet /> : <></>
    );
}

export default observer(AuthorizedRoute);