import ICreateCategory from "../Interfaces/ICreateCategory";
import IUpdateCategory from "../Interfaces/IUpdateCategory";

const api = "https://localhost:44333/api/categories/";

class CategoriesService {
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

    create = async (newCategory : ICreateCategory) => {
        const form = new FormData();

        form.append("name", newCategory.name);
        form.append("picture", newCategory.picture);

        const options = {
            method: "POST",
            body: form
        }

        const response = await fetch(api, options)
        return response.json();
    }

    update = async (newCategory : IUpdateCategory) => {
        const form = new FormData();

        form.append("id", newCategory.id);
        form.append("name", newCategory.name);
        form.append("picture", newCategory.picture);

        const options = {
            method: 'PUT',
            body: form,
        }

        let response = await fetch(api, options);
        return await response.json();
    }
}

export default CategoriesService;