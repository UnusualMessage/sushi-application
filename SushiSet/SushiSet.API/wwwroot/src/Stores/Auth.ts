import { makeAutoObservable, runInAction } from "mobx";

import ICourierAuthenticate from "../Interfaces/ICourierAuthenticate";
import ICustomerAuthenticate from "../Interfaces/ICustomerAuthenticate";
import AuthService from "../Services/AuthService";

class Auth {
    accessToken : string = null;

    authService : AuthService = null;

    isAuth : boolean = localStorage.getItem("auth") ? localStorage.getItem("auth") === "true" : false;
    role : string = localStorage.getItem("role") ? localStorage.getItem("role") : "guest";

    constructor() {
        makeAutoObservable(this);

        this.authService = new AuthService();
    }

    registerCustomer = async (customer: ICustomerAuthenticate) => {
        try {
            const data = await this.authService.registerCustomer(customer);

            runInAction(() => {
                this.accessToken = data.accessToken;
            });

        } catch(error) {

        }
    } 

    loginCustomer = async (customer: ICustomerAuthenticate) => {
        try {
            const data = await this.authService.loginCustomer(customer);

            runInAction(() => {
                this.accessToken = data.accessToken;
            });

        } catch(error) {

        }
    }

    registerCourier = async (courier: ICourierAuthenticate) => {
        try {
            const data = await this.authService.registerCourier(courier);

            runInAction(() => {
                this.accessToken = data.accessToken;
            });

        } catch(error) {

        }
    } 

    loginCourier = async (courier: ICourierAuthenticate) => {
        try {
            const data = await this.authService.loginCourier(courier);

            runInAction(() => {
                this.accessToken = data.accessToken;
            });

        } catch(error) {

        }
    } 

    saveToLocalStorage() {
        localStorage.setItem("auth", this.isAuth.toString());
        localStorage.setItem("role", this.role);
    }

    isCustomer() {
        return this.role.toLowerCase() === "customer" && this.isAuth;
    }

    isCourier() {
        return this.role.toLowerCase() === "courier" && this.isAuth;
    }

    isGuest() {
        return !this.isAuth;
    }

    loginAsCustomer() {
        this.isAuth = true;
        this.role = "customer";
        this.saveToLocalStorage();
    }

    loginAsCourier() {
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