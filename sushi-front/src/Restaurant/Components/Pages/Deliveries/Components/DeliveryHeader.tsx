import { observer } from "mobx-react-lite";
import { useState } from "react";

import IAddress from "../../../Interfaces/IAddress";
import ICustomerContacts from "../../../Interfaces/ICustomerContacts";
import DeliveryInfoModal from "./DeliveryInfoModal";

import "../Styles/DeliveryHeader.scss";

const OrderHeader = ({ id, date, status, price, address, customer, children }: IDeliveryHeaderProps) => {
    const [infoModalActive, setInfoModalActive] = useState(false);

    const showInfo = () => {
        setInfoModalActive(true);
    }

    return (
        <div className="delivery-header">
            <div className="delivery-info">
                <span className="delivery-number">ЗАКАЗ №{id}</span>
                <span className="delivery-date">от {date}</span>
                <span className="delivery-status">{status}</span>
                <span className="delivery-price">{price}</span>
                <span className="delivary-more" onClick={showInfo}>Подробнее</span>
            </div>
            
            {children}

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
    customer: ICustomerContacts,
    children: JSX.Element
}

export default observer(OrderHeader);