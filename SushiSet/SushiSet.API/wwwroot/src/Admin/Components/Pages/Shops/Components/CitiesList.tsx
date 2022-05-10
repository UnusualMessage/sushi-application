import { observer } from "mobx-react-lite";
import { useEffect } from "react";

import ICity from "../../../../../Interfaces/ICity";
import CitiesStore from "../../../../../Stores/CitiesStore";
import City from "./City";

import "../Styles/CitiesList.scss";

const CitiesList = () => {
    useEffect(() => {
        CitiesStore.getCities();
    }, [])

    return(
        <div className="cities-list">
            {
                CitiesStore.cities?.map((city : ICity) => {
                    return <City key={city.id} id={city.id} name={city.name} shops={city.shops} />
                })
            }
        </div>
    );
}

export default observer(CitiesList);