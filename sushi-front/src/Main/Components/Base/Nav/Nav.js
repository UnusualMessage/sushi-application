import NavLink from './NavLink';
import NavCategoryLink from './NavCategoryLink';

import './Nav.scss';

const Nav = () => {
    return (
        <>
            <nav className="nav">
                <div className="nav-content">
                    <NavLink text="АКЦИИ" to="/discounts" />
                    <NavCategoryLink text="СЕТЫ" to="/СЕТЫ" />
                    <NavCategoryLink text="ПОКЕ" to="/ПОКЕ" />
                    <NavCategoryLink text="РОЛЛЫ" to="/РОЛЛЫ" />
                    <NavCategoryLink text="СУШИ" to="/СУШИ" />
                    <NavCategoryLink text="ЗАПЕЧЕННЫЕ РОЛЛЫ" to="/ЗАПЕЧЕННЫЕ РОЛЛЫ" />
                    <NavCategoryLink text="НАПИТКИ" to="/НАПИТКИ" />
                    <NavCategoryLink text="ДЕСЕРТЫ" to="/ДЕСЕРТЫ" />
                    <NavCategoryLink text="ДОПОЛНИТЕЛЬНО" to="/ДОПОЛНИТЕЛЬНО" />
                    <NavLink text="КОМПАНИЯ" to="/company" />
                    <NavLink text="ПЕСОЧНИЦА" to="/sandbox" />
                </div>
            </nav>
        </>
    )
}

export default Nav;