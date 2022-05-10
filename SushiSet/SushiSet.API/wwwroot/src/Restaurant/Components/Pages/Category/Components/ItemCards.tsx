import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { observer } from "mobx-react-lite";

import ItemCard from "./ItemCard";
import IItem from "../../../../../Interfaces/IItem";
import ItemsStore from "../../../../../Stores/ItemsStore";

import "../Styles/ItemCards.scss";

const ItemCards = () => {
    const params = useParams();
    // const isAscending : boolean = CurrentSorting.itemCardsAscending;

    useEffect(() => {
        ItemsStore.getItemsInCategory(params.category);
    }, [params])

    return (
        <section className='main-cards'>
            {
                ItemsStore.items?.map((item : IItem) => {
                    return <ItemCard
                        key={item.id}
                        item={item}
                    />
                })
            }
        </section>
    );
}

export default observer(ItemCards);