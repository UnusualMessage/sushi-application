import { action } from "mobx";
import { observer } from "mobx-react-lite";
import { useState } from "react";

import IAddress from "../../../Interfaces/IAddress";
import ICustomerContacts from "../../../Interfaces/ICustomerContacts";
import CurrentOrder from "../../../Store/CurrentOrder";

import "../Styles/DeliveryHeader.scss";
import DeliveryInfoModal from "./DeliveryInfoModal";

const OrderHeader = ({ id, date, status, price, address, customer }: IDeliveryHeaderProps) => {
    const [infoModalActive, setInfoModalActive] = useState(false);

    const showInfo = () => {
        setInfoModalActive(true);
    }

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
                <span className="delivary-more" onClick={showInfo}>Подробнее</span>
            </div>

            <span className="delivery-accept" onClick={onAccept}>Принять</span>

            <DeliveryInfoModal active={infoModalActive} setActive={setInfoModalActive} address={address} customer={customer}/>
        </div>
    );
}

interface IDeliveryHeaderProps {
    id: number,
    date: string,
    status: string,
    price: number,
    address: IAddress,
    customer: ICustomerContacts
}

export default observer(OrderHeader);