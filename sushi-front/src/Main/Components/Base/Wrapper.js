import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Nav from "./Nav/Nav";

const Wrapper = (props) => {
    return (
        <>
            <Header />
            <Nav />
            {props.children}
            <Footer />
        </>
    );
}

export default Wrapper;