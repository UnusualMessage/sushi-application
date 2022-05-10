import { useEffect } from "react";
import { observer } from "mobx-react-lite";

import Modal from "../../../Others/Modal";
import HeaderCity from "./HeaderCity";
import CitiesStore from "../../../../../Stores/CitiesStore";
import ICity from "../../../../../Interfaces/ICity";

import "../Styles/CityChoice.scss";

const CityChoice = ({ active, setActive }) => {
    useEffect(() => {
        CitiesStore.getCities();
    }, []);

    return(
        <Modal active={active} setActive={setActive}>
            <div className="city-choice-container">
                <div className="choice-toolbar">
                    <h1 className="choice-title">Выберите город</h1>
                    <span className="choice-close" onClick={() => {setActive(false)}}>Закрыть</span>
                </div>

                <div className="header-cities">
                    {
                        CitiesStore.get().map((city : ICity) => {
                            return <HeaderCity key={city.id} city={city.name} setActive={setActive}/>
                        })
                    }
                </div>
            </div>
        </Modal>
    );
}

export default observer(CityChoice);