import { observer } from "mobx-react-lite";
import { Outlet } from "react-router-dom";

import Auth from "../../../Stores/Auth";

const AuthorizedRoute = observer(() => {
    return Auth.isAuth ? <Outlet /> : <></>
});

export default AuthorizedRoute;