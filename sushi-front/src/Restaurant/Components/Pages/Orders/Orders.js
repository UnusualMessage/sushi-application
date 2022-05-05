import { observer } from "mobx-react-lite";

import OrdersStore from "../../Store/OrdersStore";
import Order from "./Components/Order";

import "./Orders.scss"; 

const Orders = () => {
    return(
        <section className="main-orders">
            {
                OrdersStore.orders.map(order => {
                    return <Order 
                        key={order.id} 
                        
                        id={order.id} 
                        date={order.date} 
                        status={order.status} 
                        price={order.price} />
                })
            }
        </section>
    );
}

export default observer(Orders);