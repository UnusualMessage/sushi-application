import { observer } from "mobx-react-lite";

import IOrder from "../../../../Interfaces/IOrder";
import CurrentSorting from "../../../../Stores/CurrentSorting";
import OrdersStore from "../../../../Stores/OrdersStore";
import OrdersList from "./Components/OrdersList";
import OrdersTitle from "./Components/OrdersTitle";

const Orders = () => {
    const isAscending : boolean = CurrentSorting.ordersAscending;
    const orders : IOrder[] = OrdersStore.getSorted(isAscending);

    return (
        <>
            <OrdersTitle />
            <OrdersList orders={orders} />
        </>
    );
}

export default observer(Orders);