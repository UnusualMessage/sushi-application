import { Link } from "react-router-dom";

import CurrentCategory from "../../../Store/CurrentCategory";

const FooterLink = (props) => {
    const onMouseDown = (e) => {
        e.preventDefault();
        CurrentCategory.set(props.text);
    };

    return (
        <Link className='footer-link' to={"/shopping/" + props.to} onMouseDown={onMouseDown}>
            <span className='footer-link-text'>{props.text}</span>
        </Link>
    );
}

export default FooterLink;