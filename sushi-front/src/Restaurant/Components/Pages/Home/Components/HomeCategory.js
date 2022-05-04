import { Link } from "react-router-dom";

import "../Styles/HomeCategory.scss";

const HomeCategory = ({ image, category }) => {
    return(
        <Link className="home-category" to={"/category/" + category.toLowerCase()}>
            <img alt="" src={image}/>
            <span className="home-category-tip">{category}</span>
        </Link>
    );
}

export default HomeCategory;