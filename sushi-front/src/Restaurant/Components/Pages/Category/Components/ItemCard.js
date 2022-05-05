import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { CategoryRoute } from "../../../Others/ClientRoutes";
import CartStore from "../../../Store/CartStore";

import "../Styles/ItemCard.scss";

const ItemCard = ({ id, category, image, title, text, price, count }) => {
    const onClick = (e) => {
        e.preventDefault();

        CartStore.add({
            "id": id,
            "title": title,
            "path": image,
            "text": text,
            "price": price,
            "category": category,
            "count": count,
        });
    }

    return (
        <div className='item-card'>
            <Link className='card-image' to={"/" + CategoryRoute + "/" + category + "/" + id}>
                <img src={image} alt="" />
            </Link>

            <div className='card-description'>
                <span className='card-description-title'>
                    {title}
                </span>

                <div className='card-description-order'>
                    <span className='order-price'>
                        {price}
                    </span>

                    <span className='order-button' onClick={onClick}>
                        Добавить
                    </span>
                </div>
            </div>
        </div>
    );
}

ItemCard.propTypes = {
    id: PropTypes.number,
    category: PropTypes.string,
    image: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string,
    price: PropTypes.number,
    count: PropTypes.number
}

export default ItemCard;