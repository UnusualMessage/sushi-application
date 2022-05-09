import FooterInfo from './Components/FooterInfo';
import FooterLinks from './Components/FooterLinks';

import './Footer.scss';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <FooterInfo/>
                <FooterLinks/>
            </div>
        </footer>
    )
}

export default Footer;