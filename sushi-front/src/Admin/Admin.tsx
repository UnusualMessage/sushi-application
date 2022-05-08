import { Routes, Route } from "react-router-dom";

import Wrapper from "./Components/Base/Wrapper";

const Admin = () => {
    return(
        <Routes>
            <Route path="*" element={<Wrapper />}>

            </Route>
        </Routes>
    );
}

export default Admin;