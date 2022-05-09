import { observer } from "mobx-react-lite";
import { Outlet } from "react-router-dom";

import DeliveriesTitle from "./Components/DeliveriesTitle";

const Deliveries = () => {

    return (
        <>
            <DeliveriesTitle />
            <Outlet/>
        </>
    );
}

export default observer(Deliveries);