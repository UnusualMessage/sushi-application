import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";

import AuthStore from "../../../Stores/AuthStore";

const CustomerRoute = observer(() => {
    useEffect(() => {
        AuthStore.checkRole("Customer");
    }, []);

    return AuthStore.isAuthorized ? <Outlet /> : <></>
});

export default CustomerRoute;