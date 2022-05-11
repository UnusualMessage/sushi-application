import { observer } from "mobx-react-lite";

import "../Styles/OrderUnits.scss";

const OrderUnits = () => {
    // const items: IItem[] = CartStore.items.slice();

    return (
        <section className="cart-order-units">
            {
                // items?.map((item : IItem) => {
                //     return <OrderUnit
                //         key={item.id}
                //         item={item}
                //     />
                // })
            }
        </section>
    );
}

export default observer(OrderUnits);