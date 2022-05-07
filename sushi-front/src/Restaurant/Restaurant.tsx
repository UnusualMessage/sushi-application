import { Route, Routes } from "react-router-dom";

import Wrapper from "./Components/Base/Wrapper";
import CourierRoute from "./Components/Others/CourierRoute";
import CustomerRoute from "./Components/Others/CustomerRoute";
import Cart from "./Components/Pages/Cart/Cart";
import Category from "./Components/Pages/Category/Category";
import ItemCards from "./Components/Pages/Category/Components/ItemCards";
import ItemPage from "./Components/Pages/Category/Components/ItemPage";
import Company from "./Components/Pages/Company/Company";
import Deliveries from "./Components/Pages/Deliveries/Deliveries";
import Home from "./Components/Pages/Home/Home";
import Orders from "./Components/Pages/Orders/Orders";

const Restaurant = () => {
    return (
        <Routes>
            <Route path="*" element={<Wrapper />}>
                <Route path="" element={<Home />} />

                <Route path="category" element={<Category />}>
                    <Route path=":category" element={<ItemCards />} />
                    <Route path=":category/:id" element={<ItemPage />} />
                </Route>

                <Route path="courier" element={<CourierRoute />}>
                    <Route path="" element={<Deliveries />} />
                </Route>

                <Route path="orders" element={<CustomerRoute />}>
                    <Route path="" element={<Orders />} />
                </Route>

                <Route path="cart" element={<CustomerRoute />}>
                    <Route path="" element={<Cart />} />
                </Route>

                <Route path="company" element={<Company />} />
            </Route>
        </Routes>
    );
}

export default Restaurant;