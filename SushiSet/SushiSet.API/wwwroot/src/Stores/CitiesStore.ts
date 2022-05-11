import { makeAutoObservable, runInAction } from "mobx";

import ICreateCity from "../Interfaces/ICreateCity";
import ICity from "../Interfaces/ICity";
import CitiesService from "../Services/CitiesService/CitiesService";

class CitiesStore {
    cities : ICity[] = [];
    city : string = localStorage.getItem("city") ? localStorage.getItem("city") : "Калуга";

    citiesService : CitiesService = null;

    constructor() {
        makeAutoObservable(this);

        this.citiesService = new CitiesService();
    }

    get = () => {
        return this.cities;
    }

    getCity = () => {
        return this.city;
    }

    getCities = async () => {
        try {
            const data = await this.citiesService.get();

            runInAction(() => {
                this.cities = data;
            });

        } catch(error) {

        }
    }

    getCityById = async (id : string) => {
        try {
            const data = await this.citiesService.getById(id);
            
            runInAction(() => {
                this.city = data;
            });

        } catch(error) {

        }
    }

    addCity = async (newCity : ICreateCity) => {
        try {
            const data = await this.citiesService.create(newCity);

            runInAction(() => {
                this.cities.push(data);
            });

        } catch(error) {

        }
    }

    set = (city : string) => {
        this.city = city;
        localStorage.setItem("city", this.city);
    }
}

export default new CitiesStore();