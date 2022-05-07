import { observer } from "mobx-react-lite";
import { Outlet } from "react-router-dom";

import Auth from "../Store/Auth";

const CustomerRoute = observer(() => {
    return Auth.isCustomer() || Auth.isGuest() ? <Outlet /> : <></>
});

export default CustomerRoute;