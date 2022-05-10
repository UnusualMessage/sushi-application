import IUserAuthenticate from "../Interfaces/IUserAuthenticate";

const api = "https://localhost:44333/api/users/";

class AuthService {
    register = async (user: IUserAuthenticate) => {
        const options = {
            method: "POST",
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
        }

        const response = await fetch(api + "register", options);
        return response.json();
    }

    authenticate = async (user: IUserAuthenticate) => {
        const options = {
            method: "POST",
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
        }

        const response = await fetch(api + "authenticate", options);
        return response.json();
    }

    refresh = async () => {
        const options = {
            method: "POST",
            body: JSON.stringify({}),
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
        }

        const response = await fetch(api + "refresh", options);
        return response.json();
    }
}

export default AuthService;