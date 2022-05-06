import { Outlet } from "react-router-dom";

import ItemsTitle from "./Components/ItemsTitle";

const Category = () => {
    return (
        <>
            <ItemsTitle />
            <Outlet />
        </>
    );
}

export default Category;