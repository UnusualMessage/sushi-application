import { observer } from "mobx-react-lite";
import PropTypes from "prop-types";

import OrdersStore from "../../../Store/OrdersStore";

import "../Styles/AvailableOrderToolbar.scss";

const AvailableOrderToolbar = ({ id, setOrder }) => {
    const onShowNext = (e) => {
        e.preventDefault();

        if (OrdersStore.isLast(id)) {
            setOrder(OrdersStore.getFirst());
        } else {
            setOrder(OrdersStore.getNext(id));
        }
    }

    const onShowPrevious = (e) => {
        e.preventDefault();

        if (OrdersStore.isFirst(id)) {
            setOrder(OrdersStore.getLast());
        } else {
            setOrder(OrdersStore.getPrevious(id));
        }
    }

    const onShowRandom = (e) => {
        e.preventDefault();
        setOrder(OrdersStore.getRandomOrder())
    }

    return (
        <div className="available-order-toolbar">
            <span className="toolbar-previous" onClick={onShowPrevious}>Назад</span>
            <span className="toolbar-random" onClick={onShowRandom}>Случайно</span>
            <span className="toolbar-next" onClick={onShowNext}>Вперед</span>
        </div>
    );
}

AvailableOrderToolbar.propTypes = {
    id: PropTypes.number,
    setOrder: PropTypes.func
}

export default observer(AvailableOrderToolbar);