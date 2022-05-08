import { observer } from "mobx-react-lite";
import { useState } from "react";

import EditCategoryModal from "./EditCategoryModal";

import "../Styles/Category.scss";
import ICategory from "../../../../../Restaurant/Components/Interfaces/ICategory";

const Category = ({ path, name }: ICategoryProps) => {
    const [editCategoryActive, setEditCategoryActive] = useState(false);

    const showModal = () => {
        setEditCategoryActive(true);
    }

    const category : ICategory = {
        name: name,
        path: path
    }

    return (
        <>
            <div className="category" onClick={showModal}>
                <img alt="" src={path} />
                <span className="category-tip">{name}</span>
            </div>
            <EditCategoryModal active={editCategoryActive} setActive={setEditCategoryActive} category={category}/>
        </>
    );
}

interface ICategoryProps {
    path: string,
    name: string
}

export default observer(Category);