import { Link } from "react-router-dom";
import CurrentCategory from "../../Store/CurrentCategory";

import './NavLink.scss';

const NavLink = (props) => {
    const onMouseDown = (e) => {
        e.preventDefault();
        CurrentCategory.set(props.text);
    };

    return (
        <Link className="nav-link" to={"/shopping/" + props.to} onMouseDown={onMouseDown}>
            <span className="link-text">{props.text}</span>
        </Link>
    )
}

export default NavLink;