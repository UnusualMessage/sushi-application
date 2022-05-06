import HomeCategory from "./Components/HomeCategory";

import "./Home.scss";

const Home = () => {
    return(
        <section className="home-categories">
            <HomeCategory path="/categories/cat1.jfif" category={"Запеченные роллы"} />
            <HomeCategory path="/categories/cat2.jfif" category={"Десерты"}  />
            <HomeCategory path="/categories/cat3.jfif" category={"Напитки"} />
            <HomeCategory path="/categories/cat4.jfif" category={"Роллы"} />
            <HomeCategory path="/categories/cat5.jfif" category={"Сеты"} />
            <HomeCategory path="/categories/cat6.jfif" category={"Суши"} />

            <HomeCategory path="/categories/cat2.jfif" category={"Десерты"}  />
            <HomeCategory path="/categories/cat3.jfif" category={"Напитки"} />
            <HomeCategory path="/categories/cat4.jfif" category={"Роллы"} />

            <HomeCategory path="/categories/cat5.jfif" category={"Сеты"} />
            <HomeCategory path="/categories/cat6.jfif" category={"Суши"} />
            <HomeCategory path="/categories/cat6.jfif" category={"Суши"} />
        </section>
    );
}

export default Home;