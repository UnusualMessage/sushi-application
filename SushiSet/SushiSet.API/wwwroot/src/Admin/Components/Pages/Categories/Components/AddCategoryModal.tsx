import { useFormik } from "formik";
import { object, string } from "yup";
import { observer } from "mobx-react-lite";

import ICreateCategory from "../../../../../Interfaces/ICreateCategory";
import Modal from "../../../../../Restaurant/Components/Others/Modal";
import CategoriesStore from "../../../../../Stores/CategoriesStore";
import FileInput from "../../../Others/FileInput";
import Input from "../../../Others/Input";

import "../Styles/AddCategoryModal.scss";

const AddCategoryModal = ({ active, setActive } : IAddCategoryModalProps) => {
    const validationSchema = object({
        name: string().required("Введите название!"),
        file: string().nullable().required("Загрузите изображение!")
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
            const category : ICreateCategory = {
                name: values.name,
                picture: values.file,
            }

            CategoriesStore.addCategory(category);
            setActive(false);
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

                    <FileInput onChange={(e) => formik.setFieldValue("file", e.target.files[0])} id={""}
                        name="file" error={formik.errors.file}
                    />

                    <button className="add-category-confirm" type="submit">Добавить</button>
                </form>
            </div>
        </Modal>
    );
}

interface IAddCategoryModalProps {
    active: boolean,
    setActive: (arg: boolean) => void
}

export default observer(AddCategoryModal);