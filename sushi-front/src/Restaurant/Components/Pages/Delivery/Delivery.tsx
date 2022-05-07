import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";

import CurrentCity from "../../Store/CurrentCity";
import OrdersStore from "../../Store/OrdersStore";
import DeliveryOrder from "./Components/DeliveryOrder";

import "./Delivery.scss";

const Delivery = () => {
    const currentCity: string = CurrentCity.city;
    const [order, setOrder] = useState(OrdersStore.getRandomOrder());
    const isEmpty = OrdersStore.isEmpty();

    useEffect(() => {
        setOrder(OrdersStore.getRandomOrder());
    }, [currentCity])

    return (
        isEmpty
        ?
            <></>
        :         
            <section className="available-orders">
                <DeliveryOrder id={order?.id} date={order?.date} status={order?.status} price={order?.price} items={order?.items} />
            </section>
    );
}

export default observer(Delivery);