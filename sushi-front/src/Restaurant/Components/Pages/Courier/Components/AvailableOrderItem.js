import { Link } from "react-router-dom";

import "../Styles/AvailableOrderItem.scss";

const AvailableOrderItem = ({ item }) => {
    return (
        <div className="available-order-item">
            <Link className="available-order-item-image" to={"/category/" + item.category + "/" + item.id}>
                <img src={item.path} alt="" />
            </Link>

            <div className="available-order-item-description">
                <div className="available-order-item-description-text">
                    <span className="available-order-item-title">{item.title}</span>
                    <span className="available-order-item-text">{item.text}</span>
                </div>

                <div className="available-order-item-quantities">
                    <span className="available-order-item-count">{item.count}</span>
                    <span className="available-order-item-price">{item.price}</span>
                </div>
            </div>
        </div>
    );
}

export default AvailableOrderItem;