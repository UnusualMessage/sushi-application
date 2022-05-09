import { observer } from "mobx-react-lite";
import { useState } from "react";

import IItem from "../../../../../Interfaces/IItem";
import EditItemModal from "./EditItemModal";

import "../Styles/Item.scss";

const Item = ({ item } : IItemProps) => {
    const { picturePath, name, price } = item;

    const [editItemActive, setEditItemActive] = useState(false);

    const showModal = () => {
        setEditItemActive(true);
    }

    return (
        <div className='item'>
            <div className='item-image'>
                <img src={"/" + picturePath} alt="" />
            </div>

            <div className='item-description'>
                <span className='item-description-title'>
                    {name}
                </span>

                <div className='item-description-order'>
                    <span className='order-price'>
                        {price}
                    </span>

                    <span className="item-edit-button" onClick={showModal}>
                        Подробнее
                    </span>
                </div>
            </div>

            <EditItemModal active={editItemActive} setActive={setEditItemActive} item={item}/>
        </div>
    );
}

export interface IItemProps {
    item: IItem,
}

export default observer(Item);