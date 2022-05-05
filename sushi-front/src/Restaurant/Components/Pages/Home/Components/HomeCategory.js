import { Link } from "react-router-dom";

import { CategoryRoute } from "../../../Others/ClientRoutes";

import "../Styles/HomeCategory.scss";

const HomeCategory = ({ image, category }) => {
    return(
        <Link className="home-category" to={"/" + CategoryRoute + "/" + category.toLowerCase()}>
            <img alt="" src={image}/>
            <span className="home-category-tip">{category}</span>
        </Link>
    );
}

export default HomeCategory;