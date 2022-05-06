import { observer } from "mobx-react-lite";

import IOrder from "../../Interfaces/IOrder";
import CurrentSorting from "../../Store/CurrentSorting";
import OrdersStore from "../../Store/OrdersStore";
import Order from "./Components/Order";
import OrdersTitle from "./Components/OrdersTitle";

import "./Orders.scss";

const Orders = () => {
    const isAscending : boolean = CurrentSorting.ordersAscending;
    const orders : IOrder[] = OrdersStore.getSorted(isAscending);

    return (
        <>
            <OrdersTitle />

            <section className="main-orders">
                {
                    orders?.map((order : IOrder) => {
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