import { useParams } from "react-router-dom";
import ShoppingData from "../../../Data/ShoppingData";

import "../Styles/ItemPage.scss";

const ItemPage = () => {
    const { category, id } = useParams();
    const item = ShoppingData.find((i) => (i.id.toString() === id) && (i.category === category));

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

                    <span className="order-button">
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