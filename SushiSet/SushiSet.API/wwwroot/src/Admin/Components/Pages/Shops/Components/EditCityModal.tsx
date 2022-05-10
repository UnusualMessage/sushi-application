import { useFormik } from "formik";
import { object, string } from "yup";
import { observer } from "mobx-react-lite";

import Modal from "../../../../../Restaurant/Components/Others/Modal";
import Input from "../../../Others/Input";

import "../Styles/EditCityModal.scss";

const EditCityModal = ({ active, setActive, name, id }: IEditCityModalProps) => {
    const validationSchema = object({
        name: string().required("Введите название!"),
    });

    interface IFormValues {
        name: string,
    }

    const initialValues: IFormValues = {
        name: name,
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
        <Modal active={active} setActive={setActive}>
            <div className="edit-item">
                <div className="toolbar">
                    <h1 className="toolbar-title">Редактирование города</h1>
                    <span className="toolbar-close" onClick={() => { formik.resetForm(); setActive(false) }}>Закрыть</span>
                </div>

                <form className="edit-item-form" onSubmit={formik.handleSubmit}>
                    <Input value={formik.values.name} onChange={formik.handleChange}
                        name="name" placeholder="Название" type="text" error={formik.errors.name}
                    />

                    <button className="edit-item-confirm" type="submit">Изменить</button>
                    <span className="edit-item-confirm">Удалить</span>
                </form>
            </div>
        </Modal>
    );
}

interface IEditCityModalProps {
    active: boolean,
    setActive: (arg: boolean) => void,
    name: string,
    id: string
}

export default observer(EditCityModal);