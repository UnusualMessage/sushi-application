import { observer } from "mobx-react-lite";
import { action } from "mobx";

import OrdersStore from "../../../Store/OrdersStore";
import OrderItems from "./OrderItems";

import "../Styles/Order.scss";

const Order = ({ id, date, status, price } : IOrderProps) => {
    const onOrderRemove = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        OrdersStore.remove(id);
    }

    return(
        <div className="order">
            <div className="order-header">
                <div className="order-info">
                    <span className="order-number">ЗАКАЗ №{id}</span>
                    <span className="order-date">от {date}</span>
                    <span className="order-status">{status}</span>
                    <span className="order-price">{price}</span>
                </div>

                {OrdersStore.canBeDeleted(id) ? <span className="order-remove" onClick={action(onOrderRemove)}>Удалить из истории</span> : <></>}
            </div>

            <OrderItems id={id}/>
        </div>
    );
}

interface IOrderProps {
    id: number,
    date: string,
    status: string,
    price: number,
}

export default observer(Order);
