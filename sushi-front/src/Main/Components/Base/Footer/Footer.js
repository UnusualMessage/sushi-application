import './Footer.scss';
import FooterLinksContainer from './FooterLinkContainer';

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
                        <FooterLinksContainer/>
                        <FooterLinksContainer/>
                        <FooterLinksContainer/>
                    </div>

                    <div className='footer-socials'>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;