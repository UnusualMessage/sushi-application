import { useState } from "react";
import CartPrice from "../../../Store/CartPrice";

import "../Styles/ShoppingCard.scss";
import ShoppingCardModal from "./ShoppingCardModal";

const ShoppingCard = (props) => {
    const onMouseDown = (e) => {
        e.preventDefault();
        CartPrice.add(props.price);
    }

    const onTitleDown = (e) => {
        e.preventDefault();
        setModalActive(!modalActive);
    }

    const [modalActive, setModalActive] = useState(false);

    return (
        <>
            <div className='shopping-card'>
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

                        <div className='order-button' onMouseDown={onMouseDown}>
                            <span className='order-button-text'>
                                Добавить
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            <ShoppingCardModal active={modalActive} setActive={setModalActive}>
                
            </ShoppingCardModal>
        </>

    );
}

export default ShoppingCard;