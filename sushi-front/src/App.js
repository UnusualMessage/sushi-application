import { Routes, Route } from "react-router-dom"

import Main from "./Main/Main";

import './App.scss';

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<Main/>}/>
        </Routes>
    )
}

export default App;