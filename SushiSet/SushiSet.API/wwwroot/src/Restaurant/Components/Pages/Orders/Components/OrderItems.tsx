import { observer } from "mobx-react-lite";

import OrderItem from "./OrderItem";
import OrdersStore from "../../../../../Stores/OrdersStore";
import IItem from "../../../../../Interfaces/IItem";

import "../Styles/OrderItems.scss";

const OrderItems = ({ id }) => {
    const items : IItem[] = OrdersStore.getById(id)?.items;

    return(
        <div className="order-items">
            {
                items?.map((item : IItem) => {
                    return <OrderItem 
                        key={item.id}
                        item={item}
                    />
                })
            }
        </div>
    );
}

export default observer(OrderItems);