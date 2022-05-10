import { useParams } from "react-router-dom";
import { observer } from "mobx-react-lite";

import DeliveryItems from "./DeliveryItems";
import DeliveryHeader from "./DeliveryHeader";
import OrdersStore from "../../../../../Stores/OrdersStore";

import "../Styles/Delivery.scss";

const CurrentDelivery = () => {
    const { id } = useParams();

    // if (CurrentOrder.isEmpty()) {
    //     return;
    // }

    const order = OrdersStore[0];
    const { date, status, price, address, customer, items } = order;

    // const finishOrder = action(() => {
    //     OrdersStore.finish(Number(id));
    //     CurrentOrder.finish();
    // });

    return (
        <div className="delivery">
            <DeliveryHeader id={Number(id)} date={date} status={status} price={price} address={address} customer={customer}>
                <span className="delivery-accept">Завершить</span>
            </DeliveryHeader>

            <DeliveryItems items={items} />
        </div>
    );
}

export default observer(CurrentDelivery);