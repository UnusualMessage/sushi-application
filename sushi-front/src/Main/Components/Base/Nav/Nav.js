import NavLink from './NavLink';

import './Nav.scss';

const Nav = (props) => {
    return(
        <>
            <nav className="nav">
                <div className="nav-wrapper">
                    <div className="nav-content">
                        <NavLink text="СЕТЫ" to="/"/>
                        <NavLink text="ПОКЕ" to="/"/>
                        <NavLink text="РОЛЛЫ" to="/"/>
                        <NavLink text="СУШИ" to="/"/>
                        <NavLink text="ЗАПЕЧЕННЫЕ РОЛЛЫ" to="/"/>
                        <NavLink text="НАПИТКИ" to="/"/>
                        <NavLink text="ДЕСЕРТЫ" to="/"/>
                        <NavLink text="ДОПОЛНИТЕЛЬНО" to="/"/>
                        <NavLink text="КОМПАНИЯ" to="/"/>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Nav;