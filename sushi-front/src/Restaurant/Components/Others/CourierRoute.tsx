import { observer } from "mobx-react-lite";
import { Outlet } from "react-router-dom";

import Auth from "../Store/Auth";

const CourierRoute = observer(() => {
    return Auth.isCourier() ? <Outlet /> : <></>
});

export default CourierRoute;