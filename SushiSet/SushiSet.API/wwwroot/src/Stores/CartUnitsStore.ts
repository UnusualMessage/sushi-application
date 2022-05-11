import { makeAutoObservable, runInAction } from "mobx";

import ICartUnit from "../Interfaces/ICartUnit";
import CartUnitsService from "../Services/CartUnitsService/CartUnitsService";
import ICreateCartUnit from "../Services/CartUnitsService/Interfaces/ICreateCartUnit";
import IUpdateCartUnit from "../Services/CartUnitsService/Interfaces/IUpdateCartUnit";

class CartUnitsStore {
    cartUnits : ICartUnit[] = [];
    current : ICartUnit;
    
    cartUnitsService : CartUnitsService = null;

    constructor() {
        makeAutoObservable(this);

        this.cartUnitsService = new CartUnitsService();
    }

    getNewCount = (id : string) => {
        this.getCartUnits();
        return this.cartUnits?.find(cartUnit => cartUnit.item.id === id)?.count
    }

    getIdByItemId = (id : string) => {
        this.getCartUnits();
        return this.cartUnits?.find(cartUnit => cartUnit.item.id === id).id
    }

    get = () => {
        return this.cartUnits;
    }
    
    isEmpty = () => {
        return this.cartUnits.length === 0;
    }

    getTotalPrice = () => {
        return this.cartUnits.map((cartUnit : ICartUnit) => cartUnit.item.price * cartUnit.count).reduce((prev : number, curr : number) => prev + curr, 0);
    }

    getCartUnits = async () => {
        try {
            const data = await this.cartUnitsService.get();

            runInAction(() => {
                this.cartUnits = data;
            });

        } catch(error) {

        }
    }

    createCartUnit = async (newCartUnit : ICreateCartUnit) => {
        try {
            const data = await this.cartUnitsService.create(newCartUnit);

            runInAction(() => {
                this.cartUnits.push(data);
            });

        } catch(error) {

        }
    }

    editCartUnit = async (newCartUnit : IUpdateCartUnit) => {
        try {
            const data = await this.cartUnitsService.update(newCartUnit);

            runInAction(() => {
                let updatedCategory : ICartUnit = this.cartUnits.find(cartUnit => data.id === cartUnit.id);
                updatedCategory.count = data.count;
            });

        } catch(error) {

        }
    }

    deleteCartUnit = async (id: string) => {
        try {
            const data = await this.cartUnitsService.delete(id);

            runInAction(() => {
                this.cartUnits = this.cartUnits.filter(cartUnit => data?.id === cartUnit.id);
            });

        } catch(error) {

        }
    }
}

export default new CartUnitsStore();