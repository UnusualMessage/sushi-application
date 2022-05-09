import ICreateItem from "../Interfaces/ICreateItem";
import IUpdateItem from "../Interfaces/IUpdateItem";

const api = "https://localhost:44333/api/items/";

class ItemsService {
    get = async () => {
        const options = {
            method: "GET",
        }

        const response = await fetch(api, options);
        return response.json();
    }

    getByCategory = async (category: string) => {
        const options = {
            method: "GET",
        }
        const query = "sieved?Filters=Category==" + category.toUpperCase();

        const response = await fetch(api + query, options);
        return response.json();
    }

    getById = async (id: string) => {
        const options = {
            method: "GET",
        }

        const response = await fetch(api + id, options);
        return response.json();
    }

    create = async (newItem: ICreateItem) => {
        const form = new FormData();

        form.append("name", newItem.name);
        form.append("description", newItem.description);
        form.append("picture", newItem.picture);
        form.append("price", newItem.price.toString());
        form.append("category", newItem.category);

        const options = {
            method: "POST",
            body: form
        }

        const response = await fetch(api, options)
        return response.json();
    }

    update = async (newItem : IUpdateItem) => {
        const options = {
            method: 'PUT',
            body: JSON.stringify(newItem),
        }

        let response = await fetch(api, options);
        return await response.json();
    }
}

export default ItemsService;