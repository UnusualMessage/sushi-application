import { observer } from "mobx-react-lite";
import { useState } from "react";

import HeaderCityChoice from "../../../Base/Header/Components/HeaderCityChoice";
import Cart from "../../../Store/Cart";
import CurrentCity from "../../../Store/CurrentCity";

import "../Styles/CartOrderForm.scss";

const CartOrderForm = observer(() => {
    const [cityModal, setCityModal] = useState(false);

    const onChangeCityClick = (e) => {
        e.preventDefault();
        setCityModal(true);
    }

    return (
        <>
            <section className="cart-order-form">
                <div className="cart-order-form-result">
                    <span className="cart-order-form-result-text">Итого:</span>
                    <span className="cart-order-form-result-price">{Cart.getPrice()}</span>
                </div>

                <div className="cart-order-form-who">
                    <span className="cart-order-form-who-title">Кому доставить</span>
                    <div className="cart-order-form-who-phone">
                        <input className="cart-input" placeholder="Телефон"/>
                    </div>

                    <div className="cart-order-form-who-name">
                        <input className="cart-input" placeholder="Как вас называть"/>
                    </div>
                </div>

                <div className="cart-order-form-address">
                    <span className="cart-order-form-address-title">Адрес доставки</span>

                    <div className="cart-order-form-address-street">
                        <input className="cart-input" placeholder="Улица"/>
                        <span className="cart-current-city">{CurrentCity.city}</span>
                        <span className="cart-current-city-change" onClick={onChangeCityClick}>Сменить</span>
                    </div>

                    <div className="cart-order-form-address-home">
                        <input className="cart-input" placeholder="Номер дома"/>
                    </div>

                    <div className="cart-order-form-address-part">
                        <input className="cart-input" placeholder="Подъезд"/>
                    </div>

                    <div className="cart-order-form-address-floor">
                        <input className="cart-input" placeholder="Этаж"/>
                    </div>

                    <div className="cart-order-form-address-flat">
                        <input className="cart-input" placeholder="Квартира"/>
                    </div>
                </div>

                <HeaderCityChoice active={cityModal} setActive={setCityModal}/>
            </section>
        </>
    );
});

export default CartOrderForm;