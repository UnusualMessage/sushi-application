import { action } from "mobx";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";

import DeliveryItems from "./DeliveryItems";
import DeliveryHeader from "./DeliveryHeader";
import OrdersStore from "../../../Store/OrdersStore";
import CurrentOrder from "../../../Store/CurrentOrder";
import { CourierRoute } from "../../../Others/RouteNames";

import "../Styles/Delivery.scss";

const Delivery = ({ id }) => {
    const navigate = useNavigate();
    const order = OrdersStore.getById(id);
    const { date, status, price, address, customer, items } = order;

    const acceptOrder = action(() => {
        const acceptedOrder = OrdersStore.accept(id);
        CurrentOrder.accept(acceptedOrder);
        navigate(CourierRoute + CurrentOrder.order.id);
    });

    return (
        <div className="delivery">
            <DeliveryHeader id={id} date={date} status={status} price={price} address={address} customer={customer}>
                <span className="delivery-accept" onClick={acceptOrder}>Принять</span>
            </DeliveryHeader>
            
            <DeliveryItems items={items} />
        </div>
    );
}

export default observer(Delivery);