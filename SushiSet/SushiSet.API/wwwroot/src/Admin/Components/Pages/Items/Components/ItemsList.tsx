import { observer } from "mobx-react-lite";
import { useEffect } from "react";

import Item from "./Item";
import IItem from "../../../../../Interfaces/IItem";
import ItemsStore from "../../../../../Stores/ItemsStore";

import "../Styles/ItemsList.scss";

const ItemsList= () => {
    useEffect(() => {
        ItemsStore.getItems();
    }, [])

    return (
        <section className='items'>
            {
                ItemsStore.items?.map((item : IItem) => {
                    return <Item
                        key={item.id}
                        item={item}
                    />
                })
            }
        </section>
    );
}

export default observer(ItemsList);