import IOrder from "../../../../../Interfaces/IOrder";
import Order from "./Order";

import "../Styles/OrdersList.scss";

const OrdersList = ({ orders } : IOrdersListProps) => {
    return (
        <section className="main-orders">
            {
                orders?.map((order: IOrder) => {
                    return <Order
                        key={order.id}
                        order={order}
                    />
                })
            }
        </section>
    );
}

interface IOrdersListProps {
    orders: IOrder[]
}

export default OrdersList;