import { Route, Routes } from "react-router-dom";

import Wrapper from "./Components/Base/Wrapper";
import ShoppingCart from "./Components/Pages/Cart/ShoppingCart";
import Category from "./Components/Pages/Category/Category";

const Main = () => {
    return (
        <Routes>
            <Route exact path="/category/:category" element={<> <Wrapper> <Category /> </Wrapper></>}/>
            <Route exact path="/cart" element={<> <Wrapper> <ShoppingCart /> </Wrapper></>} />
        </Routes>
    );
}

export default Main;