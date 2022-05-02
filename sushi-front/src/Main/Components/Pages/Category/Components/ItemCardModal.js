import '../Styles/ShoppingCardModal.scss';

const ItemCardModal = ({ active, setActive, children }) => {
    return (
        <div className={active ? "modal active" : "modal"} onMouseDown={() => setActive(false)}>
            <div className="modal-content" onMouseDown={(e) => (e.stopPropagation())}>
                {children}
            </div>
        </div>
    );
}

export default ItemCardModal;