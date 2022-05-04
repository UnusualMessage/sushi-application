import AdminFooterLink from "./AdminFooterLink";

const AdminFooterLinksContainer = (props) => {
    return (
        <div className="links-container">
            <AdminFooterLink to="сеты" text="СЕТЫ"/>
            <AdminFooterLink to="поке" text="ПОКЕ"/>
            <AdminFooterLink to="роллы" text="РОЛЛЫ"/>
            <AdminFooterLink to="суши" text="СУШИ"/>
            <AdminFooterLink to="запеченные роллы" text="ЗАПЕЧЕННЫЕ РОЛЛЫ"/>
        </div>
    );
}

export default AdminFooterLinksContainer;