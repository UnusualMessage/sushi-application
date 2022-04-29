import { Link } from "react-router-dom";

const NavLink = (props) => {
    return (
        <Link className="nav-link" to={props.to}>
            <span className="link-text">{props.text}</span>
        </Link>
    )
}

export default NavLink;