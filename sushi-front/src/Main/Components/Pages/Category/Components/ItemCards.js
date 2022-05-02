import ShoppingData from "../../../Data/ShoppingData";
import ItemCard from "./ItemCard";

const ItemCards = ({category}) => {
    return (
        <section className='main-cards'>
            {
                ShoppingData.filter(card => card.category.toLowerCase() === category.toLowerCase())?.map((card) => {
                    return <ItemCard 
                        key={card.id}
                        id={card.id}
                        imageSource={card.path} 
                        title={card.title} 
                        price={card.price}
                        count={1} />
                })
            }
        </section>
    );
}

export default ItemCards;