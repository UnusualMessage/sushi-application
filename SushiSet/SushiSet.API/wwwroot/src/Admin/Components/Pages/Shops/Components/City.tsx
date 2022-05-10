import { useState } from "react";
import { observer } from "mobx-react-lite";

import ICity from "../../../../../Interfaces/ICity";
import IShop from "../../../../../Interfaces/IShop";
import Shop from "./Shop";
import AddShopModal from "./AddShopModal";
import EditCityModal from "./EditCityModal";

import "../Styles/City.scss";

const City = ({ id, name, shops }: ICity) => {
    const [addingShopActive, setAddingShopActive] = useState(false);
    const [editCityActive, setEditCityActive] = useState(false);

    const showShopModal = () => {
        setAddingShopActive(true);
    }

    const showCityModal = () => {
        setEditCityActive(true);
    }

    return (
        <div className="city">
            <div className="city-toolbar">
                <span className="title" onClick={showCityModal}>{name}</span>
                <span className="add-city" onClick={showShopModal}>Добавить</span>
            </div>

            <div className="shops">
                {
                    shops?.map((shop: IShop) => {
                        return <Shop key={shop.id} id={shop.id} address={shop.address}/>
                    })
                }
            </div>
            
            <AddShopModal active={addingShopActive} setActive={setAddingShopActive} id={id}/>
            <EditCityModal active={editCityActive} setActive={setEditCityActive} name={name} id={id}/>
        </div>
    );
}

export default observer(City);