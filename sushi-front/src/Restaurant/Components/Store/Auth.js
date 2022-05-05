import { makeAutoObservable } from "mobx";

class Auth {
    isAuth = localStorage.getItem("auth") ? localStorage.getItem("auth") === "true" : false;
    role = localStorage.getItem("role") ? localStorage.getItem("role") : "guest";

    constructor() {
        makeAutoObservable(this);
    }

    saveToLocalStorage() {
        localStorage.setItem("auth", this.isAuth);
        localStorage.setItem("role", this.role);
    }

    isCustomer() {
        return this.role.toLowerCase() === "customer" && this.isAuth;
    }

    isCourier() {
        return this.role.toLowerCase() === "courier" && this.isAuth;
    }

    isGuest() {
        return this.isAuth;
    }

    loginAsCustomer() {
        this.isAuth = true;
        this.role = "customer";
        this.saveToLocalStorage();
    }

    loginAsCorier() {
        this.isAuth = true;
        this.role = "courier";
        this.saveToLocalStorage();
    }

    register() {
        this.isAuth = true;
        this.saveToLocalStorage();
    }

    logout() {
        this.isAuth = false;
        this.role =  "guest";
        this.saveToLocalStorage();
    }
}

export default new Auth();