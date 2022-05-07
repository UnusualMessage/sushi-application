import { action } from "mobx";
import { observer } from "mobx-react-lite";

import CurrentOrder from "../../../Store/CurrentOrder";

import "../Styles/DeliveryHeader.scss";

const OrderHeader = ({ id, date, status, price }: IDeliveryHeaderProps) => {
    const onAccept = action(() => {
        CurrentOrder.accept(id);
    });

    return (
        <div className="delivery-header">
            <div className="delivery-info">
                <span className="delivery-number">ЗАКАЗ №{id}</span>
                <span className="delivery-date">от {date}</span>
                <span className="delivery-status">{status}</span>
                <span className="delivery-price">{price}</span>
            </div>

            <span className="delivery-accept" onClick={onAccept}>Принять</span>
        </div>
    );
}

interface IDeliveryHeaderProps {
    id: number,
    date: string,
    status: string,
    price: number
}

export default observer(OrderHeader);