import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";

import { CategoryRoute } from "../../../Others/RouteNames";
import Auth from "../../../../../Stores/Auth";

import "../Styles/ItemCard.scss";
import IItem from "../../../../../Interfaces/IItem";

const ItemCard = ({ item } : IItemCardProps) => {
    // const addToCart = action(() => {
    //     CartStore.add({
    //         id: id,
    //         title: title,
    //         path: path,
    //         text: text,
    //         price: price,
    //         category: category,
    //         count: count,
    //     });
    // })

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

                    <span className={Auth.isCourier() ? "order-button blocked" : "order-button"} onClick={Auth.isCourier() ? () => {} : () => {}}>
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