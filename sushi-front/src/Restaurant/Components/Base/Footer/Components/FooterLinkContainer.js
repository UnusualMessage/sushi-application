import FooterLink from "./FooterLink";

const FooterLinksContainer = (props) => {
    return (
        <div className="links-container">
            <FooterLink to="СЕТЫ" text="СЕТЫ"/>
            <FooterLink to="ПОКЕ" text="ПОКЕ"/>
            <FooterLink to="РОЛЛЫ" text="РОЛЛЫ"/>
            <FooterLink to="СУШИ" text="СУШИ"/>
            <FooterLink to="ЗАПЕЧЕННЫЕ РОЛЛЫ" text="ЗАПЕЧЕННЫЕ РОЛЛЫ"/>
        </div>
    );
}

export default FooterLinksContainer;