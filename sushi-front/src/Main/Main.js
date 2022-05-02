import { Route, Routes } from "react-router-dom";

import Wrapper from "./Components/Base/Wrapper";
import ShoppingCart from "./Components/Pages/Cart/ShoppingCart";
import Category from "./Components/Pages/Category/Category";

const Main = () => {
    return (
        <Routes>
            <Route exact path="/category/:category" element={<Wrapper> <Category /> </Wrapper>}/>
            <Route exact path="/cart" element={<Wrapper> <ShoppingCart /> </Wrapper>} />
            <Route exact path="/discounts" element={<Wrapper> </Wrapper>} />
            <Route exact path="/sandbox" element={<Wrapper> </Wrapper>} />
            <Route exact path="/company" element={<Wrapper> </Wrapper>} />
        </Routes>
    );
}

export default Main;