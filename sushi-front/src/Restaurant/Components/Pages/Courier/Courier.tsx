import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";

import CurrentCity from "../../Store/CurrentCity";
import OrdersStore from "../../Store/OrdersStore";
import AvailableOrder from "./Components/AvailableOrder";
import AvailableOrderToolbar from "./Components/AvailableOrderToolbar";

import "./Courier.scss";

const Courier = () => {
    const currentCity : string = CurrentCity.city;
    const [order, setOrder] = useState(OrdersStore.getRandomOrder());

    useEffect(() => {
        setOrder(OrdersStore.getRandomOrder());
    }, [currentCity])

    return(
        <section className="available-orders">
            <AvailableOrder id={order?.id} date={order?.date} status={order?.status} price={order?.price} items={order?.items}/>
            <AvailableOrderToolbar id={order?.id} setOrder={setOrder}/>
        </section>
    );
}

export default observer(Courier);