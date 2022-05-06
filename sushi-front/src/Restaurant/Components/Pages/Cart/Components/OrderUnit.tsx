import { Link } from 'react-router-dom';
import { observer } from "mobx-react-lite";
import { action } from 'mobx';

import CartStore from "../../../Store/CartStore";
import { CategoryRoute } from '../../../Others/ClientRoutes';
import IItem from '../../../Interfaces/IItem';

import "../Styles/OrderUnit.scss";

const OrderUnit = ({ item } : IOrderUnitProps) => {
    const { id, category, text, title, price, path } = item;

    const onRemove = action(() => {
        CartStore.remove(id);
    });

    const onMinus = action(() => {
        CartStore.minusCount(id);
    });

    const onPlus = action(() => {
        CartStore.plusCount(id);
    });
    
    return (
        <div className="cart-order-unit">
            <Link className="order-unit-image" to={"/" + CategoryRoute + "/" + category + "/" + id}>
                <img src={path} alt="" />
            </Link>

            <div className="order-unit-description">
                <div className="order-unit-description-text-container">
                    <span className="order-unit-description-title">{title}</span>
                    <span className="order-unit-description-text">{text}</span>
                </div>

                <div className="order-unit-buttons">
                    <div className="order-unit-count">
                        <span className="order-unit-count-minus" onClick={onMinus}>-</span>
                        <span className="order-unit-count-current">{CartStore.getCount(id)}</span>
                        <span className="order-unit-count-plus" onClick={onPlus}>+</span>
                    </div>

                    <div className="order-unit-price">
                        <span className="order-unit-count-price-text">{price}</span>
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
}

interface IOrderUnitProps {
    item: IItem
}

export default observer(OrderUnit);