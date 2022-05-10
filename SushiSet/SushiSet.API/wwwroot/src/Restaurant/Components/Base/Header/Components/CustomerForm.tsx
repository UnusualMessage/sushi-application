import { useFormik } from "formik";
import { observer } from "mobx-react-lite";
import { string, object } from "yup";

import Input from "../../../../../Admin/Components/Others/Input";
import IUserAuthenticate from "../../../../../Interfaces/IUserAuthenticate";
import AuthStore from "../../../../../Stores/AuthStore";

import "../Styles/Form.scss";

const CustomerForm = ({ mode, setActive }) => {
    const loginValidationSchema = object({
        name: string().required("Введите почту!"),
        password: string().required("Введите пароль!")
    });

    const registerValidationSchema = object({
        name: string().required("Введите почту!"),
        password: string().required("Введите пароль!"),
        secondPassword: string().required("Подтвердите пароль!")
    });

    interface ILoginValues {
        name: string,
        password: string
    }

    interface IRegisterValues {
        name: string,
        password: string,
        secondPassword: string
    }

    const loginInitialValues: ILoginValues = {
        name: '',
        password: ''
    }

    const registerInitialValues: IRegisterValues = {
        name: '',
        password: '',
        secondPassword: ''
    }

    const loginFormik = useFormik({
        initialValues: loginInitialValues,

        validationSchema: loginValidationSchema,

        validateOnBlur: false,
        validateOnChange: false,

        onSubmit: values => {
            const user : IUserAuthenticate  = {
                role: "Customer",
                name: values.name,
                password: values.password
            }

            AuthStore.loginUser(user);
            setActive(false);
        },
    });

    const registerFormik = useFormik({
        initialValues: registerInitialValues,

        validationSchema: registerValidationSchema,

        validateOnBlur: false,
        validateOnChange: false,

        onSubmit: values => {
            const user : IUserAuthenticate = {
                role: "Customer",
                name: values.name,
                password: values.password
            }

            AuthStore.registerUser(user);
            setActive(false);
        },
    });

    return (
        <>
            {
                mode === "Регистрация" ?
                    <form className="customer-form form" onSubmit={loginFormik.handleSubmit}>

                        <Input value={loginFormik.values.name} onChange={loginFormik.handleChange}
                            name="name" placeholder="Почта" type="text" error={loginFormik.errors.name}
                        />

                        <Input value={loginFormik.values.password} onChange={loginFormik.handleChange}
                            name="password" placeholder="Пароль" type="password" error={loginFormik.errors.password}
                        />
                        <button className="customer-form-confirm confirm-button" type="submit">
                            Подтвердить
                        </button>
                    </form>
                    :
                    <>
                        <form className="customer-form form" onSubmit={registerFormik.handleSubmit}>

                            <Input value={registerFormik.values.name} onChange={registerFormik.handleChange}
                                name="name" placeholder="Почта" type="text" error={registerFormik.errors.name}
                            />

                            <Input value={registerFormik.values.password} onChange={registerFormik.handleChange}
                                name="password" placeholder="Пароль" type="password" error={registerFormik.errors.password}
                            />

                            <Input value={registerFormik.values.secondPassword} onChange={registerFormik.handleChange}
                                name="secondPassword" placeholder="Еще раз пароль" type="password" error={registerFormik.errors.secondPassword}
                            />
                            <button className="customer-form-confirm confirm-button" type="submit">
                                Подтвердить
                            </button>
                        </form>
                    </>
            }
        </>
    );
}

export default observer(CustomerForm)