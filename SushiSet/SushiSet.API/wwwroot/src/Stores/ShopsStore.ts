import { makeAutoObservable, runInAction } from "mobx";

import ICreateShop from "../Services/ShopsService/Interfaces/ICreateShop";
import IShop from "../Interfaces/IShop";
import ShopsService from "../Services/ShopsService/ShopsService";

class ShopsStore {
    shops : IShop[] = [];
    shop : IShop = null;

    shopsService : ShopsService = null;

    constructor() {
        makeAutoObservable(this);

        this.shopsService = new ShopsService();
    }

    getShops = async () => {
        try {
            const data = await this.shopsService.get();

            runInAction(() => {
                this.shops = data;
            });

        } catch(error) {

        }
    }

    getShopsByCity = async (cityId: string) => {
        try {
            const data = await this.shopsService.getByCity(cityId);

            runInAction(() => {
                this.shops = data;
            });

        } catch(error) {

        }
    }

    getShopById = async (id : string) => {
        try {
            const data = await this.shopsService.getById(id);
            
            runInAction(() => {
                this.shop = data;
            });

        } catch(error) {

        }
    }

    addShop = async (newShop : ICreateShop) => {
        try {
            const data = await this.shopsService.create(newShop);

            runInAction(() => {
                this.shops.push(data);
            });

        } catch(error) {

        }
    }
}

export default new ShopsStore();