import { Link } from "react-router-dom";

import { CategoryRoute } from "../../../Others/RouteNames";

import "../Styles/HomeCategory.scss";

const HomeCategory = ({ picturePath, name } : IHomeCategoryProps) => {
    return(
        <Link className="home-category" to={CategoryRoute + name.toLowerCase()}>
            <img alt="" src={"/" + picturePath}/>
            <span className="home-category-tip">{name}</span>
        </Link>
    );
}

interface IHomeCategoryProps {
    picturePath: string,
    name: string
}

export default HomeCategory;