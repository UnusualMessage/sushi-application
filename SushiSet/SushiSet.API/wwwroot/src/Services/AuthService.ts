import ICustomerAuthenticate from "../Interfaces/ICustomerAuthenticate";
import ICourierAuthenticate from "../Interfaces/ICourierAuthenticate";

const customersApi = "https://localhost:44333/api/customers/";
const couriersApi = "https://localhost:44333/api/couriers/";
const adminsApi = "https://localhost:44333/api/admins/";

class AuthService {
    registerCustomer = async (customer: ICustomerAuthenticate) => {
        const options = {
            method: "POST",
            body: JSON.stringify(customer),
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
        }

        const response = await fetch(customersApi + "register", options);
        return response.json();
    }

    loginCustomer = async (customer: ICustomerAuthenticate) => {
        const options = {
            method: "POST",
            body: JSON.stringify(customer),
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
        }

        const response = await fetch(customersApi + "authenticate", options);
        return response.json();
    }

    registerCourier = async (courier: ICourierAuthenticate) => {
        const options = {
            method: "POST",
            body: JSON.stringify(courier),
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
        }

        const response = await fetch(couriersApi + "register", options);
        return response.json();
    }

    loginCourier = async (courier: ICourierAuthenticate) => {
        const options = {
            method: "POST",
            body: JSON.stringify(courier),
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
        }

        const response = await fetch(couriersApi + "authenticate", options);
        return response.json();
    }
}

export default AuthService;