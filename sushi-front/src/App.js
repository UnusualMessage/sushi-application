import { Routes, Route } from "react-router-dom"

import Main from "./Main/Main";

import './App.scss';
import './Main/Main.scss';
import Wrapper from "./Main/Components/Base/Wrapper";

const App = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Wrapper></Wrapper>}/>
            <Route exact path="/*" element={<Main/>}/>
        </Routes>
    )
}

export default App;