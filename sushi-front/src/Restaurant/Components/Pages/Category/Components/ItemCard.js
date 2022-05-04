import { Link } from "react-router-dom";

import CartStore from "../../../Store/CartStore";

import "../Styles/ItemCard.scss";

const ItemCard = ({ item }) => {
    const onClick = (e) => {
        e.preventDefault();
        CartStore.add(item);
    }

    return (
        <div className='item-card'>
            <Link className='card-image' to={"/category/" + item.category + "/" + item.id}>
                <img src={item.path} alt="" />
            </Link>

            <div className='card-description'>
                <span className='card-description-title'>
                    {item.title}
                </span>

                <div className='card-description-order'>
                    <span className='order-price'>
                        {item.price}
                    </span>

                    <span className='order-button' onClick={onClick}>
                        Добавить
                    </span>
                </div>
            </div>
        </div>
    );
}

export default ItemCard;