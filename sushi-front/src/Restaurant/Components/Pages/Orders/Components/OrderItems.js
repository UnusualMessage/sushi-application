import { observer } from "mobx-react-lite";
import OrdersStore from "../../../Store/OrdersStore";
import "../Styles/OrderItems.scss";

import OrderItem from "./OrderItem";

const OrderItems = observer(({ id }) => {
    const items = OrdersStore.orders.find((order => order.id === id)).items;

    return(
        <div className="order-items">
            {
                items.map(item => {
                    return <OrderItem 
                        key={item.id}
                        item={item}
                    />
                })
            }
        </div>
    );
});

export default OrderItems;