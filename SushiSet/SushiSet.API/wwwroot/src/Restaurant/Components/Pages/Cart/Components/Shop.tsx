import { observer } from "mobx-react-lite";

const Shop = ({ shop, setActive }) => {
    // const chooseShop = () => {
    //     CurrentShop.set(shop);
    //     setActive(false);
    // }

    return (
        <div className="shop">
            {shop}
        </div>
    );
}

export default observer(Shop);