import { observer } from "mobx-react-lite";

import OrderItem from "./OrderItem";
import OrdersStore from "../../../Store/OrdersStore";

import "../Styles/OrderItems.scss";
import IItem from "../../../Interfaces/IItem";

const OrderItems = ({ id }) => {
    const items : IItem[] = OrdersStore.getById(id)?.items;

    return(
        <div className="order-items">
            {
                items?.map((item : IItem) => {
                    return <OrderItem 
                        key={item.id}

                        id={item.id}
                        category={item.category}
                        title={item.title}
                        price={item.price}
                        text={item.text}
                        path={item.path}
                        count={item.count}
                    />
                })
            }
        </div>
    );
}

export default observer(OrderItems);