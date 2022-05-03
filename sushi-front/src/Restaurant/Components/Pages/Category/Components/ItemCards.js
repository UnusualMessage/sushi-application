import { useParams } from "react-router-dom";

import ShoppingData from "../../../Data/ShoppingData";
import ItemCard from "./ItemCard";

import "../Styles/ItemCards.scss";

const ItemCards = () => {
    const params = useParams();

    return (
        <section className='main-cards'>
            {
                ShoppingData.filter(card => card.category.toLowerCase() === params.category.toLowerCase())?.map((card) => {
                    return <ItemCard
                        category={params.category}
                        key={card.id}
                        id={card.id}
                        path={card.path}
                        title={card.title}
                        price={card.price}
                        count={1} />
                })
            }
        </section>
    );
}

export default ItemCards;