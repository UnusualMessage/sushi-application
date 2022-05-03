import { useNavigate } from "react-router-dom";

import CurrentCategory from "../../../Store/CurrentCategory";

import "../Styles/HomeCategory.scss";

const HomeCategory = ({ image, category }) => {
    const navigate = useNavigate();

    const onImageClick = (e) => {
        e.preventDefault();
        navigate("/category/" + category.toLowerCase());
        CurrentCategory.set(category);
    }

    return(
        <div className="home-category" onClick={onImageClick}>
            <img alt="" src={image}/>
            <span className="home-category-tip">{category}</span>
        </div>
    );
}

export default HomeCategory;