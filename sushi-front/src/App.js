import { Routes, Route } from "react-router-dom"

import Main from "./Main/Main";

import './App.scss';
import './Main/Main.scss';

const App = () => {
    return (
        <Routes>
            <Route exact path="/*" element={<Main/>}/>
        </Routes>
    )
}

export default App;