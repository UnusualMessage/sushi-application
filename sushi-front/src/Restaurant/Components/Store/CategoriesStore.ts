import { makeAutoObservable } from "mobx";

import ICategory from "../Interfaces/ICategory";

class CategoriesStore {
    categories : ICategory = null;

    constructor() {
        makeAutoObservable(this);
    }
}

export default new CategoriesStore();