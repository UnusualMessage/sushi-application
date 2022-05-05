import PropTypes from "prop-types";

import './Modal.scss';

const Modal = ({ active, setActive, children }) => {
    return (
        <div className={active ? "modal modal-active" : "modal"} onMouseDown={() => setActive(false)}>
            <div className="modal-content" onMouseDown={(e) => (e.stopPropagation())}>
                {children}
            </div>
        </div>
    );
}

Modal.propTypes = {
    active: PropTypes.bool.isRequired,
    setActive: PropTypes.func.isRequired,
    children: PropTypes.element
}

Modal.defaultProps = {
    children: <></>
}

export default Modal;