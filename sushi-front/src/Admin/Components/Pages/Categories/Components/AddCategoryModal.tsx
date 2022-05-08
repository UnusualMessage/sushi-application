import { useFormik } from "formik";
import { object, string } from "yup";

import Modal from "../../../../../Restaurant/Components/Others/Modal";
import FileInput from "../../../Others/FileInput";
import Input from "../../../Others/Input";

import "../Styles/AddCategoryModal.scss";

const AddCategoryModal = ({ active, setActive } : IDeliveryInfoModalProps) => {
    const validationSchema = object({
        name: string().required("Введите название!"),
        file: object().nullable().required("Загрузите изображение!"),
    });

    interface IFormValues {
        name: string,
        file: File
    }

    const initialValues : IFormValues = {
        name: '',
        file: null
    }

    const formik = useFormik({
        initialValues: initialValues,

        validationSchema: validationSchema,

        validateOnBlur: false,
        validateOnChange: false,

        onSubmit: values => {
            const category = {
                name: values.name,
                file: values.file,
            }

            console.log(category);
        },
    });

    return(
        <Modal active={active} setActive={setActive}>
            <div className="add-category">
                <div className="toolbar">
                    <h1 className="toolbar-title">Новая категория</h1>
                    <span className="toolbar-close" onClick={() => {setActive(false)}}>Закрыть</span>
                </div>

                <form className="add-category-form" onSubmit={formik.handleSubmit}>
                    <Input value={formik.values.name} onChange={formik.handleChange}
                        name="name" placeholder="Название" type="text" error={formik.errors.name}
                    />

                    <FileInput onChange={(e) => formik.setFieldValue("file", e.target.files[0])}
                        name="file" error={formik.errors.file}
                    />

                    <button className="add-category-confirm" type="submit">Добавить</button>
                </form>
            </div>
        </Modal>
    );
}

interface IDeliveryInfoModalProps {
    active: boolean,
    setActive: (arg: boolean) => void
}

export default AddCategoryModal;