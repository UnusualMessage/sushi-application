import { action } from "mobx";
import { observer } from "mobx-react-lite";
import { useParams } from "react-router-dom";

import CurrentSorting from "../../../../../Stores/CurrentSorting";

import "../Styles/ItemsTitle.scss";

const ItemsTitle = () => {
    const params = useParams();

    const onSortingChange = action(() => {
        CurrentSorting.changeItemCardsSorting();
    });
    
    return (
        <section className='main-title'>
            <h1>
                {params.category}
            </h1>

            <span className="main-sorting" onClick={onSortingChange}>
                {CurrentSorting.itemCardsAscending ? "По возрастанию цены" : "По убыванию цены"}
            </span>
        </section>
    )
}

export default observer(ItemsTitle);