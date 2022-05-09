import { useEffect } from "react";

import CategoriesStore from "../../../Stores/CategoriesStore";

import "./SelectInput.scss";

const SelectInput = ({ value, onChange, name }) => {
    useEffect(() => {
        CategoriesStore.getCategories();
    }, []);

    return(
        <div className="input-container">
            <select className="select-input" name={name} value={value} onChange={onChange}>
                {
                    CategoriesStore.categories?.map((category) => {
                        return <option key={category.id} value={category.name} label={category.name} />
                    })
                }
            </select>
        </div>
    );
}

export default SelectInput;