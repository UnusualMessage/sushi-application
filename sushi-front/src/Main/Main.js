import { Route, Routes } from "react-router-dom";

import Wrapper from "./Components/Base/Wrapper";
import Cart from "./Components/Pages/Cart/Cart";
import Shopping from "./Components/Pages/Shopping/Shopping";

const Main = () => {
    return (
        <Routes>
            <Route exact path="/shopping/:category" element={<> <Wrapper> <Shopping /> </Wrapper></>}/>
            <Route exact path="/cart" element={<> <Wrapper> <Cart /> </Wrapper></>} />
        </Routes>
    );
}

export default Main;