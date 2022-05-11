import ICreateCartUnit from "./Interfaces/ICreateCartUnit";
import IUpdateCartUnit from "./Interfaces/IUpdateCartUnit";

const api = "https://localhost:44333/api/CartUnits/";

class CartUnitsService {
    get = async () => {
        const options = {
            method: "GET",
        }

        const response = await fetch(api + "sieved", options);
        return response.json();
    }

    create = async (newCartUnit : ICreateCartUnit) => {
        console.log(newCartUnit);
        
        const options = {
            method: "POST",
            body: JSON.stringify(newCartUnit),
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
        }

        const response = await fetch(api, options)
        return response.json();
    }

    update = async (newCartUnit : IUpdateCartUnit) => {
        const options = {
            method: 'PUT',
            body: JSON.stringify(newCartUnit),
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
        }

        let response = await fetch(api, options);
        return await response.json();
    }

    delete = async (id: string) => {
        const options = {
            method: 'DELETE',
        }

        let response = await fetch(api + id, options);
        return await response.json();
    }
}

export default CartUnitsService;