import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { observer } from "mobx-react-lite";

import ShoppingData from "../../../Data/ShoppingData";
import ItemCard from "./ItemCard";
import CurrentSorting from "../../../Store/CurrentSorting";

import "../Styles/ItemCards.scss";

const ItemCards = observer(() => {
    const params = useParams();
    const currentSorting = CurrentSorting.ascending;
    const [items, setItems] = useState(ShoppingData.filter(card => card.category.toLowerCase() === params.category.toLowerCase()));

    useEffect(() => {
        let sortedItems = ShoppingData.filter(card => card.category.toLowerCase() === params.category.toLowerCase());

        if (currentSorting) {
            sortedItems = sortedItems.sort((a, b) => Number(a.price) > Number(b.price) ? 1 : -1);
        } else {
            sortedItems = sortedItems.sort((a, b) => Number(a.price) < Number(b.price) ? 1 : -1);
        }

        setItems(sortedItems.slice(0));
    }, [params, currentSorting])

    return (
        <section className='main-cards'>
            {
                items?.map((item) => {
                    return <ItemCard
                        item={item}
                        key={item.id}
                    />
                })
            }
        </section>
    );
});

export default ItemCards;