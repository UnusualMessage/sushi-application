import { action } from "mobx";
import { observer } from "mobx-react-lite";

import OrdersStore from "../../../../../Stores/OrdersStore";

import "../Styles/OrderHeader.scss";

const OrderHeader = ({ id, date, status, price} : IOrderHeaderProps) => {
    const removeOrder = action(() => {
        OrdersStore.remove(id);
    });

    return (
        <div className="order-header">
            <div className="order-info">
                <span className="order-number">ЗАКАЗ №{id}</span>
                <span className="order-date">от {date}</span>
                <span className="order-status">{status}</span>
                <span className="order-price">{price}</span>
            </div>

            {OrdersStore.canBeDeleted(id) ? <span className="order-remove" onClick={action(removeOrder)}>Удалить из истории</span> : <></>}
        </div>
    );
}

interface IOrderHeaderProps {
    id: number,
    date: string,
    status: string,
    price: number
}

export default observer(OrderHeader);