import './Nav.scss';

const Nav = (props) => {
    return(
        <>
            <nav className="nav">
                <div className="nav-wrapper">
                    <div className="nav-content">
                        <a className="nav-link" href="/">
                            <span className="link-text">СЕТЫ</span>
                        </a>

                        <a className="nav-link" href="/">
                            <span className="link-text">ПОКЕ</span>
                        </a>

                        <a className="nav-link" href="/">
                            <span className="link-text">РОЛЛЫ</span>
                        </a>

                        <a className="nav-link" href="/">
                            <span className="link-text">СУШИ</span>
                        </a>

                        <a className="nav-link" href="/">
                            <span className="link-text">ЗАПЕЧЕННЫЕ РОЛЛЫ</span>
                        </a>

                        <a className="nav-link" href="/">
                            <span className="link-text">НАПИТКИ</span>
                        </a>

                        <a className="nav-link" href="/">
                            <span className="link-text">ДЕСЕРТЫ</span>
                        </a>

                        <a className="nav-link" href="/">
                            <span className="link-text">ДОПОЛНИТЕЛЬНО</span>
                        </a>

                        <a className="nav-link" href="/">
                            <span className="link-text">КОМПАНИЯ</span>
                        </a>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Nav;