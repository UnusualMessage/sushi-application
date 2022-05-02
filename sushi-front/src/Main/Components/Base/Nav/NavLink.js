import { Link, useNavigate } from "react-router-dom";
import CurrentCategory from "../../Store/CurrentCategory";

import './NavLink.scss';

const NavLink = (props) => {
    const navigate = useNavigate();
    
    const onClick = (e) => {
        e.preventDefault();
        CurrentCategory.set(props.text);
        navigate("/category" + props.to);
    };

    return (
        <Link className="nav-link" to={"/category" + props.to} onClick={onClick}>
            {props.text}
        </Link>
    )
}

export default NavLink;