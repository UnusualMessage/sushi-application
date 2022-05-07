import { Link } from "react-router-dom";

import { CategoryRoute } from "../../../Others/RouteNames";

const FooterLink = ({ to, title } : IFooterLinkProps) => {
    return (
        <Link className='footer-link' to={"/" + CategoryRoute + "/" + to}>
            {title}
        </Link>
    );
}

interface IFooterLinkProps {
    to: string,
    title: string
}

export default FooterLink;