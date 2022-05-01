import FooterInfo from './Components/FooterInfo';
import FooterLinks from './Components/FooterLinks';

import './Footer.scss';
import './Styles/FooterLinks.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-wrapper">
                <div className="footer-content">
                    <FooterInfo/>
                    <FooterLinks/>
                </div>
            </div>
        </footer>
    )
}

export default Footer;