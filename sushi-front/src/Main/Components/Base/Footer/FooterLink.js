import { Link } from "react-router-dom";

const FooterLink = (props) => {
    return (
        <Link className='footer-link' to={props.to}>
            <span className='footer-link-text'>{props.text}</span>
        </Link>
    );
}

export default FooterLink;