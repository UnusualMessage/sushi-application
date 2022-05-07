import { action } from "mobx";
import { useParams } from "react-router-dom";

import ShoppingData from "../../../Data/ShoppingData";
import IItem from "../../../Interfaces/IItem";
import Auth from "../../../Store/Auth";
import CartStore from "../../../Store/CartStore";

import "../Styles/ItemPage.scss";

const ItemPage = () => {
    const { category, id } = useParams();
    let item : IItem = ShoppingData.find((i) => (i.id.toString() === id) && (i.category.toLowerCase() === category.toLowerCase()));

    if (item) {
        item.count = 1;
    }

    const addToCart = action(() => {
        CartStore.add(item);
    });

    return (
        <section className="item-page">
            <div className="item-page-image">
                <img src={item?.path} alt="" />
            </div>

            <div className="item-page-description">
                <h1 className="item-page-description-title">
                    {item?.title}
                </h1>

                <div className="item-page-description-order">
                    <span className="order-price">
                        {item?.price}
                    </span>

                    <span className={Auth.isCourier() ? "order-button blocked" : "order-button"} onClick={Auth.isCourier() ? () => {} : addToCart}>
                        ДОБАВИТЬ
                    </span>
                </div>

                <div className="item-page-description-text">
                    {item?.text}
                </div>
            </div>
        </section>
    );
}

export default ItemPage;