import { Link } from "react-router-dom";
import { CategoryRoute } from "../../Others/ClientRoutes";

import './NavLink.scss';

const NavCategoryLink = (props) => {
    return (
        <Link className="nav-link" to={"/" + CategoryRoute + props.to}>
            {props.text}
        </Link>
    )
}

export default NavCategoryLink;