import { observer } from "mobx-react-lite";

import CartStore from "../../../Store/CartStore";
import CartOrderUnit from "./CartOrderUnit";

const CartOrderUnits = () => {
    const items = CartStore.items.slice();

    return(
        <>
            <section className="cart-order-units">
                {
                    items?.map((item) => {
                        return <CartOrderUnit
                            key={item.id}

                            id={item.id} 
                            category={item.category}
                            price={Number(item.price)} 
                            title={item.title} 
                            image={item.path} 
                            count={item.count}
                            text={item.text}
                        />
                    })
                }
            </section>
        </>
    );
}

export default observer(CartOrderUnits);