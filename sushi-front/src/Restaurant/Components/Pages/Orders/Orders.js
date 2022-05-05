import { observer } from "mobx-react-lite";
import CurrentSorting from "../../Store/CurrentSorting";

import OrdersStore from "../../Store/OrdersStore";
import Order from "./Components/Order";
import OrdersTitle from "./Components/OrdersTitle";

import "./Orders.scss";

const Orders = () => {
    const currentSorting = CurrentSorting.ordersAscending;
    const orders = OrdersStore.getSorted(currentSorting);

    return (
        <>
            <OrdersTitle />

            <section className="main-orders">
                {
                    orders?.map(order => {
                        return <Order
                            key={order.id}

                            id={order.id}
                            date={order.date}
                            status={order.status}
                            price={order.price} />
                    })
                }
            </section>
        </>


    );
}

export default observer(Orders);