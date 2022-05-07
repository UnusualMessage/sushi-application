import OrderItems from "./OrderItems";
import OrderHeader from "./OrderHeader";
import IOrder from "../../../Interfaces/IOrder";

import "../Styles/Order.scss";

const Order = ({ order } : IOrderProps) => {
    const { id, date, status, price } = order;

    return(
        <div className="order">
            <OrderHeader id={id} date={date} status={status} price={price}/>
            <OrderItems id={id}/>
        </div>
    );
}

interface IOrderProps {
    order: IOrder
}

export default Order;
