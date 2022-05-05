import AvailableOrderItems from "./AvailableOrderItems";
import CurrentOrder from "../../../Store/CurrentOrder";

import "../Styles/AvailableOrder.scss";
import { observer } from "mobx-react-lite";

const AvailableOrder = observer(({ id, date, status, price, items }) => {
    const onAccept = (e) => {
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

            <AvailableOrderItems id={id} items={items}/>
        </div>
    );
});

export default AvailableOrder;