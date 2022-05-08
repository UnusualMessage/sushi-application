import { Routes, Route } from "react-router-dom";

import Wrapper from "./Components/Base/Wrapper";
import Categories from "./Components/Pages/Categories/Categories";

const Admin = () => {
    return(
        <Routes>
            <Route path="*" element={<Wrapper />}>
                <Route path="categories" element={<Categories />}>

                </Route>
            </Route>
        </Routes>
    );
}

export default Admin;