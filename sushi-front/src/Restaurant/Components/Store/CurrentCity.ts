import { makeAutoObservable } from "mobx";

class CurrentCity {
    city : string = localStorage.getItem("city") ? localStorage.getItem("city") : "Москва";

    constructor() {
        makeAutoObservable(this);
    }

    set(newCity : string) {
        this.city = newCity;
        localStorage.setItem("city", newCity);
    }
}

export default new CurrentCity();