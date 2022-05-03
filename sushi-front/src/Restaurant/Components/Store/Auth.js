import { makeAutoObservable } from "mobx";

class Auth {
    isAuth = localStorage.getItem("auth") ? localStorage.getItem("auth") === "true" : false;

    constructor() {
        makeAutoObservable(this);
    }

    saveToLocalStorage() {
        localStorage.setItem("auth", this.isAuth);
    }

    login() {
        this.isAuth = true;
        this.saveToLocalStorage();
    }

    register() {
        this.isAuth = true;
        this.saveToLocalStorage();
    }

    logout() {
        this.isAuth = false;
        this.saveToLocalStorage();
    }
}

export default new Auth();