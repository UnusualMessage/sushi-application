import { observer } from "mobx-react-lite";

import ShoppingData from "../../../../../Restaurant/Components/Data/ShoppingData";
import Item from "./Item";
import IItem from "../../../../../Interfaces/IItem";

import "../Styles/ItemsList.scss";

const ItemsList= () => {
    return (
        <section className='items'>
            {
                ShoppingData?.map((item : IItem) => {
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