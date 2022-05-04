import { Link } from "react-router-dom";

import "../Styles/OrderItem.scss";

const OrderItem = ({ item }) => {
    return (
        <div className="order-item">
            <Link className="order-item-image" to={"/category/" + item.category + "/" + item.id}>
                <img src={item.path} alt="" />
            </Link>

            <div className="order-item-description">
                <div className="order-item-description-text">
                    <span className="order-item-title">{item.title}</span>
                    <span className="order-item-text">{item.text}</span>
                </div>

                <div className="order-item-quantities">
                    <span className="order-item-count">{item.count}</span>
                    <span className="order-item-price">{item.price}</span>
                </div>
            </div>
        </div>
    );
}

export default OrderItem;