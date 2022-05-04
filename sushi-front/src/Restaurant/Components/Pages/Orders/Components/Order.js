import "../Styles/Order.scss";
import OrderItems from "./OrderItems";

const Order = ({ id, date, status, price }) => {
    return(
        <div className="order">
            <div className="order-header">
                <div className="order-info">
                    <span className="order-number">ЗАКАЗ №{id}</span>
                    <span className="order-date">от {date}</span>
                    <span className="order-status">{status}</span>
                    <span className="order-price">{price}</span>
                </div>

                <span className="order-remove">Удалить</span>
            </div>

            <OrderItems id={id}/>
        </div>
    );
}

export default Order;
