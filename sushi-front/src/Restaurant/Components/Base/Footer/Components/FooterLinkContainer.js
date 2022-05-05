import FooterLink from "./FooterLink";

const FooterLinksContainer = () => {
    return (
        <div className="links-container">
            <FooterLink to="сеты" title="СЕТЫ"/>
            <FooterLink to="поке" title="ПОКЕ"/>
            <FooterLink to="роллы" title="РОЛЛЫ"/>
            <FooterLink to="суши" title="СУШИ"/>
            <FooterLink to="запеченные роллы" title="ЗАПЕЧЕННЫЕ РОЛЛЫ"/>
        </div>
    );
}

export default FooterLinksContainer;