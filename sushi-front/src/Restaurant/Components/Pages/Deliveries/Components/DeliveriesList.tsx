import IOrder from "../../../Interfaces/IOrder";
import Delivery from "./Delivery";

import "../Styles/DeliveriesList.scss";

const DeliveriesList = ({ orders } : IDeliveriesListProps) => {
    return (
        <section className="main-deliveries">
            {
                orders?.map((order: IOrder) => {
                    return <Delivery
                        key={order.id}
                        order={order}
                    />
                })
            }
        </section>
    );
}

interface IDeliveriesListProps {
    orders: IOrder[]
}

export default DeliveriesList;