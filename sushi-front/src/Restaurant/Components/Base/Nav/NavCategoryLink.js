import { Link } from "react-router-dom";
import { CategoryRoute } from "../../Others/ClientRoutes";
import PropTypes from "prop-types";

import './NavLink.scss';

const NavCategoryLink = ({ to, title }) => {
    return (
        <Link className="nav-link" to={"/" + CategoryRoute + to}>
            {title}
        </Link>
    )
}

NavCategoryLink.propTypes = {
    to: PropTypes.string,
    title: PropTypes.string
}

NavCategoryLink.defaultProps = {
    to: "/",
    title: "?"
}

export default NavCategoryLink;