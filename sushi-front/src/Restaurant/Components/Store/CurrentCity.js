import { makeAutoObservable } from "mobx";

class CurrentCity {
    city = localStorage.getItem("city") ? localStorage.getItem("city") : "Москва";

    constructor() {
        makeAutoObservable(this);
    }

    set(newCity) {
        this.city = newCity;
        localStorage.setItem("city", newCity);
    }
}

export default new CurrentCity();