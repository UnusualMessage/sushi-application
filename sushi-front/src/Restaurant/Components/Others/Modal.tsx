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

export default Modal;