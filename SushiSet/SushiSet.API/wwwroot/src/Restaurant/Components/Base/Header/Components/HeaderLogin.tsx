import { action } from "mobx";
import { observer } from "mobx-react-lite";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { CourierRoute, OrdersRoute } from "../../../Others/RouteNames";
import Modal from "../../../Others/Modal";
import Auth from "../../../../../Stores/Auth";

import "../Styles/HeaderLogin.scss";

const HeaderLogin = ({ active, setActive }) => {
    const navigate = useNavigate();

    const auth : string = "Авторизация";
    const registration : string = "Регистрация";
    const courier : string = "Курьер";

    const [isLogin, setIsLogin] = useState(true);
    const [mode, setMode] = useState(auth);
    const [isCustomer, setIsCustomer] = useState(true);

    useEffect(() => {
        if (isCustomer) {
            setMode(isLogin ? auth : registration);
        } else {
            setMode(courier);
        }
    }, [isLogin, isCustomer])

    const onModeChange = action(() => {
        setIsLogin(!isLogin);
    });

    const onUserChange = action(() => {
        setIsCustomer(!isCustomer);
    });

    const onLoginClick = action(() => {
        if (isCustomer) {
            Auth.loginAsCustomer();
            navigate(OrdersRoute);
        } else {
            Auth.loginAsCourier();
            navigate(CourierRoute);
        }

        setActive(false);
    });

    const onRegistrationClick = action(() => {
        Auth.register();
        navigate(OrdersRoute);
        setActive(false);
    });

    return (
        <Modal active={active} setActive={setActive}>
            <div className="login-container">
                <div className="login-header">
                    <h1 className="login-title">{mode}</h1>

                    <span className="change-form-icon" onClick={onUserChange}>
                        <svg width="32px" height="32px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                            <path d="M 16 4 C 10.886719 4 6.617188 7.160156 4.875 11.625 L 6.71875 12.375 C 8.175781 8.640625 11.710938 6 16 6 C 19.242188 6 22.132813 7.589844 23.9375 10 L 20 10 L 20 12 L 27 12 L 27 5 L 25 5 L 25 8.09375 C 22.808594 5.582031 19.570313 4 16 4 Z M 25.28125 19.625 C 23.824219 23.359375 20.289063 26 16 26 C 12.722656 26 9.84375 24.386719 8.03125 22 L 12 22 L 12 20 L 5 20 L 5 27 L 7 27 L 7 23.90625 C 9.1875 26.386719 12.394531 28 16 28 C 21.113281 28 25.382813 24.839844 27.125 20.375 Z" />
                        </svg>
                    </span>
                </div>

                <input className="login-input" placeholder={ isCustomer ? "Почта" : "Логин"} />
                <input className="password-input" placeholder="Пароль" />
                <input className={isLogin || !isCustomer ? "second-password-input input-hidden" : "second-password-input"} placeholder="Подтвердите пароль" />

                <div className="login-buttons">
                    <span className={isCustomer ? "mode-button" : "mode-button input-hidden"} onClick={onModeChange}>{isLogin ? registration : auth}</span>
                    <button className="confirm-button" type="submit" onClick={isCustomer ? (isLogin ? onLoginClick : onRegistrationClick) : onLoginClick}>ПОДТВЕРДИТЬ</button>
                </div>
            </div>
        </Modal>
    );
}

export default observer(HeaderLogin);