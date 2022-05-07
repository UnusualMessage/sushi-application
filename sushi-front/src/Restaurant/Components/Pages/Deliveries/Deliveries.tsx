import { observer } from "mobx-react-lite";

import IOrder from "../../Interfaces/IOrder";
import OrdersStore from "../../Store/OrdersStore";
import DeliveriesList from "./Components/DeliveriesList";
import DeliveriesTitle from "./Components/DeliveriesTitle";

const Deliveries = () => {
    const orders : IOrder[] = OrdersStore.getByCity();

    return (
        <>
            <DeliveriesTitle />
            <DeliveriesList orders={orders}/>
        </>
    );
}

export default observer(Deliveries);