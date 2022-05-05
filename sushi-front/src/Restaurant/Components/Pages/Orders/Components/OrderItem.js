import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import "../Styles/OrderItem.scss";

const OrderItem = ({ id, category, image, title, text, count, price }) => {
    return (
        <div className="order-item">
            <Link className="order-item-image" to={"/category/" + category + "/" + id}>
                <img src={image} alt="" />
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

OrderItem.propTypes = {
    id: PropTypes.number,
    category: PropTypes.string,
    image: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string,
    count: PropTypes.number,
    price: PropTypes.number
}

export default OrderItem;