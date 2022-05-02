import { observer } from "mobx-react-lite";
import Cart from "../../../Store/Cart";
import "../Styles/CartOrderForm.scss";

const CartOrderForm = observer(() => {
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
                        <span>Телефон:</span>
                        <input></input>
                    </div>

                    <div className="cart-order-form-who-name">
                        <span>Как вас назвать:</span>
                        <input></input>
                    </div>
                </div>

                <div className="cart-order-form-address">
                    <span className="cart-order-form-address-title">Адрес доставки</span>

                    <div className="cart-order-form-address-street">
                        <span>Улица:</span>
                        <input />
                    </div>

                    <div className="cart-order-form-address-home">
                        <span>Номер дома:</span>
                        <input />
                    </div>

                    <div className="cart-order-form-address-part">
                        <span>Подъезд:</span>
                        <input />
                    </div>

                    <div className="cart-order-form-address-floor">
                        <span>Этаж:</span>
                        <input />
                    </div>

                    <div className="cart-order-form-address-flat">
                        <span>Квартира:</span>
                        <input />
                    </div>
                </div>
            </section>
        </>
    );
});

export default CartOrderForm;