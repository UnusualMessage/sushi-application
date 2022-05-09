import NavLink from './NavLink';
import NavCategoryLink from './NavCategoryLink';
import { CategoryRoute } from "../../Others/RouteNames";

import './Nav.scss';

const Nav = () => {
    return (
        <>
            <nav className="nav">
                <div className="nav-content">
                    <NavCategoryLink initial={CategoryRoute} title="СЕТЫ" to="сеты" />
                    <NavCategoryLink initial={CategoryRoute} title="ПОКЕ" to="поке" />
                    <NavCategoryLink initial={CategoryRoute} title="РОЛЛЫ" to="роллы" />
                    <NavCategoryLink initial={CategoryRoute} title="СУШИ" to="суши" />
                    <NavCategoryLink initial={CategoryRoute} title="ЗАПЕЧЕННЫЕ РОЛЛЫ" to="запеченные роллы" />
                    <NavCategoryLink initial={CategoryRoute} title="НАПИТКИ" to="напитки" />
                    <NavCategoryLink initial={CategoryRoute} title="ДЕСЕРТЫ" to="десерты" />
                    <NavCategoryLink initial={CategoryRoute} title="ДОПОЛНИТЕЛЬНО" to="дополнительно" />
                    <NavLink title="КОМПАНИЯ" to="/company" />
                </div>
            </nav>
        </>
    )
}

export default Nav;