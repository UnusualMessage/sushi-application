import { observer } from "mobx-react-lite";

import IOrder from "../../../Interfaces/IOrder";
import Delivery from "./Delivery";
import OrdersStore from "../../../Store/OrdersStore";

import "../Styles/DeliveriesList.scss";

const DeliveriesList = () => {
    const orders : IOrder[] = OrdersStore.getForCourier();

    return (
        <section className="main-deliveries">
            {
                orders?.map((order: IOrder) => {
                    return <Delivery
                        key={order.id}
                        id={order.id}
                    />
                })
            }
        </section>
    );
}

export default observer(DeliveriesList);