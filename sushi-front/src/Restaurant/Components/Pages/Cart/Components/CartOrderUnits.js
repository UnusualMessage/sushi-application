import { observer } from "mobx-react-lite";
import Cart from "../../../Store/Cart";

import CartOrderUnit from "./CartOrderUnit";

const CartOrderUnits = observer(() => {
    const items = Cart.items.slice();

    return(
        <>
            <section className="cart-order-units">
                {
                    items?.map((item) => {
                        return <CartOrderUnit 
                            category={item.category}
                            key={item.id} 
                            id={item.id} 
                            price={item.price} 
                            title={item.title} 
                            image={item.imageSource} 
                            count={item.count}/>
                    })
                }
            </section>
        </>
    );
});

export default CartOrderUnits;