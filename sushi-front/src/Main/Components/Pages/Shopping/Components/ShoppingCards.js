import ShoppingCard from "./ShoppingCard";
import ShoppingData from "../../../Data/ShoppingData";

const ShoppingCards = ({category}) => {
    return (
        <section className='shopping-cards-container'>
            {
                ShoppingData.filter(card => card.category.toLowerCase() === category.toLowerCase())?.map((card) => {
                    return <ShoppingCard 
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

export default ShoppingCards;