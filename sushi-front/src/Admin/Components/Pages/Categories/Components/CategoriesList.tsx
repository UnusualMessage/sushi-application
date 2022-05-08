import { observer } from "mobx-react-lite";
import { useEffect } from "react";

import Category from "./Category";
import CategoriesStore from "../../../../../Restaurant/Components/Store/CategoriesStore";

import "../Styles/CategoriesList.scss";

const CategoriesList = () => {
    useEffect(() => {
        CategoriesStore.getCategories();
    }, [])

    return(
        <section className="categories">
            {
                CategoriesStore.categories.map((category) => {
                    return <Category
                        key={category.id}
                        id={category.id}
                        picturePath={category.picturePath}
                        name={category.name}
                    />
                })
            }
        </section>
    );
}

export default observer(CategoriesList);