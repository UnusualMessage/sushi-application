import { observer } from "mobx-react-lite";

import CurrentCity from "../../../Store/CurrentCity";

const HeaderCity = ({ city, setActive }) => {
    const onClick = () => {
        CurrentCity.set(city);
        setActive(false);
    }

    return (
        <div className="city" onClick={onClick}>
            {city}
        </div>
    );
}

export default observer(HeaderCity);