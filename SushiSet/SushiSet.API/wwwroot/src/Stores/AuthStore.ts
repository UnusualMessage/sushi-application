import { makeAutoObservable, runInAction } from "mobx";

import IUserAuthenticate from "../Interfaces/IUserAuthenticate";
import AuthService from "../Services/AuthService";

class AuthStore {
    accessToken : string = localStorage.getItem("access") ? localStorage.getItem("access") : null;
    isAuthenticated : boolean = false;
    isAuthorized : boolean = false;

    authService : AuthService = null;

    constructor() {
        makeAutoObservable(this);

        this.authService = new AuthService();
    }

    registerUser = async (user: IUserAuthenticate) => {
        try {
            const data = await this.authService.register(user);

            runInAction(() => {
                this.accessToken = data.accessToken;
            });

        } catch(error) {

        }
    } 

    loginUser = async (user: IUserAuthenticate) => {
        try {
            const data = await this.authService.authenticate(user);

            runInAction(() => {
                this.accessToken = data.accessToken;
                localStorage.setItem("access", this.accessToken);
            });

        } catch(error) {

        }
    }

    checkRole = async (role: string) => {
        try {
            const data = await this.authService.refresh();
            console.log(data);

            runInAction(() => {
                if (data === null) {
                    this.isAuthorized = false;
                    this.isAuthenticated = false;
                } else if (role.toLowerCase() !== data.role.toLowerCase()) {
                    this.isAuthorized = false;
                    this.isAuthenticated = true;
                } else {
                    this.accessToken = data.accessToken;
                    this.isAuthorized = true;
                }
            });

        } catch(error) {

        }
    }

    checkAuth = async () => {
        try {
            const data = await this.authService.refresh();

            runInAction(() => {
                if (data === null) {
                    this.isAuthenticated = false;
                } else {
                    this.accessToken = data.accessToken;
                    this.isAuthenticated = true;
                }
            });

        } catch(error) {

        }
    }
}

export default new AuthStore();