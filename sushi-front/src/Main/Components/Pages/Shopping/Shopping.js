import './Shopping.scss';
import ShoppingCard from './ShoppingCard';

const Shopping = (props) => {
    return(
        <>
            <main className='main'>
                <div className='main-wrapper'>
                    <div className='main-content'>
                        <ShoppingCard imageSource="/1.jfif" title="Пивожное 1" price="100"/>
                        <ShoppingCard imageSource="/2.jfif" title="Пивожное 2" price="200"/>
                        <ShoppingCard imageSource="/3.jfif" title="Пивожное 3" price="300"/>
                        <ShoppingCard imageSource="/1.jfif" title="Пивожное 4" price="400"/>
                        <ShoppingCard imageSource="/2.jfif" title="Пивожное 5" price="500"/>
                        <ShoppingCard imageSource="/3.jfif" title="Пивожное 6" price="100"/>
                        <ShoppingCard imageSource="/1.jfif" title="Пивожное 7" price="200"/>
                        <ShoppingCard imageSource="/2.jfif" title="Пивожное 8" price="800"/>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Shopping;