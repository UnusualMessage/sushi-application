import { observer } from "mobx-react-lite";
import PropTypes from "prop-types";

import OrdersStore from "../../../Store/OrdersStore";
import OrderItems from "./OrderItems";

import "../Styles/Order.scss";
import { action } from "mobx";

const Order = ({ id, date, status, price }) => {
    const onOrderRemove = (e) => {
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

                <span className="order-remove" onClick={action(onOrderRemove)}>Удалить</span>
            </div>

            <OrderItems id={id}/>
        </div>
    );
}

Order.propTypes = {
    id: PropTypes.number,
    date: PropTypes.string,
    status: PropTypes.string,
    price: PropTypes.number
}

export default observer(Order);
