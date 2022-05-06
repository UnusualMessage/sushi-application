import NavLink from './NavLink';
import NavCategoryLink from './NavCategoryLink';

import './Nav.scss';

const Nav = () => {
    return (
        <>
            <nav className="nav">
                <div className="nav-content">
                    <NavCategoryLink title="СЕТЫ" to="/сеты" />
                    <NavCategoryLink title="ПОКЕ" to="/поке" />
                    <NavCategoryLink title="РОЛЛЫ" to="/роллы" />
                    <NavCategoryLink title="СУШИ" to="/суши" />
                    <NavCategoryLink title="ЗАПЕЧЕННЫЕ РОЛЛЫ" to="/запеченные роллы" />
                    <NavCategoryLink title="НАПИТКИ" to="/напитки" />
                    <NavCategoryLink title="ДЕСЕРТЫ" to="/десерты" />
                    <NavCategoryLink title="ДОПОЛНИТЕЛЬНО" to="/дополнительно" />
                    <NavLink title="КОМПАНИЯ" to="/company" />
                    <NavLink title="ПЕСОЧНИЦА" to="/sandbox" />
                </div>
            </nav>
        </>
    )
}

export default Nav;