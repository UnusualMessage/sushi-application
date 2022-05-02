import Cart from "../../../Store/Cart";
import { useNavigate } from 'react-router-dom';

import "../Styles/CartOrderUnit.scss";
import { observer } from "mobx-react-lite";

const CartOrderUnit = observer((props) => {
    const navigate = useNavigate();

    const onRemove = (e) => {
        e.preventDefault();
        Cart.remove(props.id);

        if (Cart.isEmpty()) {
            navigate("/");
        } 
    }

    const onMinus = (e) => {
        e.preventDefault();
        Cart.minusCount(props.id);
    }

    const onPlus = (e) => {
        e.preventDefault();
        Cart.plusCount(props.id);
    }

    return (
        <div className="cart-order-unit">
            <div className="order-unit-image">
                <img src={props.image} alt="" />
            </div>

            <div className="order-unit-description">
                <div className="order-unit-description-text-container">
                    <span className="order-unit-description-title">{props.title}</span>
                    <span className="order-unit-description-text">Задача организации, в особенности же сложившаяся структура организации создаёт предпосылки качественно новых шагов для всесторонне сбалансированных нововведений. </span>
                </div>

                <div className="order-unit-buttons">
                    <div className="order-unit-count">
                        <span className="order-unit-count-minus" onClick={onMinus}>-</span>
                        <span className="order-unit-count-current">{Cart.getCount(props.id)}</span>
                        <span className="order-unit-count-plus" onClick={onPlus}>+</span>
                    </div>

                    <div className="order-unit-price">
                        <span className="order-unit-count-price-text">{props.price}</span>
                    </div>

                    <div className="order-unit-remove-button" onClick={onRemove}>
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <rect width="24" height="24" transform="rotate(180 12 12)" opacity="0" />
                            <path d="M13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4.29-4.3 4.29 4.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
});

export default CartOrderUnit;