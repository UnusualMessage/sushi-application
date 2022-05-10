import { observer } from "mobx-react-lite";

import CitiesStore from "../../../../../Stores/CitiesStore";

const HeaderCity = ({ city, setActive }) => {
    const chooseCity = () => {
        CitiesStore.set(city);
        setActive(false);
    }

    return (
        <div className="header-city" onClick={chooseCity}>
            {city}
        </div>
    );
}

export default observer(HeaderCity);