import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { CategoryRoute } from "../../../Others/ClientRoutes";

const FooterLink = ({ to, title }) => {
    return (
        <Link className='footer-link' to={"/" + CategoryRoute + "/" + to}>
            {title}
        </Link>
    );
}

FooterLink.propTypes = {
    to: PropTypes.string,
    title: PropTypes.string
}

FooterLink.defaultProps = {
    to: "",
    title: "?"
}

export default FooterLink;