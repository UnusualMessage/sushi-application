import { observer } from "mobx-react-lite";

import CurrentShop from "../../../../../Stores/CurrentShop";

const Shop = ({ shop, setActive }) => {
    const chooseShop = () => {
        CurrentShop.set(shop);
        setActive(false);
    }

    return (
        <div className="shop" onClick={chooseShop}>
            {shop}
        </div>
    );
}

export default observer(Shop);