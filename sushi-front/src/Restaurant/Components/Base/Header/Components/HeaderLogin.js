import { observer } from "mobx-react-lite";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "../../../Others/Modal";
import Auth from "../../../Store/Auth";

import "../Styles/HeaderLogin.scss";

const HeaderLogin = observer(({ active, setActive }) => {
    const navigate = useNavigate();

    const auth = "Авторизация";
    const registration = "Регистрация";

    const [isLogin, setIsLogin] = useState(true);
    const [mode, setMode] = useState(auth);

    const onModeClick = (e) => {
        e.preventDefault();
        setIsLogin(!isLogin);
        setMode(isLogin ? registration : auth);
    }

    const onLoginClick = (e) => {
        e.preventDefault();
        Auth.login();
        setActive(false);
        navigate("/orders");
    }

    const onRegistrationClick = (e) => {
        e.preventDefault();
        console.log("Регистрация");
    }

    return (
        <Modal active={active} setActive={setActive}>
            <div className="login-container">
                <div className="login-header">
                    <h1 className="login-title">{mode}</h1>
                    <span className="change-form-icon">
                        <svg width="32px" height="32px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                            <path d="M 16 4 C 10.886719 4 6.617188 7.160156 4.875 11.625 L 6.71875 12.375 C 8.175781 8.640625 11.710938 6 16 6 C 19.242188 6 22.132813 7.589844 23.9375 10 L 20 10 L 20 12 L 27 12 L 27 5 L 25 5 L 25 8.09375 C 22.808594 5.582031 19.570313 4 16 4 Z M 25.28125 19.625 C 23.824219 23.359375 20.289063 26 16 26 C 12.722656 26 9.84375 24.386719 8.03125 22 L 12 22 L 12 20 L 5 20 L 5 27 L 7 27 L 7 23.90625 C 9.1875 26.386719 12.394531 28 16 28 C 21.113281 28 25.382813 24.839844 27.125 20.375 Z" />
                        </svg>
                    </span>
                </div>

                <input className="login-input" placeholder="Почта" />
                <input className="password-input" placeholder="Пароль" />
                <input className={isLogin ? "second-password-input input-hidden" : "second-password-input"} placeholder="Подтвердите пароль" />

                <div className="login-buttons">
                    <span className="mode-button" onClick={onModeClick}>{isLogin ? registration : auth}</span>
                    <span className="confirm-button" onClick={isLogin ? onLoginClick : onRegistrationClick}>ПОДТВЕРДИТЬ</span>
                </div>
            </div>
        </Modal>
    );
});

export default HeaderLogin;