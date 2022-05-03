import { Route, Routes } from "react-router-dom";

import Wrapper from "./Components/Base/Wrapper";
import ShoppingCart from "./Components/Pages/Cart/ShoppingCart";
import Category from "./Components/Pages/Category/Category";
import ItemCards from "./Components/Pages/Category/Components/ItemCards";
import ItemPage from "./Components/Pages/Category/Components/ItemPage";
import Home from "./Components/Pages/Home/Home";

const Restaurant = () => {
    return (
        <Routes>
            <Route path="" element={<Wrapper />}>
                <Route path="" element={<Home />} />

                <Route path="category" element={<Category />}>
                    <Route path=":category" element={<ItemCards />} />
                    <Route path=":category/:id" element={<ItemPage />} />
                </Route>

                <Route path="cart" element={<ShoppingCart />} />
                <Route path="orders" element={<> </>} />
                <Route path="discounts" element={<> </>} />
                <Route path="sandbox" element={<> </>} />
                <Route path="company" element={<> </>} />
            </Route>
        </Routes>
    );
}

export default Restaurant;