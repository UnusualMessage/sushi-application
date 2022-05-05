import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import './NavLink.scss';

const NavLink = ({ to, title }) => {
    return (
        <Link className="nav-link" to={to}>
            {title}
        </Link>
    )
}

NavLink.propTypes = {
    to: PropTypes.string,
    title: PropTypes.string
}

NavLink.defaultProps = {
    to: "/",
    title: "?"
}

export default NavLink;