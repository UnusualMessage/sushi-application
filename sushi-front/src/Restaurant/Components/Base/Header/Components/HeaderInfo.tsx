import { Link } from "react-router-dom";
import { useState } from "react";
import { observer } from "mobx-react-lite";

import CityChoice from "./CityChoice";
import CurrentCity from "../../../../../Stores/CurrentCity";
import HeaderLogin from "./HeaderLogin";
import Auth from "../../../../../Stores/Auth";
import CurrentOrder from "../../../../../Stores/CurrentOrder";
import { CourierRoute, InitialRoute, OrdersRoute } from "../../../Others/RouteNames";

import '../Styles/HeaderInfo.scss';

const HeaderInfo = () => {
    const [cityModalActive, setCityModalActive] = useState(false);
    const [loginModalActive, setLoginModalActive] = useState(false);

    const showCityModal = () => {
        setCityModalActive(!cityModalActive);
    }

    const showLoginModal = () => {
        setLoginModalActive(!loginModalActive);
    }

    return (
        <div className='content-info-wrapper'>
            <Link className="header-logo" to={InitialRoute}>
                <img src="/logo_big.png" alt="" />
            </Link>

            <div className='header-city'>
                <span className='city-mobile'>
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 473.042 473.042">
                        <path d="M371.136,240.127c-3.2,0-6.3,1.3-8.5,3.5s-3.5,5.3-3.5,8.5s1.3,6.3,3.5,8.5s5.3,3.5,8.5,3.5s6.3-1.3,8.5-3.5 s3.5-5.3,3.5-8.5s-1.3-6.3-3.5-8.5C377.336,241.327,374.236,240.127,371.136,240.127z" />
                        <path d="M258.736,100.227c-1.4,6.5,2.8,12.8,9.3,14.2c0.8,0.2,1.7,0.3,2.5,0.3c5.6,0,10.5-3.9,11.7-9.5c1.4-6.5-2.8-12.8-9.3-14.2 S260.136,93.727,258.736,100.227z" />
                        <path d="M344.436,147.027c-5.5,3.7-6.9,11.2-3.2,16.7c2.3,3.4,6.1,5.3,10,5.3c2.3,0,4.6-0.7,6.7-2.1c5.5-3.7,6.9-11.2,3.2-16.7 C357.336,144.827,349.936,143.327,344.436,147.027z" />
                        <path d="M306.136,115.227c-3.7,5.5-2.3,13,3.2,16.7c2.1,1.4,4.4,2,6.7,2c3.9,0,7.6-1.8,10-5.3c3.7-5.5,2.3-13-3.2-16.7 C317.336,108.327,309.836,109.727,306.136,115.227z" />
                        <path d="M358.636,205.027c1.2,5.7,6.2,9.5,11.7,9.5c0.8,0,1.6-0.1,2.5-0.3c6.5-1.4,10.7-7.7,9.3-14.2c-1.4-6.5-7.7-10.7-14.2-9.3 C361.436,192.227,357.236,198.527,358.636,205.027z" />
                        <path d="M220.936,89.927c-3.2,0-6.3,1.3-8.5,3.5s-3.5,5.3-3.5,8.5s1.3,6.3,3.5,8.5c2.2,2.2,5.3,3.5,8.5,3.5s6.3-1.3,8.5-3.5 s3.5-5.3,3.5-8.5s-1.3-6.3-3.5-8.5C227.236,91.227,224.136,89.927,220.936,89.927z" />
                        <path d="M457.936,243.027c-3.2,0-6.3,1.3-8.5,3.5s-3.5,5.3-3.5,8.5s1.3,6.3,3.5,8.5s5.3,3.5,8.5,3.5s6.3-1.3,8.5-3.5 s3.5-5.3,3.5-8.5s-1.3-6.3-3.5-8.5C464.136,244.227,461.036,243.027,457.936,243.027z" />
                        <path d="M450.036,120.627c-3-5.9-10.2-8.3-16.1-5.4c-5.9,3-8.3,10.2-5.4,16.1c2.1,4.2,6.3,6.6,10.7,6.6c1.8,0,3.6-0.4,5.4-1.3 C450.636,133.727,453.036,126.527,450.036,120.627z" />
                        <path d="M341.836,44.527c1.7,0.9,3.6,1.3,5.4,1.3c4.4,0,8.6-2.4,10.7-6.6c3-5.9,0.6-13.1-5.4-16.1l0,0c-5.9-3-13.1-0.6-16.1,5.4 C333.536,34.327,335.836,41.527,341.836,44.527z" />
                        <path d="M261.736,24.127c0.2,0,0.3,0,0.4,0c6.4,0,11.8-5.1,12-11.6c0.2-6.6-4.9-12.2-11.6-12.4c-6.6-0.3-12.2,4.9-12.4,11.5 S255.136,23.827,261.736,24.127z" />
                        <path d="M302.836,30.027c1,0.3,2,0.4,3,0.4c5.4,0,10.2-3.6,11.6-9c1.6-6.4-2.2-13-8.7-14.6c-6.4-1.6-13,2.2-14.6,8.7 C292.536,21.827,296.436,28.327,302.836,30.027z" />
                        <path d="M424.836,81.327c-4.2-5.2-11.7-6-16.9-1.8c-5.1,4.2-6,11.7-1.8,16.9c2.4,2.9,5.8,4.5,9.3,4.5c2.7,0,5.3-0.9,7.5-2.7 C428.136,94.027,428.936,86.527,424.836,81.327z" />
                        <path d="M449.036,211.427c0.2,6.5,5.6,11.6,12,11.6c0.1,0,0.3,0,0.4,0c6.6-0.2,11.8-5.8,11.6-12.4c-0.2-6.6-5.8-11.8-12.4-11.6 C453.936,199.227,448.736,204.727,449.036,211.427z" />
                        <path d="M454.736,179.327c1,0,2-0.1,3-0.4c6.4-1.6,10.3-8.2,8.7-14.6l0,0c-1.6-6.4-8.2-10.3-14.6-8.7s-10.3,8.2-8.7,14.6l0,0 C444.436,175.727,449.336,179.327,454.736,179.327z" />
                        <path d="M376.736,67.027c2.2,1.8,4.9,2.7,7.5,2.7c3.5,0,7-1.5,9.3-4.5c4.2-5.2,3.4-12.7-1.8-16.9c-5.2-4.2-12.7-3.4-16.9,1.8 C370.736,55.327,371.536,62.827,376.736,67.027z" />
                        <path d="M218.136,27.127c3.2,0,6.3-1.3,8.5-3.5s3.5-5.3,3.5-8.5s-1.3-6.3-3.5-8.5s-5.3-3.5-8.5-3.5s-6.3,1.3-8.5,3.5 s-3.5,5.3-3.5,8.5s1.3,6.3,3.5,8.5C211.836,25.927,214.936,27.127,218.136,27.127z" />
                        <path d="M340.936,309.627c-9-8.9-19.7-13.7-30.8-13.7c-11.1,0-21.7,4.7-30.7,13.6l-2.4,2.3c-8.8,8.7-17.8,17.6-26.6,26.7 c-1.7-0.9-3.3-1.7-5-2.5c-4.1-2-7.9-3.9-11.4-6.1c-26.7-16.8-51.3-39.2-75.1-68.4c-11.4-14-19.4-26.5-25-39 c7.8-7.5,15.4-15.3,22.9-22.8l5.8-5.8c18.9-19,18.8-43.5-0.1-62.6c-5.7-5.7-11.5-11.5-17.1-17.1c-2.5-2.5-5-5-7.4-7.4 c-2.6-2.6-5.3-5.3-7.9-7.9c-5.7-5.7-11.5-11.6-17.4-17.4c-9-8.9-19.7-13.6-30.8-13.6s-21.7,4.7-30.7,13.6 c-4.3,4.2-8.5,8.5-12.7,12.7c-6,6.1-12.2,12.4-18.5,18.3c-11.8,11.2-18.4,25.4-19.7,42.1c-2,26.2,5.3,49.9,11.9,67.6 c14.9,40,37.6,77.9,69.4,115.8c39.7,47.2,87.5,84.6,142.1,111.2c30.1,14.6,55.9,22.1,81.1,23.5c1.9,0.1,3.7,0.2,5.5,0.2 c21.4,0,39-7.5,52.3-22.4c5.7-6.3,11.7-12.2,18.2-18.5c3.2-3.2,6.6-6.4,9.9-9.7c18.8-19,18.9-43.5,0.2-62.3 C374.236,342.727,357.336,325.827,340.936,309.627z M373.936,405.127c-3.1,3.2-6.4,6.3-9.6,9.4c-6.4,6.3-13.1,12.7-19.3,19.7 c-9.6,10.7-21.7,15.2-38.5,14.3c-21.9-1.2-44.8-7.9-71.9-21.1c-51.6-25.1-96.7-60.4-134.2-105c-30.1-35.8-51.4-71.3-65.3-108.7 c-8.5-22.9-11.7-40.6-10.5-57.4c0.8-10.9,4.7-19.3,12.3-26.5c6.5-6.2,12.8-12.6,19-18.8c4.1-4.1,8.3-8.4,12.4-12.4 c3.1-3,8-6.7,13.9-6.7s10.8,3.6,14,6.7c5.8,5.7,11.6,11.5,17.2,17.2c2.7,2.7,5.3,5.3,8,8c2.5,2.5,5,5,7.5,7.4 c5.6,5.6,11.4,11.3,17,17c9.6,9.7,9.7,19.1,0.1,28.8l-5.8,5.9c-8.1,8.2-16.5,16.6-24.9,24.7c-4.3,4.2-8.6,11.3-4.3,21.5 c6.5,15.7,16,30.8,29.7,47.7c25.5,31.3,52,55.4,81,73.6c4.5,2.8,9.1,5.1,13.6,7.3c2.6,1.3,5.1,2.5,7.5,3.8 c3.1,1.7,6.2,2.5,9.3,2.5l0,0c5,0,9.6-2.1,13.6-6.3c9.4-9.7,19.1-19.3,28.6-28.7l2.4-2.3c3.1-3.1,8-6.7,13.8-6.7 s10.8,3.7,13.9,6.7c16.3,16.2,33.2,33,50.1,50C383.436,386.027,383.436,395.627,373.936,405.127z" />
                    </svg>
                </span>

                <span className='city-choice' onClick={showCityModal}>Город доставки</span>
                <span className='city-name'>{CurrentCity.city}</span>
            </div>

            <div className='header-contacts'>
                <span className='contacts-mobile'>
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 315 315">
                        <path d="M157.5,0C93.319,0,41.103,52.215,41.103,116.397c0,62.138,106.113,190.466,110.63,195.898 c1.425,1.713,3.538,2.705,5.767,2.705c2.228,0,4.342-0.991,5.767-2.705c4.518-5.433,110.63-133.76,110.63-195.898 C273.897,52.215,221.682,0,157.5,0z M157.5,295.598c-9.409-11.749-28.958-36.781-48.303-65.397 c-34.734-51.379-53.094-90.732-53.094-113.804C56.103,60.486,101.59,15,157.5,15c55.91,0,101.397,45.486,101.397,101.397 c0,23.071-18.359,62.424-53.094,113.804C186.457,258.817,166.909,283.849,157.5,295.598z" />
                        <path d="M195.657,213.956c-3.432-2.319-8.095-1.415-10.413,2.017c-10.121,14.982-21.459,30.684-33.699,46.67 c-2.518,3.289-1.894,7.996,1.395,10.514c1.36,1.042,2.963,1.546,4.554,1.546c2.254,0,4.484-1.013,5.96-2.941 c12.42-16.22,23.933-32.165,34.219-47.392C199.992,220.938,199.09,216.275,195.657,213.956z" />
                        <path d="M157.5,57.5C123.589,57.5,96,85.089,96,119s27.589,61.5,61.5,61.5S219,152.911,219,119S191.411,57.5,157.5,57.5z M157.5,165.5c-25.64,0-46.5-20.86-46.5-46.5s20.86-46.5,46.5-46.5c25.641,0,46.5,20.86,46.5,46.5S183.141,165.5,157.5,165.5z" />
                    </svg>
                </span>

                <span className='contacts-phone'>8 953 972 13 60</span>
                <span className='contacts-time'>с 10:00 до 23:00</span>
            </div>

            <div className="header-login">
                <svg onClick={Auth.isAuth ? () => { } : showLoginModal} version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 489 489" enableBackground="new 0 0 489 489">
                    <path d="M417.4,71.6C371.2,25.4,309.8,0,244.5,0S117.8,25.4,71.6,71.6S0,179.2,0,244.5s25.4,126.7,71.6,172.9S179.2,489,244.5,489 s126.7-25.4,172.9-71.6S489,309.8,489,244.5S463.6,117.8,417.4,71.6z M244.5,462C124.6,462,27,364.4,27,244.5S124.6,27,244.5,27 S462,124.6,462,244.5S364.4,462,244.5,462z" />
                    <path d="M244.5,203.2c35.1,0,63.6-28.6,63.6-63.6s-28.5-63.7-63.6-63.7s-63.6,28.6-63.6,63.6S209.4,203.2,244.5,203.2z M244.5,102.9c20.2,0,36.6,16.4,36.6,36.6s-16.4,36.6-36.6,36.6s-36.6-16.4-36.6-36.6S224.3,102.9,244.5,102.9z" />
                    <path d="M340.9,280.5c-22.3-32.8-54.7-49.5-96.4-49.5s-74.1,16.6-96.4,49.5c-16.6,24.4-27.2,57.7-31.4,98.7 c-0.8,7.4,4.6,14.1,12,14.8c7.4,0.8,14.1-4.6,14.8-12c8.5-82.3,42.5-124,101-124s92.5,41.7,101,124c0.7,6.9,6.6,12.1,13.4,12.1 c0.5,0,0.9,0,1.4-0.1c7.4-0.8,12.8-7.4,12-14.8C368.1,338.1,357.5,304.9,340.9,280.5z" />
                </svg>

                {Auth.isAuth
                    ?
                    Auth.isCourier()
                        ?
                        <div className="header-login-menu">
                            <Link to={CourierRoute}>Доступные заказы</Link>

                            {CurrentOrder.isEmpty() ?
                                <></>
                                :
                                <Link to={CourierRoute + CurrentOrder.order.id}>Активный заказ</Link>
                            }

                            <Link to={InitialRoute} onClick={() => { Auth.logout(); }}>Выход</Link>
                        </div>

                        :

                        <div className="header-login-menu">
                            <Link to={OrdersRoute}>История заказов</Link>
                            <Link to={InitialRoute} onClick={() => { Auth.logout(); }}>Выход</Link>
                        </div>
                    :
                    <></>
                }

            </div>

            <CityChoice active={cityModalActive} setActive={setCityModalActive} />
            <HeaderLogin active={loginModalActive} setActive={setLoginModalActive} />
        </div>
    );
}

export default observer(HeaderInfo);