import { action } from "mobx";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

import AuthStore from "../../../../../Stores/AuthStore";
import CartUnitsStore from "../../../../../Stores/CartUnitsStore";
import ItemsStore from "../../../../../Stores/ItemsStore";

import "../Styles/ItemPage.scss";

const ItemPage = () => {
    const { category, id } = useParams();

    useEffect(() => {
        ItemsStore.getItemById(id);
        AuthStore.checkAuth();
    }, [id]);

    const addToCart = action(() => {
        const currentCount = CartUnitsStore.getNewCount(id);

        if (currentCount) {
            CartUnitsStore.editCartUnit({
                id: CartUnitsStore.getIdByItemId(id),
                count: currentCount + 1,
            });
        } else {
            CartUnitsStore.createCartUnit({
                itemId: id,
                userId: AuthStore.getId(),
                count: 1,
            });
        }
    });

    return (
        <section className="item-page">
            <div className="item-page-image">
                <img src={"/" + ItemsStore.item?.picturePath} alt="" />
            </div>

            <div className="item-page-description">
                <h1 className="item-page-description-title">
                    {ItemsStore.item?.name}
                </h1>

                <div className="item-page-description-order">
                    <span className="order-price">
                        {ItemsStore.item?.price}
                    </span>

                    <span className={false ? "order-button blocked" : "order-button"} onClick={false ? () => {} : addToCart}>
                        ДОБАВИТЬ
                    </span>
                </div>

                <div className="item-page-description-text">
                    {ItemsStore.item?.description}
                </div>
            </div>
        </section>
    );
}

export default observer(ItemPage);