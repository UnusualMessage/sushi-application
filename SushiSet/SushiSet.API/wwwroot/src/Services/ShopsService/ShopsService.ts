import ICreateShop from "./Interfaces/ICreateShop";

const api = "https://localhost:44333/api/shops/";

class ShopsService {
    get = async () => {
        const options = {
            method: "GET",
        }

        const response = await fetch(api, options);
        return response.json();
    }

    getByCity = async (cityId: string) => {
        const options = {
            method: "GET",
        }
        const query = "sieved?Filters=CityId==" + cityId.toUpperCase();

        const response = await fetch(api + query, options);
        return response.json();
    }
    
    getById = async (id : string) => {
        const options = {
            method: "GET",
        }

        const response = await fetch(api + id, options);
        return response.json();
    }

    create = async (newShop : ICreateShop) => {
        const options = {
            method: "POST",
            body: JSON.stringify(newShop),
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
        }

        const response = await fetch(api, options)
        return response.json();
    }
}

export default ShopsService;