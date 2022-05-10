import IUserAuthenticate from "../Interfaces/IUserAuthenticate";

const adminsApi = "https://localhost:44333/api/admins/";

class AdminAuthService {
    register = async (admin: IUserAuthenticate) => {
        const options = {
            method: "POST",
            body: JSON.stringify(admin),
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
        }

        const response = await fetch(adminsApi + "register", options);
        return response.json();
    }

    authenticate = async (admin: IUserAuthenticate) => {
        const options = {
            method: "POST",
            body: JSON.stringify(admin),
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
        }

        const response = await fetch(adminsApi + "authenticate", options);
        return response.json();
    }
}

export default AdminAuthService;