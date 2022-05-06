import { observer } from "mobx-react-lite";

import IItem from "../../../Interfaces/IItem";
import CartStore from "../../../Store/CartStore";
import CartOrderUnit from "./CartOrderUnit";

const CartOrderUnits = () => {
    const items: IItem[] = CartStore.items.slice();

    return (
        <section className="cart-order-units">
            {
                items?.map((item : IItem) => {
                    return <CartOrderUnit
                        key={item.id}

                        id={item.id}
                        category={item.category}
                        price={item.price}
                        title={item.title}
                        path={item.path}
                        count={item.count}
                        text={item.text}
                    />
                })
            }
        </section>
    );
}


export default observer(CartOrderUnits);