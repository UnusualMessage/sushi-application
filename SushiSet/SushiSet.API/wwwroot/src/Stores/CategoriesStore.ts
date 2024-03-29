import { makeAutoObservable, runInAction } from "mobx";

import ICategory from "../Interfaces/ICategory";
import ICreateCategory from "../Services/CategoriesService/Interfaces/ICreateCategory";
import IUpdateCategory from "../Services/CategoriesService/Interfaces/IUpdateCategory";
import CategoriesService from "../Services/CategoriesService/CategoriesService";

class CategoriesStore {
    categories : ICategory[] = [];
    category : ICategory = null;

    categoriesService : CategoriesService = null;

    constructor() {
        makeAutoObservable(this);

        this.categoriesService = new CategoriesService();
    }

    get = () => {
        return this.categories;
    }

    getCategories = async () => {
        try {
            const data = await this.categoriesService.get();

            runInAction(() => {
                this.categories = data;
            });

        } catch(error) {

        }
    }

    getCategoryById = async (id : string) => {
        try {
            const data = await this.categoriesService.getById(id);
            
            runInAction(() => {
                this.category = data;
            });

        } catch(error) {

        }
    }

    addCategory = async (newCategory : ICreateCategory) => {
        try {
            const data = await this.categoriesService.create(newCategory);

            runInAction(() => {
                this.categories.push(data);
            });

        } catch(error) {

        }
    }

    edit = async (newCategory : IUpdateCategory) => {
        try {
            const data = await this.categoriesService.update(newCategory);

            runInAction(() => {
                let updatedCategory : ICategory = this.categories.find(category => data.id === category.id);
                updatedCategory.name = data.name;
                updatedCategory.picturePath = data.picturePath;
            });

        } catch(error) {

        }
    }
}

export default new CategoriesStore();