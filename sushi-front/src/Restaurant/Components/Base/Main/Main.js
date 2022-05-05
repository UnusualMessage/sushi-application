import PropTypes from "prop-types";

import "./Main.scss";

const Main = ({ children }) => {
    return (
        <main className='main'>
            <div className='main-content'>
                {children}
            </div>
        </main>
    );
}

Main.propTypes = {
    children: PropTypes.element
}

Main.defaultProps = {
    children: <></>
}

export default Main;