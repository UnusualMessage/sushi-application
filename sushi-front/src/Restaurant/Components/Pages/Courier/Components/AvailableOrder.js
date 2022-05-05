import { observer } from "mobx-react-lite";
import PropTypes from "prop-types";

import AvailableOrderItems from "./AvailableOrderItems";
import CurrentOrder from "../../../Store/CurrentOrder";

import "../Styles/AvailableOrder.scss";

const AvailableOrder = ({ id, date, status, price, items }) => {
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
}

AvailableOrder.propTypes = {
    id: PropTypes.number,
    date: PropTypes.string,
    status: PropTypes.string,
    price: PropTypes.number,
    items: PropTypes.array
}

export default observer(AvailableOrder);