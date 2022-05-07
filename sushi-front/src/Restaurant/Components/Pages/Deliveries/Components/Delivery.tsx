import IOrder from "../../../Interfaces/IOrder";
import DeliveryItems from "./DeliveryItems";
import DeliveryHeader from "./DeliveryHeader";

import "../Styles/Delivery.scss";

const Delivery = ({ order } : IDeliveryProps) => {
    const { id, date, status, price, address, customer, items } = order;

    return (
        <div className="delivery">
            <DeliveryHeader id={id} date={date} status={status} price={price} address={address} customer={customer}/>
            <DeliveryItems items={items} />
        </div>
    );
}

interface IDeliveryProps {
    order: IOrder
}

export default Delivery;