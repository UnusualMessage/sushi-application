import CartOrderForm from "./Components/CartOrderForm";
import CartOrderUnits from "./Components/CartOrderUnits";

import "./Cart.scss";

const Cart = () => {
    return(
        <>
            <main className="cart">
                <div className="cart-wrapper">
                    <div className="cart-content">
                        <CartOrderUnits/>
                        <CartOrderForm/>
                    </div>
                </div>
            </main>
        </>
    );
}

export default Cart;