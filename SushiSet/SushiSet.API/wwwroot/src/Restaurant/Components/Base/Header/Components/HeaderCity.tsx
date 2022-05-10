import { observer } from "mobx-react-lite";

const HeaderCity = ({ city, setActive }) => {
    // const chooseCity = () => {
    //     CurrentCity.set(city);
    //     setActive(false);
    // }

    return (
        <div className="city">
            {city}
        </div>
    );
}

export default observer(HeaderCity);