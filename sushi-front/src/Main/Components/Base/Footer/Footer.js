import './Footer.scss';

const Footer = (props) => {
    return (
        <footer className="footer">
            <div className="footer-wrapper">
                <div className="footer-content">
                    <div className='footer-content-info'>
                        <div className='footer-logo'>
                            <img src="/logo_light.png" alt="" />
                        </div>

                        <div className='footer-copyright'>
                            <span className='copyright-text'>Сеть магазинов "СушиСет"</span>

                            <a className='copyright-link' href="/">
                                <span className='copyright-policy'>Политика конфиденциальности</span>
                            </a>
                        </div>
                    </div>

                    <div className='footer-links'>
                        <div className='links-container'>
                            <a className='footer-link' href="/">
                                <span className='footer-link-text'>СЕТЫ</span>
                            </a>

                            <a className='footer-link' href="/">
                                <span className='footer-link-text'>ПОКЕ</span>
                            </a>

                            <a className='footer-link' href="/">
                                <span className='footer-link-text'>РОЛЛЫ</span>
                            </a>

                            <a className='footer-link' href="/">
                                <span className='footer-link-text'>СУШИ</span>
                            </a>

                            <a className='footer-link' href="/">
                                <span className='footer-link-text'>ЗАПЕЧЕННЫЕ РОЛЛЫ</span>
                            </a>
                        </div>

                        <div className='links-container'>
                            <a className='footer-link' href="/">
                                <span className='footer-link-text'>СЕТЫ</span>
                            </a>

                            <a className='footer-link' href="/">
                                <span className='footer-link-text'>ПОКЕ</span>
                            </a>

                            <a className='footer-link' href="/">
                                <span className='footer-link-text'>РОЛЛЫ</span>
                            </a>

                            <a className='footer-link' href="/">
                                <span className='footer-link-text'>СУШИ</span>
                            </a>

                            <a className='footer-link' href="/">
                                <span className='footer-link-text'>ЗАПЕЧЕННЫЕ РОЛЛЫ</span>
                            </a>
                        </div>

                        <div className='links-container'>
                            <a className='footer-link' href="/">
                                <span className='footer-link-text'>СЕТЫ</span>
                            </a>

                            <a className='footer-link' href="/">
                                <span className='footer-link-text'>ПОКЕ</span>
                            </a>

                            <a className='footer-link' href="/">
                                <span className='footer-link-text'>РОЛЛЫ</span>
                            </a>

                            <a className='footer-link' href="/">
                                <span className='footer-link-text'>СУШИ</span>
                            </a>

                            <a className='footer-link' href="/">
                                <span className='footer-link-text'>ЗАПЕЧЕННЫЕ РОЛЛЫ</span>
                            </a>
                        </div>
                    </div>

                    <div className='footer-socials'>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;