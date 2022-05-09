import { observer } from "mobx-react-lite";
import { useEffect } from "react";

import CategoriesStore from "../../../../Stores/CategoriesStore";
import HomeCategory from "./Components/HomeCategory";

import "./Home.scss";

const Home = () => {
    useEffect(() => {
        CategoriesStore.getCategories();
    }, [])

    return(
        <section className="home-categories">
            {
                CategoriesStore.categories.map((category) => {
                    return <HomeCategory
                        key={category.id}
                        picturePath={category.picturePath}
                        name={category.name}
                    />
                })
            }
        </section>
    );
}

export default observer(Home);