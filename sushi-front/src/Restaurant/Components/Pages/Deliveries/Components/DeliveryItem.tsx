import { Link } from "react-router-dom";

import IItem from "../../../Interfaces/IItem";
import { CategoryRoute } from "../../../Others/RouteNames";

import "../Styles/DeliveryItem.scss";

const DeliveryItem = ({ item } : IDeliveryItemProps) => {
    const { id, category, path, title, text, count, price } = item;

    return (
        <div className="delivery-item">
            <Link className="delivery-item-image" to={CategoryRoute + category + "/" + id}>
                <img src={path} alt="" />
            </Link>

            <div className="delivery-item-description">
                <div className="delivery-item-description-text">
                    <span className="delivery-item-title">{title}</span>
                    <span className="delivery-item-text">{text}</span>
                </div>

                <div className="delivery-item-quantities">
                    <span className="delivery-item-count">{count}</span>
                    <span className="delivery-item-price">{price}</span>
                </div>
            </div>
        </div>
    );
}

interface IDeliveryItemProps {
    item: IItem
}

export default DeliveryItem;