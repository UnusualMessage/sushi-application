import { Link } from "react-router-dom";

import "../Styles/AvailableOrderItem.scss";

const AvailableOrderItem = ({ id, category, path, title, text, count, price } : IAvailableOrderItemProps) => {
    return (
        <div className="available-order-item">
            <Link className="available-order-item-image" to={"/category/" + category + "/" + id}>
                <img src={path} alt="" />
            </Link>

            <div className="available-order-item-description">
                <div className="available-order-item-description-text">
                    <span className="available-order-item-title">{title}</span>
                    <span className="available-order-item-text">{text}</span>
                </div>

                <div className="available-order-item-quantities">
                    <span className="available-order-item-count">{count}</span>
                    <span className="available-order-item-price">{price}</span>
                </div>
            </div>
        </div>
    );
}

interface IAvailableOrderItemProps {
    id: number,
    category: string,
    path: string,
    title: string,
    text: string,
    count: number,
    price: number
}

export default AvailableOrderItem;