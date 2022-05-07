import { Link } from "react-router-dom";

import "../Styles/FooterInfo.scss";

const FooterInfo = () => {
    return (
        <div className='footer-content-info'>
            <Link className='footer-logo' to="/">
                <img src="/logo_light.png" alt="" />
            </Link>

            <div className='footer-copyright'>
                <span className='copyright-text'>
                    Сеть магазинов "СушиСет"
                </span>

                <Link className='copyright-link' to="/">
                    Политика конфиденциальности
                </Link>
            </div>
        </div>
    );
}

export default FooterInfo;