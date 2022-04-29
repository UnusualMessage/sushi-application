import Header from "./Components/Base/Header/Header";
import Nav from "./Components/Base/Nav/Nav";
import Footer from "./Components/Base/Footer/Footer";
import Shopping from "./Components/Pages/Shopping/Shopping";

import './Main.scss';

const Main = () => {
    return(
        <>
            <Header/>
            <Nav/>
            <Shopping/>
            <Footer/>
        </>
    )
}

export default Main;