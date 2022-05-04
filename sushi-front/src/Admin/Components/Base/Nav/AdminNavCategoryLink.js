import { Link, useNavigate } from "react-router-dom";

const AdminNavCategoryLink = (props) => {
    const navigate = useNavigate();
    
    const onClick = (e) => {
        e.preventDefault();
        navigate("/category" + props.to);
    };

    return (
        <Link className="nav-link" to={"/category" + props.to} onClick={onClick}>
            {props.text}
        </Link>
    )
}

export default AdminNavCategoryLink;