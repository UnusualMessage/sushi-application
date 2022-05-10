import { useFormik } from "formik";
import { string, object } from "yup";

import Input from "../../../../../Admin/Components/Others/Input";

import "../Styles/Form.scss";

const CourierForm = ({ setActive }) => {
    const validationSchema = object({
        name: string().required("Введите логин!"),
        password: string().required("Введите пароль!")
    });

    interface IFormValues {
        name: string,
        password: string
    }

    const initialValues: IFormValues = {
        name: '',
        password: ''
    }

    const formik = useFormik({
        initialValues: initialValues,

        validationSchema: validationSchema,

        validateOnBlur: false,
        validateOnChange: false,

        onSubmit: values => {
            console.log(values);
        },
    });

    return (
        <form className="courier-form form" onSubmit={formik.handleSubmit}>
            <Input value={formik.values.name} onChange={formik.handleChange}
                name="name" placeholder="Логин" type="text" error={formik.errors.name}
            />

            <Input value={formik.values.password} onChange={formik.handleChange}
                name="password" placeholder="Пароль" type="text" error={formik.errors.password}
            />

            <button className="courier-form-confirm confirm-button" type="submit">
                Подтвердить
            </button>
        </form>
    );
}

export default CourierForm