import NavLink from './NavLink';

import './Nav.scss';

const Nav = () => {
    return (
        <>
            <nav className="nav">
                <div className="nav-content">
                    <NavLink text="СЕТЫ" to="/СЕТЫ" />
                    <NavLink text="ПОКЕ" to="/ПОКЕ" />
                    <NavLink text="РОЛЛЫ" to="/РОЛЛЫ" />
                    <NavLink text="СУШИ" to="/СУШИ" />
                    <NavLink text="ЗАПЕЧЕННЫЕ РОЛЛЫ" to="/ЗАПЕЧЕННЫЕ РОЛЛЫ" />
                    <NavLink text="НАПИТКИ" to="/НАПИТКИ" />
                    <NavLink text="ДЕСЕРТЫ" to="/ДЕСЕРТЫ" />
                    <NavLink text="ДОПОЛНИТЕЛЬНО" to="/ДОПОЛНИТЕЛЬНО" />
                    <NavLink text="КОМПАНИЯ" to="/КОМПАНИЯ" />
                    <NavLink text="ПЕСОЧНИЦА" to="/ПЕСОЧНИЦА" />
                </div>
            </nav>
        </>
    )
}

export default Nav;