import { useEffect } from 'react';

import NavLink from './NavLink';
import NavCategoryLink from './NavCategoryLink';
import { CategoryRoute } from "../../Others/RouteNames";
import CategoriesStore from '../../../../Stores/CategoriesStore';

import './Nav.scss';
import { observer } from 'mobx-react-lite';

const Nav = () => {
    useEffect(() => {
        CategoriesStore.getCategories();
    }, [])

    return (
        <>
            <nav className="nav">
                <div className="nav-content">
                    {
                        CategoriesStore.categories.map((category) => {
                            return <NavCategoryLink
                                key={category.id}
                                initial={CategoryRoute}
                                title={category.name}
                                to={category.name.toLowerCase()}
                            />
                        })
                    }

                    <NavLink title="КОМПАНИЯ" to="/company" />
                </div>
            </nav>
        </>
    )
}

export default observer(Nav);