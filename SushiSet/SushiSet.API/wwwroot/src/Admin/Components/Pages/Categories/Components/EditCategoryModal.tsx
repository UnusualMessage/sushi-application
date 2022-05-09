import { useFormik } from "formik";
import { object, string } from "yup";
import { observer } from "mobx-react-lite";

import Modal from "../../../../../Restaurant/Components/Others/Modal";
import FileInput from "../../../Others/FileInput";
import Input from "../../../Others/Input";
import ICategory from "../../../../../Interfaces/ICategory";
import IUpdateCategory from "../../../../../Interfaces/IUpdateCategory";
import CategoriesStore from "../../../../../Stores/CategoriesStore";

import "../Styles/EditCategoryModal.scss";

const EditCategoryModal = ({ active, setActive, category } : IDeliveryInfoModalProps) => {
    const validationSchema = object({
        name: string().required("Введите название!"),
        file: string().nullable().required("Загрузите изображение!")
    });

    interface IFormValues {
        name: string,
        file: File
    }

    const initialValues : IFormValues = {
        name: category.name,
        file: null
    }

    const formik = useFormik({
        initialValues: initialValues,

        validationSchema: validationSchema,

        validateOnBlur: false,
        validateOnChange: false,

        onSubmit: values => {
            const newCategory : IUpdateCategory = {
                id: category.id,
                name: values.name,
                picture: values.file,
            }

            CategoriesStore.edit(newCategory);
            setActive(false);
        },
    });

    return(
        <Modal active={active} setActive={setActive}>
            <div className="edit-category">
                <div className="toolbar">
                    <h1 className="toolbar-title">Редактирование категории</h1>
                    <span className="toolbar-close" onClick={() => {setActive(false)}}>Закрыть</span>
                </div>

                <form className="edit-category-form" onSubmit={formik.handleSubmit}>
                    <Input value={formik.values.name} onChange={formik.handleChange}
                        name="name" placeholder="Название" type="text" error={formik.errors.name}
                    />

                    <FileInput onChange={(e) => formik.setFieldValue("file", e.target.files[0])} id={category.id}
                        name="file" error={formik.errors.file}
                    />

                    <button className="edit-category-confirm" type="submit">Изменить</button>
                    <span className="edit-category-confirm">Удалить</span>
                </form>
            </div>
        </Modal>
    );
}

interface IDeliveryInfoModalProps {
    active: boolean,
    setActive: (arg: boolean) => void,
    category: ICategory
}

export default observer(EditCategoryModal);