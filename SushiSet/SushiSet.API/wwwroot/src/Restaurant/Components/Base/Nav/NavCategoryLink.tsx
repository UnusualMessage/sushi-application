import { Link } from "react-router-dom";

import './NavLink.scss';

const NavCategoryLink = ({ initial, to, title } : INavCategoryLinkProps) => {
    return (
        <Link className="nav-link" to={initial + to}>
            {title}
        </Link>
    )
}

interface INavCategoryLinkProps {
    initial: string,
    to: string,
    title: string
}

export default NavCategoryLink;