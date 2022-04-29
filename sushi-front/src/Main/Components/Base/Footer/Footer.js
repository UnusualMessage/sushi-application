import FooterInfo from './Components/FooterInfo';
import FooterLinksContainer from './Components/FooterLinkContainer';

import './Footer.scss';
import './Styles/FooterLinks.scss';

const Footer = (props) => {
    return (
        <footer className="footer">
            <div className="footer-wrapper">
                <div className="footer-content">
                    <FooterInfo/>

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