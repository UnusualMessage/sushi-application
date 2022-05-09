import { makeAutoObservable } from "mobx";

import IItem from "../Interfaces/IItem";

class ItemsStore {
    items : IItem[] = [];

    constructor() {
        makeAutoObservable(this);
    }
}

export default new ItemsStore();