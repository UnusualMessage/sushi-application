import { observer } from "mobx-react-lite";

import CurrentSorting from "../../../Store/CurrentSorting";

import "../Styles/OrdersTitle.scss";

const OrdersTitle = () => {
    const onSortingChange = (e) => {
        e.preventDefault();
        CurrentSorting.changeOrdersSorting();
    }

    return (
        <section className="orders-title">
            <h1>Ваши заказы</h1>

            <span className="orders-sorting" onClick={onSortingChange}>
                {CurrentSorting.ordersAscending ? "По возрастанию цены" : "По убыванию цены"}
            </span>
        </section>
    );
}

export default observer(OrdersTitle);