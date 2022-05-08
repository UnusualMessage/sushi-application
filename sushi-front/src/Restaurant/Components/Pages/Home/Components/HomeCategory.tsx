import { Link } from "react-router-dom";

import { CategoryRoute } from "../../../Others/RouteNames";

import "../Styles/HomeCategory.scss";

const HomeCategory = ({ path, category } : IHomeCategoryProps) => {
    return(
        <Link className="home-category" to={CategoryRoute + category.toLowerCase()}>
            <img alt="" src={path}/>
            <span className="home-category-tip">{category}</span>
        </Link>
    );
}

interface IHomeCategoryProps {
    path: string,
    category: string
}

export default HomeCategory;