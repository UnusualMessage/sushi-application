import { observer } from "mobx-react-lite";

import CurrentShop from "../../../Store/CurrentShop";

const Shop = ({ shop, setActive }) => {
    const onClick = () => {
        CurrentShop.set(shop);
        setActive(false);
    }

    return (
        <div className="shop" onClick={onClick}>
            {shop}
        </div>
    );
}

export default observer(Shop);