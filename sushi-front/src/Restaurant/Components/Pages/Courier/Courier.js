import { observer } from "mobx-react-lite";
import { useState } from "react";

import OrdersStore from "../../Store/OrdersStore";
import AvailableOrder from "./Components/AvailableOrder";
import AvailableOrderToolbar from "./Components/AvailableOrderToolbar";

import "./Courier.scss";

const Courier = observer(() => {
    const [order, setOrder] = useState(OrdersStore.getRandomOrder());

    return(
        <section className="available-orders">
            <AvailableOrder id={order.id} date={order.date} status={order.status} price={order.price} items={order.items}/>
            <AvailableOrderToolbar id={order.id} setOrder={setOrder}/>
        </section>
    );
});

export default Courier;