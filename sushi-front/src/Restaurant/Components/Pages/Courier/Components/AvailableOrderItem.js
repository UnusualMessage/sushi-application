import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import "../Styles/AvailableOrderItem.scss";

const AvailableOrderItem = ({ id, category, image, title, text, count, price }) => {
    return (
        <div className="available-order-item">
            <Link className="available-order-item-image" to={"/category/" + category + "/" + id}>
                <img src={image} alt="" />
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

AvailableOrderItem.propTypes = {
    id: PropTypes.number,
    category: PropTypes.string,
    image: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string,
    count: PropTypes.number,
    price: PropTypes.number
}

export default AvailableOrderItem;