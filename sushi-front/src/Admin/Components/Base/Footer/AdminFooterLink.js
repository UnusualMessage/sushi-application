import { Link } from "react-router-dom";

const AdminFooterLink = (props) => {
    const onMouseDown = (e) => {
        e.preventDefault();
    };

    return (
        <Link className='footer-link' to={"/category/" + props.to} onMouseDown={onMouseDown}>
            {props.text}
        </Link>
    );
}

export default AdminFooterLink;