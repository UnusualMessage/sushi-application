import { observer } from "mobx-react-lite";

import "../Styles/OrdersTitle.scss";

const OrdersTitle = () => {
    // const changeSorting = action(() => {
    //     CurrentSorting.changeOrdersSorting();
    // });

    return (
        <section className="orders-title">
            <h1>История заказов</h1>

            <span className="orders-sorting">
                {true ? "По возрастанию цены" : "По убыванию цены"}
            </span>
        </section>
    );
}

export default observer(OrdersTitle);