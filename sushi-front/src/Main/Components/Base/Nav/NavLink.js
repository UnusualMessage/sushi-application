import { Link } from "react-router-dom";

import './NavLink.scss';

const NavLink = (props) => {
    return (
        <Link className="nav-link" to={props.to}>
            {props.text}
        </Link>
    )
}

export default NavLink;