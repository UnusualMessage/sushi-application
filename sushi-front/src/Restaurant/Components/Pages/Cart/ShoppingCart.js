import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";

import CartOrderForm from "./Components/CartOrderForm";
import CartOrderUnits from "./Components/CartOrderUnits";
import CartTitle from "./Components/CartTitle";
import CartStore from "../../Store/CartStore";

import "./Cart.scss";

const ShoppingCart = observer(() => {
    const navigate = useNavigate();
    const isCartEmpty = CartStore.isEmpty();

    useEffect(() => {
        if (isCartEmpty) {
            navigate("/");
        }
    }, [navigate, isCartEmpty])

    return (
        <>
            <CartTitle />
            <CartOrderUnits />
            <CartOrderForm />
        </>
    );
});

export default ShoppingCart;