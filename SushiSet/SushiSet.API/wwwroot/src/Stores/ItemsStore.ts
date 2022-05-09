import { makeAutoObservable, runInAction } from "mobx";

import ICreateItem from "../Interfaces/ICreateItem";
import IItem from "../Interfaces/IItem";
import IUpdateItem from "../Interfaces/IUpdateItem";
import ItemsService from "../Services/ItemsService";

class ItemsStore {
    items : IItem[] = [];
    item : IItem = null;

    itemsService : ItemsService = null

    constructor() {
        makeAutoObservable(this);

        this.itemsService = new ItemsService();
    }

    getItems = async () => {
        try {
            const data = await this.itemsService.get();

            runInAction(() => {
                this.items = data;
            });

        } catch(error) {

        }
    }

    getItemsInCategory = async (category : string) => {
        try {
            const data = await this.itemsService.getByCategory(category);

            runInAction(() => {
                this.items = data;
            });

        } catch(error) {

        }
    }

    getItemById = async (id : string) => {
        try {
            const data = await this.itemsService.getById(id);

            runInAction(() => {
                this.item = data;
            });

        } catch(error) {

        }
    }

    addItem = async (newItem : ICreateItem) => {
        try {
            const data = await this.itemsService.create(newItem);

            runInAction(() => {
                this.items.push(data);
            });

        } catch(error) {

        }
    }

    sort = async (isAscending : boolean) => {
        if (isAscending) {
            this.items.sort((a, b) => a.price > b.price ? 1 : -1);
        } else {
            this.items.sort((a, b) => a.price < b.price ? 1 : -1);
        }
    }

    edit = async (newItem : IUpdateItem) => {
        try {
            const data = await this.itemsService.update(newItem);

            runInAction(() => {
                let updatedItem : IItem = this.items.find(category => data.id === category.id);

                updatedItem.name = data.name;
                updatedItem.picturePath = data.picturePath;
                updatedItem.category = data.category;
                updatedItem.description = data.description;
                updatedItem.price = data.price;
            });

        } catch(error) {

        }
    }
}

export default new ItemsStore();