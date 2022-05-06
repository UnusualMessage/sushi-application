import { Link } from "react-router-dom";
import { CategoryRoute } from "../../Others/ClientRoutes";

import './NavLink.scss';

const NavCategoryLink = ({ to, title } : INavCategoryLinkProps) => {
    return (
        <Link className="nav-link" to={"/" + CategoryRoute + to}>
            {title}
        </Link>
    )
}

interface INavCategoryLinkProps {
    to: string,
    title: string
}

export default NavCategoryLink;