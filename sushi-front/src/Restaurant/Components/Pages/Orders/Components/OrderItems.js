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
                    return <OrderItem key={item.id} id={item.id} image={item.path} title={item.title} count={item.count} price={item.price}/>
                })
            }
        </div>
    );
});

export default OrderItems;