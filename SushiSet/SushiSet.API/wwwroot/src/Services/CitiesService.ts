import ICreateCity from "../Interfaces/ICreateCity";
import IUpdateCity from "../Interfaces/IUpdateCity";

const api = "https://localhost:44333/api/cities/";

class CitiesService {
    get = async () => {
        const options = {
            method: "GET",
        }

        const response = await fetch(api, options);
        return response.json();
    }
    
    getById = async (id : string) => {
        const options = {
            method: "GET",
        }

        const response = await fetch(api + id, options);
        return response.json();
    }

    create = async (newCity : ICreateCity) => {
        const options = {
            method: "POST",
            body: JSON.stringify(newCity),
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
        }

        const response = await fetch(api, options)
        return response.json();
    }

    update = async (newCity : IUpdateCity) => {
        const options = {
            method: 'PUT',
            body: JSON.stringify(newCity),
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
        }

        let response = await fetch(api, options);
        return await response.json();
    }
}

export default CitiesService;