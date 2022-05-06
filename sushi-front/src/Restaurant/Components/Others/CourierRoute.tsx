import { observer } from "mobx-react-lite";
import { Outlet } from "react-router-dom";

import Auth from "../Store/Auth";

const CourierRoute = observer(() => {
    return Auth.isAuth ? <Outlet /> : <></>
});

export default CourierRoute;