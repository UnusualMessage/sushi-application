import { Routes, Route } from "react-router-dom";

import Wrapper from "./Components/Base/Wrapper";
import Categories from "./Components/Pages/Categories/Categories";
import Items from "./Components/Pages/Items/Items";
import Shops from "./Components/Pages/Shops/Shops";

const Admin = () => {
    return(
        <Routes>
            <Route path="*" element={<Wrapper />}>
                <Route path="categories" element={<Categories />}>

                </Route>

                <Route path="items" element={<Items />}>

                </Route>

                <Route path="shops" element={<Shops />}>

                </Route>
            </Route>
        </Routes>
    );
}

export default Admin;