import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";
import { action } from "mobx";
import { useEffect } from "react";

import { CategoryRoute } from "../../../Others/RouteNames";
import IItem from "../../../../../Interfaces/IItem";
import CartUnitsStore from "../../../../../Stores/CartUnitsStore";
import AuthStore from "../../../../../Stores/AuthStore";

import "../Styles/ItemCard.scss";

const ItemCard = ({ item } : IItemCardProps) => {

    useEffect(() => {
        AuthStore.checkAuth();
    }, []);

    const addToCart = action(() => {
        const currentCount = CartUnitsStore.getNewCount(item.id);

        if (currentCount) {
            CartUnitsStore.editCartUnit({
                id: CartUnitsStore.getIdByItemId(item.id),
                count: currentCount + 1,
            });
        } else {
            CartUnitsStore.createCartUnit({
                itemId: item.id,
                userId: AuthStore.getId(),
                count: 1,
            });
        }
    });

    const { id, category, name, picturePath, price } = item;

    return (
        <div className='item-card'>
            <Link className='card-image' to={CategoryRoute + category.toLowerCase() + "/" + id}>
                <img src={"/" + picturePath} alt="" />
            </Link>

            <div className='card-description'>
                <span className='card-description-title'>
                    {name}
                </span>

                <div className='card-description-order'>
                    <span className='order-price'>
                        {price}
                    </span>

                    <span className={false ? "order-button blocked" : "order-button"} onClick={false ? () => {} : addToCart}>
                        Добавить
                    </span>
                </div>
            </div>
        </div>
    );
}

export interface IItemCardProps {
    item: IItem
}

export default observer(ItemCard);