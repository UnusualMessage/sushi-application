import { Route, Routes } from "react-router-dom";

import Wrapper from "./Components/Base/Wrapper";
import CourierRoute from "./Components/Others/CourierRoute";
import ShoppingCart from "./Components/Pages/Cart/ShoppingCart";
import Category from "./Components/Pages/Category/Category";
import ItemCards from "./Components/Pages/Category/Components/ItemCards";
import ItemPage from "./Components/Pages/Category/Components/ItemPage";
import Courier from "./Components/Pages/Courier/Courier";
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
                    <Route path="" element={<Courier />} />
                </Route>

                <Route path="orders" element={<Orders />} />

                <Route path="cart" element={<ShoppingCart />} />
                <Route path="sandbox" element={<> </>} />
                <Route path="company" element={<> </>} />
            </Route>
        </Routes>
    );
}

export default Restaurant;