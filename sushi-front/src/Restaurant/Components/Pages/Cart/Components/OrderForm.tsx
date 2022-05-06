import { action } from "mobx";
import { observer } from "mobx-react-lite";
import { useState } from "react";
import { useFormik } from 'formik';

import HeaderCityChoice from "../../../Base/Header/Components/HeaderCityChoice";
import CartStore from "../../../Store/CartStore";
import CurrentCity from "../../../Store/CurrentCity";
import CurrentShop from "../../../Store/CurrentShop";
import OrdersStore from "../../../Store/OrdersStore";
import ShopChoice from "./ShopChoice";

import "../Styles/OrderForm.scss";
import Input from "./Input";

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

    const confirm = action(() => {
        OrdersStore.makeOrder(CartStore.items, CartStore.getPrice());
        CartStore.clear();
    });

    const formik = useFormik({
        initialValues: {
            phone: '',
            name: '',
            street: '',
            home: '',
            housing: '',
            part: '',
            floor: '',
            flat: ''
        },

        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
            confirm();
        },
    });

    return (
        <form className="cart-order-form" onSubmit={formik.handleSubmit}>
            <div className="cart-order-form-result">
                <span className="cart-order-form-result-text">Итого:</span>
                <span className="cart-order-form-result-price">{CartStore.getPrice()}</span>
            </div>

            <span className="cart-order-form-who-title">Кому доставить</span>
            <div className="cart-order-form-who">
                <Input value={formik.values.phone} onChange={formik.handleChange}
                    name="phone" placeholder="Телефон" type="tel"
                />

                <Input value={formik.values.name} onChange={formik.handleChange}
                    name="name" placeholder="Как вас называть" type="text"
                />
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
                        <Input value={formik.values.street} onChange={formik.handleChange}
                            name="street" placeholder="Улица" type="text"
                        />

                        <Input value={formik.values.home} onChange={formik.handleChange}
                            name="home" placeholder="Дом" type="text"
                        />

                        <Input value={formik.values.housing} onChange={formik.handleChange}
                            name="housing" placeholder="Корпус" type="text"
                        />

                        <Input value={formik.values.part} onChange={formik.handleChange}
                            name="part" placeholder="Подъезд" type="text"
                        />

                        <Input value={formik.values.floor} onChange={formik.handleChange}
                            name="floor" placeholder="Этаж" type="text"
                        />

                        <Input value={formik.values.flat} onChange={formik.handleChange}
                            name="flat" placeholder="Квартира" type="text"
                        />
                    </div>
                </>
            }

            <button className="cart-order-confirm" type="submit">ПОДТВЕРДИТЬ ЗАКАЗ</button>

            <HeaderCityChoice active={cityModal} setActive={setCityModal} />
            <ShopChoice active={shopModal} setActive={setShopModal} />
        </form>
    );
}

export default observer(OrderForm);