import { observer } from "mobx-react-lite";
import { useState } from "react";

import EditCategoryModal from "./EditCategoryModal";
import ICategory from "../../../../../Interfaces/ICategory";

import "../Styles/Category.scss";

const Category = ({ id, picturePath, name }: ICategoryProps) => {
    const [editCategoryActive, setEditCategoryActive] = useState(false);

    const showModal = () => {
        setEditCategoryActive(true);
    }

    const category : ICategory = {
        id: id,
        name: name,
        picturePath: picturePath
    }

    return (
        <>
            <div className="category" onClick={showModal}>
                <img alt="" src={"/" + picturePath} />
                <span className="category-tip">{name}</span>
            </div>
            
            <EditCategoryModal active={editCategoryActive} setActive={setEditCategoryActive} category={category}/>
        </>
    );
}

interface ICategoryProps {
    id: string,
    picturePath: string,
    name: string
}

export default observer(Category);