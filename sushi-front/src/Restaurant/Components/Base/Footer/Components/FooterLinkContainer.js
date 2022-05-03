import FooterLink from "./FooterLink";

const FooterLinksContainer = (props) => {
    return (
        <div className="links-container">
            <FooterLink to="сеты" text="СЕТЫ"/>
            <FooterLink to="поке" text="ПОКЕ"/>
            <FooterLink to="роллы" text="РОЛЛЫ"/>
            <FooterLink to="суши" text="СУШИ"/>
            <FooterLink to="запеченные роллы" text="ЗАПЕЧЕННЫЕ РОЛЛЫ"/>
        </div>
    );
}

export default FooterLinksContainer;