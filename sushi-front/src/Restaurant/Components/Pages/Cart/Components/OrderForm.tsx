import { action } from "mobx";
import { observer } from "mobx-react-lite";
import { useState } from "react";

import HeaderCityChoice from "../../../Base/Header/Components/HeaderCityChoice";
import CartStore from "../../../Store/CartStore";
import CurrentCity from "../../../Store/CurrentCity";
import CurrentShop from "../../../Store/CurrentShop";
import OrdersStore from "../../../Store/OrdersStore";
import ShopChoice from "./ShopChoice";

import "../Styles/OrderForm.scss";

const OrderForm = () => {
    const [cityModal, setCityModal] = useState(false);
    const [shopModal, setShopModal] = useState(false);
    const [isShop, setisShop] = useState(false);

    const onCartTypeChange = () => {
        setisShop(!isShop);
    }

    const onChangeCityClick = action(() => {
        setCityModal(true);
    });

    const onChangeShopClick = action(() => {
        setShopModal(true);
    });

    const onConfirmClick = action((e: { preventDefault: () => void; }) => {
        e.preventDefault();

        OrdersStore.makeOrder(CartStore.items, CartStore.getPrice());
        CartStore.clear();
    });

    return (
        <section className="cart-order-form">
            <div className="cart-order-form-result">
                <span className="cart-order-form-result-text">Итого:</span>
                <span className="cart-order-form-result-price">{CartStore.getPrice()}</span>
            </div>

            <span className="cart-order-form-who-title">Кому доставить</span>
            <div className="cart-order-form-who">
                <input className="cart-input" placeholder="Телефон" />
                <input className="cart-input" placeholder="Как вас называть" />
            </div>

            <span className="cart-order-form-address-title">{isShop ? "Адрес ресторана" : "Адрес доставки"}</span>
            <div className="cart-order-type-choice">
                <input type={"checkbox"} checked={isShop} onChange={onCartTypeChange} className="cart-order-type" />
                <span onClick={onCartTypeChange}>Самовывоз?</span>
            </div>

            {isShop ?

                <div className="cart-order-form-place">
                    <div className="cart-order-form-city">
                        <span className="cart-current-city">{CurrentCity.city}</span>
                        <span className="cart-current-city-change" onClick={onChangeCityClick}>Сменить</span>
                    </div>

                    <div className="cart-order-form-shop">
                        <span className="cart-current-shop">{CurrentShop.shop}</span>
                        <span className="cart-current-shop-change" onClick={onChangeShopClick}>Сменить</span>
                    </div>
                </div>

                :

                <>
                    <div className="cart-order-form-place">
                        <div className="cart-order-form-city">
                            <span className="cart-current-city">{CurrentCity.city}</span>
                            <span className="cart-current-city-change" onClick={onChangeCityClick}>Сменить</span>
                        </div>
                    </div>

                    <div className="cart-order-form-address">
                        <input className="cart-input" placeholder="Улица" />
                        <input className="cart-input" placeholder="Номер дома" />
                        <input className="cart-input" placeholder="Корпус" />
                        <input className="cart-input" placeholder="Подъезд" />
                        <input className="cart-input" placeholder="Этаж" />
                        <input className="cart-input" placeholder="Квартира" />
                    </div>
                </>
            }

            <span className="cart-order-confirm" onClick={onConfirmClick}>ПОДТВЕРДИТЬ ЗАКАЗ</span>

            <HeaderCityChoice active={cityModal} setActive={setCityModal} />
            <ShopChoice active={shopModal} setActive={setShopModal} />
        </section>
    );
}

export default observer(OrderForm);