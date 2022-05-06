import { Link } from "react-router-dom";

import "../Styles/OrderItem.scss";

const OrderItem = ({ id, category, path, title, text, count, price } : IOrderItemProps) => {
    return (
        <div className="order-item">
            <Link className="order-item-image" to={"/category/" + category + "/" + id}>
                <img src={path} alt="" />
            </Link>

            <div className="order-item-description">
                <div className="order-item-description-text">
                    <span className="order-item-title">{title}</span>
                    <span className="order-item-text">{text}</span>
                </div>

                <div className="order-item-quantities">
                    <span className="order-item-count">{count}</span>
                    <span className="order-item-price">{price}</span>
                </div>
            </div>
        </div>
    );
}

interface IOrderItemProps {
    id: number,
    category: string,
    path: string,
    title: string,
    text: string,
    count: number,
    price: number
}

export default OrderItem;