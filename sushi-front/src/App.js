import { Routes, Route } from "react-router-dom"

import Restaurant from "./Restaurant/Restaurant";
import Admin from "./Admin/Admin";

import './App.scss';
import './Restaurant/Restaurant.scss';

const App = () => {
    return (
        <Routes>
            <Route exact path="/admin" element={<Admin />} />
            <Route exact path="/*" element={<Restaurant />} />
        </Routes>
    )
}

export default App;