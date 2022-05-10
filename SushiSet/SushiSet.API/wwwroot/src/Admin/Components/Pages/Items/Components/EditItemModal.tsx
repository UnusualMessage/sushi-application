import { useFormik } from "formik";
import { object, string } from "yup";
import { observer } from "mobx-react-lite";

import Modal from "../../../../../Restaurant/Components/Others/Modal";
import FileInput from "../../../Others/FileInput";
import Input from "../../../Others/Input";
import IItem from "../../../../../Interfaces/IItem";
import BigInput from "../../../Others/BigInput";
import SelectInput from "../../../Others/SelectInput";

import "../Styles/EditItemModal.scss";

const EditItemModal = ({ active, setActive, item }: IAddItemModalProps) => {
    const validationSchema = object({
        name: string().required("Введите название!"),
        description: string().required("Не забывай про описание!"),
        price: string().required("Введите цену!").matches(/^[0-9]+$/, "Неправильный формат цены!"),
        category: string().required("Выберите категорию!"),
    });

    interface IFormValues {
        name: string,
        description: string,
        price: string,
        category: string,
        file: File
    }

    const initialValues: IFormValues = {
        name: item.name,
        description: item.description,
        price: item.price.toString(),
        category: item.category,
        file: null
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
                    <h1 className="toolbar-title">Редактирование товара</h1>
                    <span className="toolbar-close" onClick={() => { formik.resetForm(); setActive(false) }}>Закрыть</span>
                </div>

                <form className="edit-item-form" onSubmit={formik.handleSubmit}>
                    <Input value={formik.values.name} onChange={formik.handleChange}
                        name="name" placeholder="Название" type="text" error={formik.errors.name}
                    />

                    <Input value={formik.values.price} onChange={formik.handleChange}
                        name="price" placeholder="Цена" type="text" error={formik.errors.price}
                    />

                    <SelectInput value={formik.values.category} onChange={formik.handleChange} name="category"/>

                    <BigInput value={formik.values.description} onChange={formik.handleChange}
                        name="description" placeholder="Описание" error={formik.errors.description}/>

                    <FileInput onChange={(e) => formik.setFieldValue("file", e.target.files[0])}
                        name="file" error={formik.errors.file} id={""}
                    />

                    <button className="edit-item-confirm" type="submit">Изменить</button>
                    <span className="edit-item-confirm">Удалить</span>
                </form>
            </div>
        </Modal>
    );
}

interface IAddItemModalProps {
    active: boolean,
    setActive: (arg: boolean) => void,
    item: IItem
}

export default observer(EditItemModal);