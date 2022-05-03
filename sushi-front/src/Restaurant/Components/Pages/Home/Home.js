import HomeCategory from "./Components/HomeCategory";
import "./Home.scss";

const Home = () => {
    return(
        <section className="home-categories">
            <HomeCategory image="/categories/cat1.jfif" category={"Запеченные роллы"} />
            <HomeCategory image="/categories/cat2.jfif" category={"Десерты"}  />
            <HomeCategory image="/categories/cat3.jfif" category={"Напитки"} />
            <HomeCategory image="/categories/cat4.jfif" category={"Роллы"} />
            <HomeCategory image="/categories/cat5.jfif" category={"Сеты"} />
            <HomeCategory image="/categories/cat6.jfif" category={"Суши"} />

            <HomeCategory image="/categories/cat2.jfif" category={"Десерты"}  />
            <HomeCategory image="/categories/cat3.jfif" category={"Напитки"} />
            <HomeCategory image="/categories/cat4.jfif" category={"Роллы"} />

            <HomeCategory image="/categories/cat5.jfif" category={"Сеты"} />
            <HomeCategory image="/categories/cat6.jfif" category={"Суши"} />
            <HomeCategory image="/categories/cat6.jfif" category={"Суши"} />
        </section>
    );
}

export default Home;