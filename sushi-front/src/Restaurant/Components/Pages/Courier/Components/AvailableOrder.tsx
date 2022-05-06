import { observer } from "mobx-react-lite";

import AvailableOrderItems from "./AvailableOrderItems";
import CurrentOrder from "../../../Store/CurrentOrder";
import IItem from "../../../Interfaces/IItem";

import "../Styles/AvailableOrder.scss";

const AvailableOrder = ({ id, date, status, price, items } : IAvailableOrder) => {
    const onAccept = (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        CurrentOrder.accept(id);
    }

    return (
        <div className="available-order">
            <div className="available-order-header">
                <div className="available-order-info">
                    <span className="available-order-number">ЗАКАЗ №{id}</span>
                    <span className="available-order-date">от {date}</span>
                    <span className="available-order-status">{status}</span>
                    <span className="available-order-price">{price}</span>
                </div>

                <span className="available-order-accept" onClick={onAccept}>Принять</span>
            </div>

            <AvailableOrderItems items={items}/>
        </div>
    );
}

interface IAvailableOrder {
    id: number,
    date: string,
    status: string,
    price: number,
    items: IItem[]
}

export default observer(AvailableOrder);