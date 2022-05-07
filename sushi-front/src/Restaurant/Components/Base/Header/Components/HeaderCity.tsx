import { observer } from "mobx-react-lite";

import CurrentCity from "../../../Store/CurrentCity";

const HeaderCity = ({ city, setActive }) => {
    const chooseCity = () => {
        CurrentCity.set(city);
        setActive(false);
    }

    return (
        <div className="city" onClick={chooseCity}>
            {city}
        </div>
    );
}

export default observer(HeaderCity);