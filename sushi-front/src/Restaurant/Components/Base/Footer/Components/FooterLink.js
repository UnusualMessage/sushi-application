import { Link } from "react-router-dom";

import { CategoryRoute } from "../../../Others/ClientRoutes";

const FooterLink = (props) => {
    return (
        <Link className='footer-link' to={"/" + CategoryRoute + "/" + props.to}>
            {props.text}
        </Link>
    );
}

export default FooterLink;