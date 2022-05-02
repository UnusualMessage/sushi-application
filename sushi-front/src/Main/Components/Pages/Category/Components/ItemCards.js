import { useParams } from "react-router-dom";

import ShoppingData from "../../../Data/ShoppingData";
import ItemCard from "./ItemCard";

const ItemCards = () => {
    const params = useParams();

    return (
        <>
            <section className='main-title'>
                <h1>
                    {params.category}
                </h1>
            </section>

            <section className='main-cards'>
                {
                    ShoppingData.filter(card => card.category.toLowerCase() === params.category.toLowerCase())?.map((card) => {
                        return <ItemCard
                            category={params.category}
                            key={card.id}
                            id={card.id}
                            imageSource={card.path}
                            title={card.title}
                            price={card.price}
                            count={1} />
                    })
                }
            </section>
        </>

    );
}

export default ItemCards;