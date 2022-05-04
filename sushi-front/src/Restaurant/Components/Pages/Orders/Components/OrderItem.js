import { Link } from "react-router-dom";

import "../Styles/OrderItem.scss";

const OrderItem = (props) => {
    return (
        <div className="order-item">
            <Link className="order-item-image" to={"/"}>
                <img src={props.image} alt="" />
            </Link>

            <div className="order-item-description">
                <div className="order-item-description-text">
                    <span className="order-item-title">{props.title}</span>
                    <span className="order-item-text">{props.text}</span>
                </div>

                <div className="order-item-quantities">
                    <span className="order-item-count">{props.count}</span>
                    <span className="order-item-price">{props.price}</span>
                </div>
            </div>
        </div>
    );
}

export default OrderItem;