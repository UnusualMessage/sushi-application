import AdminNavLink from './AdminNavLink';
import AdminNavCategoryLink from './AdminNavCategoryLink';

const AdminNav = () => {
    return (
        <>
            <nav className="nav">
                <div className="nav-content">
                    <AdminNavLink text="АКЦИИ" to="/discounts" />
                    <AdminNavCategoryLink text="СЕТЫ" to="/сеты" />
                    <AdminNavCategoryLink text="ПОКЕ" to="/поке" />
                    <AdminNavCategoryLink text="РОЛЛЫ" to="/роллы" />
                    <AdminNavCategoryLink text="СУШИ" to="/суши" />
                    <AdminNavCategoryLink text="ЗАПЕЧЕННЫЕ РОЛЛЫ" to="/запеченные роллы" />
                    <AdminNavCategoryLink text="НАПИТКИ" to="/напитки" />
                    <AdminNavCategoryLink text="ДЕСЕРТЫ" to="/десерты" />
                    <AdminNavCategoryLink text="ДОПОЛНИТЕЛЬНО" to="/дополнительно" />
                    <AdminNavLink text="КОМПАНИЯ" to="/company" />
                    <AdminNavLink text="ПЕСОЧНИЦА" to="/sandbox" />
                </div>
            </nav>
        </>
    )
}

export default AdminNav;