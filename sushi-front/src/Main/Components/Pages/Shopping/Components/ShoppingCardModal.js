import '../Styles/ShoppingCardModal.scss';

const ShoppingCardModal = ({ active, setActive, children }) => {
    return (
        <div className={active ? "shopping-card-modal-active" : "shopping-card-modal-inactive"} onMouseDown={() => setActive(false)}>
            <div className="shopping-card-modal-content" onMouseDown={(e) => (e.stopPropagation())}>
                {children}
            </div>
        </div>
    );
}

export default ShoppingCardModal;