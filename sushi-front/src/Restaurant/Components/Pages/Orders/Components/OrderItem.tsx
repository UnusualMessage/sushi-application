import { Link } from "react-router-dom";

import IItem from "../../../../../Interfaces/IItem";
import { CategoryRoute } from "../../../Others/RouteNames";

import "../Styles/OrderItem.scss";

const OrderItem = ({ item } : IOrderItemProps) => {
    const { id, category, price, text, title, count, path } = item;
    
    return (
        <div className="order-item">
            <Link className="order-item-image" to={CategoryRoute + category + "/" + id}>
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
    item: IItem,
}

export default OrderItem;