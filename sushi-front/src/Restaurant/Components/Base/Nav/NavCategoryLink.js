import { Link } from "react-router-dom";

import './NavLink.scss';

const NavCategoryLink = (props) => {
    return (
        <Link className="nav-link" to={"/category" + props.to}>
            {props.text}
        </Link>
    )
}

export default NavCategoryLink;