import FooterLinksContainer from "./FooterLinkContainer";

import "../Styles/FooterLinks.scss";

const FooterLinks = () => {
    return (
        <div className='footer-links'>
            <FooterLinksContainer />
            <FooterLinksContainer />
            <FooterLinksContainer />
        </div>
    );
}

export default FooterLinks;