import { Link } from "react-router-dom";

const FooterLink = (props) => {
    return (
        <Link className='footer-link' to={"/category/" + props.to}>
            {props.text}
        </Link>
    );
}

export default FooterLink;