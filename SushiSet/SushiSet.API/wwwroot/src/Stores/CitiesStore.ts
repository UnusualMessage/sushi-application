import { makeAutoObservable, runInAction } from "mobx";

import ICreateCity from "../Interfaces/ICreateCity";
import ICity from "../Interfaces/ICity";
import CitiesService from "../Services/CitiesService";

class CitiesStore {
    cities : ICity[] = [];
    city : ICity = null;

    citiesService : CitiesService = null;

    constructor() {
        makeAutoObservable(this);

        this.citiesService = new CitiesService();
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
}

export default new CitiesStore();