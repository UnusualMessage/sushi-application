import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";
import { action } from "mobx";

import { CategoryRoute } from "../../../Others/ClientRoutes";
import CartStore from "../../../Store/CartStore";

import "../Styles/ItemCard.scss";
import Auth from "../../../Store/Auth";

const ItemCard = ({ id, category, path, title, text, price, count } : IItemCardProps) => {
    const onClick = action(() => {
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
        <div className='item-card'>
            <Link className='card-image' to={"/" + CategoryRoute + "/" + category + "/" + id}>
                <img src={path} alt="" />
            </Link>

            <div className='card-description'>
                <span className='card-description-title'>
                    {title}
                </span>

                <div className='card-description-order'>
                    <span className='order-price'>
                        {price}
                    </span>

                    <span className='order-button' onClick={Auth.isCourier() ? ()=>{} : onClick}>
                        Добавить
                    </span>
                </div>
            </div>
        </div>
    );
}

export interface IItemCardProps {
    id: number,
    category: string,
    title: string,
    text: string,
    price: number,
    count: number,
    path: string
}

export default observer(ItemCard);