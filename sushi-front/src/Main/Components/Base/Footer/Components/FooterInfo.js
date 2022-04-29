import "../Styles/FooterInfo.scss";

const FooterInfo = () => {
    return (
        <div className='footer-content-info'>
            <div className='footer-logo'>
                <img src="/logo_light.png" alt="" />
            </div>

            <div className='footer-copyright'>
                <span className='copyright-text'>Сеть магазинов "СушиСет"</span>

                <a className='copyright-link' href="/">
                    <span className='copyright-policy'>Политика конфиденциальности</span>
                </a>
            </div>
        </div>
    );
}

export default FooterInfo;