import AdminFooterInfo from './AdminFooterInfo';
import AdminFooterLinks from './AdminFooterLinks';

const AdminFooter = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <AdminFooterInfo/>
                <AdminFooterLinks/>
            </div>
        </footer>
    )
}

export default AdminFooter;