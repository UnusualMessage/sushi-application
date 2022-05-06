import { observer } from "mobx-react-lite";

import IItem from "../../../Interfaces/IItem";
import CartStore from "../../../Store/CartStore";
import OrderUnit from "./OrderUnit";

import "../Styles/OrderUnits.scss";

const OrderUnits = () => {
    const items: IItem[] = CartStore.items.slice();

    return (
        <section className="cart-order-units">
            {
                items?.map((item : IItem) => {
                    return <OrderUnit
                        key={item.id}
                        item={item}
                    />
                })
            }
        </section>
    );
}

export default observer(OrderUnits);