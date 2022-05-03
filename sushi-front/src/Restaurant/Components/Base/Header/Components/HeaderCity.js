import { observer } from "mobx-react-lite";
import CurrentCity from "../../../Store/CurrentCity";

const HeaderCity = observer((props) => {
    const onClick = (e) => {
        e.preventDefault();

        CurrentCity.set(props.city);
        props.setActive(false);
    }

    return (
        <div className="city" onClick={onClick}>
            {props.city}
        </div>
    );
});

export default HeaderCity;