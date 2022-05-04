import { observer } from "mobx-react-lite";

import CartStore from "../../../Store/CartStore";
import CartOrderUnit from "./CartOrderUnit";

const CartOrderUnits = observer(() => {
    const items = CartStore.items.slice();

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
                            path={item.path} 
                            count={item.count}/>
                    })
                }
            </section>
        </>
    );
});

export default CartOrderUnits;