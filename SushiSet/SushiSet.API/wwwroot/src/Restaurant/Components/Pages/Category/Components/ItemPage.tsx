import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

import ItemsStore from "../../../../../Stores/ItemsStore";

import "../Styles/ItemPage.scss";

const ItemPage = () => {
    const { category, id } = useParams();

    useEffect(() => {
        ItemsStore.getItemById(id);
    }, [id])

    console.log(ItemsStore.item);
    
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

                    <span className={true ? "order-button blocked" : "order-button"} onClick={true ? () => {} : () => {}}>
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