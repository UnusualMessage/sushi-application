import { useFormik } from "formik";
import { object, string } from "yup";
import { observer } from "mobx-react-lite";

import Modal from "../../../../../Restaurant/Components/Others/Modal";
import FileInput from "../../../Others/FileInput";
import Input from "../../../Others/Input";
import ICreateItem from "../../../../../Interfaces/ICreateItem";
import ItemsStore from "../../../../../Stores/ItemsStore";
import BigInput from "../../../Others/BigInput";
import SelectInput from "../../../Others/SelectInput";

import "../Styles/AddItemModal.scss";

const AddItemModal = ({ active, setActive }: IAddItemModalProps) => {
    const validationSchema = object({
        name: string().required("Введите название!"),
        description: string().required("Не забывай про описание!"),
        price: string().required("Введите цену!").matches(/^[0-9]+$/, "Неправильный формат цены!"),
        category: string().required("Выберите категорию!"),
        file: string().nullable().required("Загрузите изображение!")
    });

    interface IFormValues {
        name: string,
        description: string,
        price: string,
        category: string,
        file: File
    }

    const initialValues: IFormValues = {
        name: '',
        description: '',
        price: '',
        category: '',
        file: null
    }

    const formik = useFormik({
        initialValues: initialValues,

        validationSchema: validationSchema,

        validateOnBlur: false,
        validateOnChange: false,

        onSubmit: values => {
            const item: ICreateItem = {
                name: values.name,
                description: values.description,
                category: values.category,
                picture: values.file,
                price: Number(values.price)
            }

            ItemsStore.addItem(item);
            formik.resetForm();
            setActive(false);
        },
    });

    return (
        <Modal active={active} setActive={setActive}>
            <div className="add-item">
                <div className="toolbar">
                    <h1 className="toolbar-title">Новый товар</h1>
                    <span className="toolbar-close" onClick={() => { formik.resetForm(); setActive(false) }}>Закрыть</span>
                </div>

                <form className="add-item-form" onSubmit={formik.handleSubmit}>
                    <Input value={formik.values.name} onChange={formik.handleChange}
                        name="name" placeholder="Название" type="text" error={formik.errors.name}
                    />

                    <Input value={formik.values.price} onChange={formik.handleChange}
                        name="price" placeholder="Цена" type="text" error={formik.errors.price}
                    />

                    <SelectInput name={"category"} value={formik.values.category} onChange={formik.handleChange}/>

                    <BigInput value={formik.values.description} onChange={formik.handleChange}
                            name="description" placeholder="Описание" error={formik.errors.description}/>

                    <FileInput onChange={(e) => formik.setFieldValue("file", e.target.files[0])}
                        name="file" error={formik.errors.file}
                    />

                    <button className="add-item-confirm" type="submit">Добавить</button>
                </form>
            </div>
        </Modal>
    );
}

interface IAddItemModalProps {
    active: boolean,
    setActive: (arg: boolean) => void
}

export default observer(AddItemModal);