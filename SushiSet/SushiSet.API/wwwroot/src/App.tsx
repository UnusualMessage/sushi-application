import { Routes, Route } from "react-router-dom"

import Restaurant from "./Restaurant/Restaurant";
import Admin from "./Admin/Admin";

import './App.scss';
import './Restaurant/Restaurant.scss';

const App = () => {
    return (
        <Routes>
            <Route path="/admin/5051/*" element={<Admin />} />
            <Route path="/*" element={<Restaurant />} />
        </Routes>
    )
}

export default App;