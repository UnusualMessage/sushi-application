import NavLink from './NavLink';
import NavCategoryLink from './NavCategoryLink';

import './Nav.scss';

const Nav = () => {
    return (
        <>
            <nav className="nav">
                <div className="nav-content">
                    <NavCategoryLink text="СЕТЫ" to="/сеты" />
                    <NavCategoryLink text="ПОКЕ" to="/поке" />
                    <NavCategoryLink text="РОЛЛЫ" to="/роллы" />
                    <NavCategoryLink text="СУШИ" to="/суши" />
                    <NavCategoryLink text="ЗАПЕЧЕННЫЕ РОЛЛЫ" to="/запеченные роллы" />
                    <NavCategoryLink text="НАПИТКИ" to="/напитки" />
                    <NavCategoryLink text="ДЕСЕРТЫ" to="/десерты" />
                    <NavCategoryLink text="ДОПОЛНИТЕЛЬНО" to="/дополнительно" />
                    <NavLink text="КОМПАНИЯ" to="/company" />
                    <NavLink text="ПЕСОЧНИЦА" to="/sandbox" />
                </div>
            </nav>
        </>
    )
}

export default Nav;