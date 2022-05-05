import { Link } from 'react-router-dom';
import { observer } from "mobx-react-lite";

import CartStore from "../../../Store/CartStore";
import { CategoryRoute } from '../../../Others/ClientRoutes';

import "../Styles/CartOrderUnit.scss";

const CartOrderUnit = observer((props) => {
    const onRemove = (e) => {
        e.preventDefault();
        CartStore.remove(props.id);
    }

    const onMinus = (e) => {
        e.preventDefault();
        CartStore.minusCount(props.id);
    }

    const onPlus = (e) => {
        e.preventDefault();
        CartStore.plusCount(props.id);
    }

    return (
        <div className="cart-order-unit">
            <Link className="order-unit-image" to={"/" + CategoryRoute + "/" + props.category + "/" + props.id}>
                <img src={props.path} alt="" />
            </Link>

            <div className="order-unit-description">
                <div className="order-unit-description-text-container">
                    <span className="order-unit-description-title">{props.title}</span>
                    <span className="order-unit-description-text">{props.text}</span>
                </div>

                <div className="order-unit-buttons">
                    <div className="order-unit-count">
                        <span className="order-unit-count-minus" onClick={onMinus}>-</span>
                        <span className="order-unit-count-current">{CartStore.getCount(props.id)}</span>
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