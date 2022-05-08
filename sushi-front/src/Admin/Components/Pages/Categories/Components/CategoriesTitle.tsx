import { observer } from "mobx-react-lite";
import { useState } from "react";

import AddCategoryModal from "./AddCategoryModal";

import "../Styles/CategoriesTitle.scss";

const CategoriesTitle = () => {
    const [addingCategoryActive, setAddingCategoryActive] = useState(false);

    const showModal = () => {
        setAddingCategoryActive(true);
    }

    return (
        <section className='categories-title'>
            <h1>
                Категории
            </h1>

            <span className="categories-add" onClick={showModal}>
                Добавить
            </span>

            <AddCategoryModal active={addingCategoryActive} setActive={setAddingCategoryActive}/>
        </section>
    )
}

export default observer(CategoriesTitle);