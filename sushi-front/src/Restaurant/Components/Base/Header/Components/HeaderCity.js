import { observer } from "mobx-react-lite";
import PropTypes from "prop-types";

import CurrentCity from "../../../Store/CurrentCity";

const HeaderCity = observer(({ city, setActive }) => {
    const onClick = (e) => {
        e.preventDefault();

        CurrentCity.set(city);
        setActive(false);
    }

    return (
        <div className="city" onClick={onClick}>
            {city}
        </div>
    );
});

HeaderCity.propTypes = {
    city: PropTypes.string,
    setActive: PropTypes.func.isRequired
}

HeaderCity.defaultProps = {
    city: "?"
}

export default HeaderCity;