import { useState } from "react";

import AddItemModal from "./AddItemModal";

import "../Styles/ItemsTitle.scss";

const ItemsTitle = () => {
    const [addingItemActive, setAddingItemActive] = useState(false);

    const showModal = () => {
        setAddingItemActive(true);
    }

    return (
        <section className='items-title'>
            <h1>
                ТОВАРЫ
            </h1>

            <span className="items-add" onClick={showModal}>
                Добавить
            </span>

            <AddItemModal active={addingItemActive} setActive={setAddingItemActive}/>
        </section>
    )
}

export default ItemsTitle;