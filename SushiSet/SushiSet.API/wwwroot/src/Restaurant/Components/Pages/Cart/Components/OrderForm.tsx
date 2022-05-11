import { action } from "mobx";
import { observer } from "mobx-react-lite";
import { useState } from "react";
import { useFormik } from 'formik';
import { object, string } from 'yup';

import HeaderCityChoice from "../../../Base/Header/Components/CityChoice";
import ShopChoice from "./ShopChoice";
import Input from "./Input";
import ICustomerContacts from "../../../../../Interfaces/ICustomerContacts";
import IAddress from "../../../../../Interfaces/IAddress";

import "../Styles/OrderForm.scss";

const OrderForm = () => {
    const [cityModal, setCityModal] = useState(false);
    const [shopModal, setShopModal] = useState(false);
    const [isDelivery, setIsDelivery] = useState(true);

    const changeDeliveryType = () => {
        setIsDelivery(!isDelivery);
    }

    const showCityChoice = action(() => {
        setCityModal(true);
    });

    const showShopChoice = action(() => {
        setShopModal(true);
    });

    const deliverySchema = object({
        name: string().required("Введите имя!"),
        phone: string().required("Введите номер телефона!"),

        street: string().required("Введите улицу!"),
        home: string().required("Введите номер дома!"),
        housing: string().required("Введите номер корпуса!"),
        part: string().required("Введите номер подъезда!"),
        floor: string().required("Введите этаж!"),
        flat: string().required("Введите номер квартиры!"),
    })

    const shopSchema = object({
        name: string().required("Введите имя!"),
        phone: string().required("Введите номер телефона!"),
    })

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

        validateOnBlur: false,
        validateOnChange: false,

        validationSchema: isDelivery ? deliverySchema : shopSchema,

        onSubmit: values => {
            const customer: ICustomerContacts = {
                name: values.name,
                phone: values.phone
            }

            const address: IAddress = {
                street: values.street,
                home: values.home,
                housing: values.housing,
                part: values.part,
                floor: values.floor,
                flat: values.flat
            }

            // isDelivery ? OrdersStore.makeOrder(customer, true, address) : OrdersStore.makeOrder(customer, false)

            // CartStore.clear();
        },
    });

    return (
        <form className="cart-order-form" onSubmit={formik.handleSubmit}>
            <div className="cart-order-form-result">
                <span className="cart-order-form-result-text">Итого:</span>
                <span className="cart-order-form-result-price">{444}</span>
            </div>

            <span className="cart-order-form-who-title">Кому доставить</span>
            <div className="cart-order-form-who">
                <Input value={formik.values.phone} onChange={formik.handleChange}
                    name="phone" placeholder="Телефон" type="tel" error={formik.errors.phone}
                />

                <Input value={formik.values.name} onChange={formik.handleChange}
                    name="name" placeholder="Как вас называть" type="text" error={formik.errors.name}
                />
            </div>

            <span className="cart-order-form-address-title">{isDelivery ? "Адрес доставки" : "Адрес ресторана"}</span>

            <div className="cart-order-type-choice">
                <input type={"checkbox"} checked={!isDelivery} onChange={changeDeliveryType} className="cart-order-type" />
                <span onClick={changeDeliveryType}>Самовывоз?</span>
            </div>

            {isDelivery ?

                <>
                    <div className="cart-order-form-place">
                        <div className="cart-order-form-city">
                            <span className="cart-current-city">{"МОСКВА"}</span>
                            <span className="cart-current-city-change" onClick={showCityChoice}>Сменить</span>
                        </div>
                    </div>

                    <div className="cart-order-form-address">
                        <Input value={formik.values.street} onChange={formik.handleChange}
                            name="street" placeholder="Улица" type="text" error={formik.errors.street}
                        />

                        <Input value={formik.values.home} onChange={formik.handleChange}
                            name="home" placeholder="Дом" type="text" error={formik.errors.home}
                        />

                        <Input value={formik.values.housing} onChange={formik.handleChange}
                            name="housing" placeholder="Корпус" type="text" error={formik.errors.housing}
                        />

                        <Input value={formik.values.part} onChange={formik.handleChange}
                            name="part" placeholder="Подъезд" type="text" error={formik.errors.part}
                        />

                        <Input value={formik.values.floor} onChange={formik.handleChange}
                            name="floor" placeholder="Этаж" type="text" error={formik.errors.floor}
                        />

                        <Input value={formik.values.flat} onChange={formik.handleChange}
                            name="flat" placeholder="Квартира" type="text" error={formik.errors.flat}
                        />
                    </div>
                </>

                :

                <div className="cart-order-form-place">
                    <div className="cart-order-form-city">
                        <span className="cart-current-city">{"МОСКВА"}</span>
                        <span className="cart-current-city-change" onClick={showCityChoice}>Сменить</span>
                    </div>

                    <div className="cart-order-form-shop">
                        <span className="cart-current-shop">{"ТАМ ГДЕ-ТО"}</span>
                        <span className="cart-current-shop-change" onClick={showShopChoice}>Сменить</span>
                    </div>
                </div>
            }

            <button className="cart-order-confirm" type="submit">ПОДТВЕРДИТЬ ЗАКАЗ</button>

            <HeaderCityChoice active={cityModal} setActive={setCityModal} />
            <ShopChoice active={shopModal} setActive={setShopModal} />
        </form>
    );
}

export default observer(OrderForm);