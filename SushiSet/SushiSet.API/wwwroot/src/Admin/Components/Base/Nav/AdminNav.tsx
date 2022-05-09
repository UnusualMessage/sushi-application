import NavLink from '../../../../Restaurant/Components/Base/Nav/NavLink';
import { CategoryRoute, ItemsRoute, OrdersRoute, ShopsRoute, UsersRoute } from '../../Others/RouteNames';

const AdminNav = () => {
    return (
        <>
            <nav className="nav">
                <div className="nav-content">
                    <NavLink title="КАТЕГОРИИ" to={CategoryRoute} />
                    <NavLink title="ТОВАРЫ" to={ItemsRoute} />
                    <NavLink title="ЗАКАЗЫ" to={OrdersRoute} />
                    <NavLink title="ПОЛЬЗОВАТЕЛИ" to={UsersRoute} />
                    <NavLink title="РЕСТОРАНЫ" to={ShopsRoute} />
                </div>
            </nav>
        </>
    )
}

export default AdminNav;