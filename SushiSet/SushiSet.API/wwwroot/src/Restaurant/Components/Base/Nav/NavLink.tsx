import { Link } from "react-router-dom";

import './NavLink.scss';

const NavLink = ({ to, title } : INavLinkProps) => {
    return (
        <Link className="nav-link" to={to}>
            {title}
        </Link>
    )
}

interface INavLinkProps {
    to: string,
    title: string
}

export default NavLink;