import { Link } from "react-router-dom";

const FooterLink = ({ initial, to, title } : IFooterLinkProps) => {
    return (
        <Link className='footer-link' to={initial + to}>
            {title}
        </Link>
    );
}

interface IFooterLinkProps {
    initial: string,
    to: string,
    title: string
}

export default FooterLink;