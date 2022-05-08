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

                        id={item.id} 
                        category={item.category}
                        price={item.price} 
                        title={item.title} 
                        path={item.path} 
                        count={item.count}
                        text={item.text}
                    />
                })
            }
        </section>
    );
}

export default observer(ItemsList);