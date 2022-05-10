import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";

import AuthStore from "../../../Stores/AuthStore";

const CourierRoute = observer(() => {
    useEffect(() => {
        AuthStore.checkRole("Courier");
    }, []);

    return AuthStore.isAuthorized ? <Outlet /> : <></>
});

export default CourierRoute;