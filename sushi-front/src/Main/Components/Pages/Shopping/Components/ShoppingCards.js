import ShoppingCard from "./ShoppingCard";

const ShoppingCards = () => {
    return (
        <section className='shopping-cards-container'>
            <ShoppingCard imageSource="/1.jfif" title="Пивожное 1" price="100" />
            <ShoppingCard imageSource="/2.jfif" title="Пивожное 2" price="200" />
            <ShoppingCard imageSource="/3.jfif" title="Пивожное 3" price="300" />
            <ShoppingCard imageSource="/1.jfif" title="Пивожное 4" price="400" />
            <ShoppingCard imageSource="/2.jfif" title="Пивожное 5" price="500" />
            <ShoppingCard imageSource="/3.jfif" title="Пивожное 6" price="100" />
            <ShoppingCard imageSource="/1.jfif" title="Пивожное 7" price="200" />
            <ShoppingCard imageSource="/2.jfif" title="Пивожное 8" price="800" />
        </section>
    );
}

export default ShoppingCards;