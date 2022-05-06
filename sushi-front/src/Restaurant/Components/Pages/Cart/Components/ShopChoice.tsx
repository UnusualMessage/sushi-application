import Modal from "../../../Others/Modal";
import CartShop from "./CartShop";

import "../Styles/ShopChoice.scss";

const ShopChoice = ({ active, setActive }) => {
    return(
        <Modal active={active} setActive={setActive}>
            <div className="shop-choice-container">
                <div className="choice-toolbar">
                    <h1 className="choice-title">Выберите адрес магазина</h1>
                    <span className="choice-close" onClick={() => {setActive(false)}}>Закрыть</span>
                </div>

                <div className="shops">
                    <CartShop shop="ул. 1 д. 2" setActive={setActive}/>
                    <CartShop shop="ул. 1 д. 3" setActive={setActive}/>
                    <CartShop shop="ул. 1 д. 5" setActive={setActive}/>
                    <CartShop shop="ул. 1 д. 4" setActive={setActive}/>
                    <CartShop shop="ул. 1 д. 1" setActive={setActive}/>
                    <CartShop shop="ул. 1 д. 8" setActive={setActive}/>
                </div>
            </div>
        </Modal>
    );
}

export default ShopChoice;