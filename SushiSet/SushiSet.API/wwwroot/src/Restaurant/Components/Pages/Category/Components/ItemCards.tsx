import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";

import ShoppingData from "../../../Data/ShoppingData";
import ItemCard from "./ItemCard";
import CurrentSorting from "../../../../../Stores/CurrentSorting";
import IItem from "../../../../../Interfaces/IItem";

import "../Styles/ItemCards.scss";

const ItemCards = () => {
    const params = useParams();
    const isAscending : boolean = CurrentSorting.itemCardsAscending;

    const [items, setItems] = useState(ShoppingData.filter(card => card.category.toLowerCase() === params.category.toLowerCase()));

    useEffect(() => {
        let sortedItems : IItem[] = ShoppingData.filter(card => card.category.toLowerCase() === params.category.toLowerCase());

        if (isAscending) {
            sortedItems = sortedItems.sort((a, b) => a.price > b.price ? 1 : -1);
        } else {
            sortedItems = sortedItems.sort((a, b) => a.price < b.price ? 1 : -1);
        }

        setItems(sortedItems.slice(0));
    }, [params, isAscending])

    return (
        <section className='main-cards'>
            {
                items?.map((item : IItem) => {
                    return <ItemCard
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

export default observer(ItemCards);