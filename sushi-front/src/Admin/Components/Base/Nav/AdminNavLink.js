import { Link } from "react-router-dom";

const AdminNavLink = (props) => {
    return (
        <Link className="nav-link" to={props.to}>
            {props.text}
        </Link>
    )
}

export default AdminNavLink;