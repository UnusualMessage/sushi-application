import { observer } from "mobx-react-lite";
import { action } from "mobx";

import CartStore from "../../../../../Stores/CartStore";
import Auth from "../../../../../Stores/Auth";

import "../Styles/Item.scss";

const Item = ({ id, category, path, title, text, price, count } : IItemProps) => {
    const addToCart = action(() => {
        CartStore.add({
            id: id,
            title: title,
            path: path,
            text: text,
            price: price,
            category: category,
            count: count,
        });
    })

    return (
        <div className='item'>
            <div className='item-image'>
                <img src={path} alt="" />
            </div>

            <div className='item-description'>
                <span className='item-description-title'>
                    {title}
                </span>

                <div className='item-description-order'>
                    <span className='order-price'>
                        {price}
                    </span>

                    <span className={Auth.isCourier() ? "order-button blocked" : "order-button"} onClick={Auth.isCourier() ? () => {} : addToCart}>
                        Добавить
                    </span>
                </div>
            </div>
        </div>
    );
}

export interface IItemProps {
    id: number,
    category: string,
    title: string,
    text: string,
    price: number,
    count: number,
    path: string
}

export default observer(Item);