import { Link } from "react-router-dom";
import { observer } from "mobx-react-lite";

import { InitialRoute } from "../../Others/RouteNames";

const AdminHeaderInfo = observer(() => {
    return (
        <div className='content-info-wrapper'>
            <Link className="header-logo" to={InitialRoute}>
                <img src="/logo_big.png" alt="" />
            </Link>
        </div>
    );
});

export default AdminHeaderInfo;