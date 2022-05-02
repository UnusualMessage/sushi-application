import { Route, Routes } from "react-router-dom";

import Wrapper from "./Components/Base/Wrapper";
import ShoppingCart from "./Components/Pages/Cart/ShoppingCart";
import Shopping from "./Components/Pages/Shopping/Shopping";

const Main = () => {
    return (
        <Routes>
            <Route exact path="/shopping/:category" element={<> <Wrapper> <Shopping /> </Wrapper></>}/>
            <Route exact path="/cart" element={<> <Wrapper> <ShoppingCart /> </Wrapper></>} />
        </Routes>
    );
}

export default Main;