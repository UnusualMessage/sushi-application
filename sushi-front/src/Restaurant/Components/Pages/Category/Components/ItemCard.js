import { Link } from "react-router-dom";
import Cart from "../../../Store/Cart";

import "../Styles/ItemCard.scss";

const ItemCard = (props) => {
    const onClick = (e) => {
        e.preventDefault();
        Cart.add(props);
    }

    return (
        <div className='item-card'>
            <Link className='card-image' to={"/category/" + props.category + "/" + props.id}>
                <img src={props.path} alt="" />
            </Link>

            <div className='card-description'>
                <span className='card-description-title'>
                    {props.title}
                </span>

                <div className='card-description-order'>
                    <span className='order-price'>
                        {props.price}
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