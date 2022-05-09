import { CategoryRoute } from "../../../Others/RouteNames";
import FooterLink from "./FooterLink";

const FooterLinksContainer = () => {
    return (
        <div className="links-container">
            <FooterLink initial={CategoryRoute} to="сеты" title="СЕТЫ"/>
            <FooterLink initial={CategoryRoute} to="поке" title="ПОКЕ"/>
            <FooterLink initial={CategoryRoute} to="роллы" title="РОЛЛЫ"/>
            <FooterLink initial={CategoryRoute} to="суши" title="СУШИ"/>
            <FooterLink initial={CategoryRoute} to="запеченные роллы" title="ЗАПЕЧЕННЫЕ РОЛЛЫ"/>
        </div>
    );
}

export default FooterLinksContainer;