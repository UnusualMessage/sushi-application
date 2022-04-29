import FooterLink from "./FooterLink";

const FooterLinksContainer = (props) => {
    return (
        <div className="links-container">
            <FooterLink to="/" text="СЕТЫ"/>
            <FooterLink to="/" text="ПОКЕ"/>
            <FooterLink to="/" text="РОЛЛЫ"/>
            <FooterLink to="/" text="СУШИ"/>
            <FooterLink to="/" text="ЗАПЕЧЕННЫЕ РОЛЛЫ"/>
        </div>
    );
}

export default FooterLinksContainer;