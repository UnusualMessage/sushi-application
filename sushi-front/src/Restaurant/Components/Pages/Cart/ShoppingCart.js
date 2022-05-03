import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";

import CartOrderForm from "./Components/CartOrderForm";
import CartOrderUnits from "./Components/CartOrderUnits";
import Cart from "../../Store/Cart";

import "./Cart.scss";

const ShoppingCart = observer(() => {
    const navigate = useNavigate();

    useEffect(() => {
        if (Cart.isEmpty()) {
            navigate("/");
        }
    }, [navigate])

    return (
        <>
            <CartOrderUnits />
            <CartOrderForm />
        </>
    );
});

export default ShoppingCart;