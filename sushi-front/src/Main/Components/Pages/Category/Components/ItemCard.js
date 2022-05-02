import { useState } from "react";
import Cart from "../../../Store/Cart";

import "../Styles/ItemCard.scss";

const ItemCard = (props) => {
    const onClick = (e) => {
        e.preventDefault();
        Cart.add(props);
    }

    const onTitleDown = (e) => {
        e.preventDefault();
        setModalActive(!modalActive);
    }

    const [modalActive, setModalActive] = useState(false);

    return (
        <div className='item-card'>
            <div className='card-image'>
                <img src={props.imageSource} alt="" />
            </div>

            <div className='card-description'>
                <span className='card-description-title' onMouseDown={onTitleDown}>
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