import Category from "./Category";

import "../Styles/CategoriesList.scss";

const CategoriesList = () => {
    return(
        <section className="categories">
            <Category path="/categories/cat1.jfif" name={"Запеченные роллы"} />
            <Category path="/categories/cat2.jfif" name={"Десерты"}  />
            <Category path="/categories/cat3.jfif" name={"Напитки"} />
            <Category path="/categories/cat4.jfif" name={"Роллы"} />
            <Category path="/categories/cat5.jfif" name={"Сеты"} />
            <Category path="/categories/cat6.jfif" name={"Суши"} />

            <Category path="/categories/cat2.jfif" name={"Десерты"}  />
            <Category path="/categories/cat3.jfif" name={"Напитки"} />
            <Category path="/categories/cat4.jfif" name={"Роллы"} />

            <Category path="/categories/cat5.jfif" name={"Сеты"} />
            <Category path="/categories/cat6.jfif" name={"Суши"} />
            <Category path="/categories/cat6.jfif" name={"Суши"} />
        </section>
    );
}

export default CategoriesList;