import { useNavigate } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";

import OrderForm from "./Components/OrderForm";
import OrderUnits from "./Components/OrderUnits";
import Title from "./Components/Title";
import CartStore from "../../../../Stores/CartStore";
import { InitialRoute } from "../../Others/RouteNames";

const ShoppingCart = () => {
    const navigate = useNavigate();
    const isCartEmpty : boolean = CartStore.isEmpty();

    useEffect(() => {
        if (isCartEmpty) {
            navigate(InitialRoute);
        }
    }, [navigate, isCartEmpty])

    return (
        <>
            <Title />
            <OrderUnits />
            <OrderForm />
        </>
    );
}

export default observer(ShoppingCart);