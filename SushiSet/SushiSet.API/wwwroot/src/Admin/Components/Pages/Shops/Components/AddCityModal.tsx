import { useFormik } from "formik";
import { object, string } from "yup";
import { observer } from "mobx-react-lite";

import ICreateCity from "../../../../../Interfaces/ICreateCity";
import Modal from "../../../../../Restaurant/Components/Others/Modal";
import Input from "../../../Others/Input";
import CitiesStore from "../../../../../Stores/CitiesStore";

import "../Styles/AddCityModal.scss";

const AddCityModal = ({ active, setActive }: IAddCityModalProps) => {
    const validationSchema = object({
        name: string().required("Введите название!"),
    });

    interface IFormValues {
        name: string,
    }

    const initialValues: IFormValues = {
        name: '',
    }

    const formik = useFormik({
        initialValues: initialValues,

        validationSchema: validationSchema,

        validateOnBlur: false,
        validateOnChange: false,

        onSubmit: values => {
            const city: ICreateCity = {
                name: values.name,
            }

            CitiesStore.addCity(city);
            formik.resetForm();
            setActive(false);
        },
    });

    return (
        <Modal active={active} setActive={setActive}>
            <div className="add-item">
                <div className="toolbar">
                    <h1 className="toolbar-title">Новый город</h1>
                    <span className="toolbar-close" onClick={() => { formik.resetForm(); setActive(false) }}>Закрыть</span>
                </div>

                <form className="add-item-form" onSubmit={formik.handleSubmit}>
                    <Input value={formik.values.name} onChange={formik.handleChange}
                        name="name" placeholder="Город" type="text" error={formik.errors.name}
                    />

                    <button className="add-item-confirm" type="submit">Добавить</button>
                </form>
            </div>
        </Modal>
    );
}

interface IAddCityModalProps {
    active: boolean,
    setActive: (arg: boolean) => void
}

export default observer(AddCityModal);