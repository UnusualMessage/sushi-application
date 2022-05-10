import { useFormik } from "formik";
import { object, string } from "yup";
import { observer } from "mobx-react-lite";

import Modal from "../../../../../Restaurant/Components/Others/Modal";
import Input from "../../../Others/Input";
import IShop from "../../../../../Interfaces/IShop";

import "../Styles/EditCityModal.scss";

const EditItemModal = ({ active, setActive, shop }: IAddItemModalProps) => {
    const validationSchema = object({
        address: string().required("Введите адрес!"),
    });

    interface IFormValues {
        address: string,
    }

    const initialValues: IFormValues = {
        address: shop.address,
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
                    <Input value={formik.values.address} onChange={formik.handleChange}
                        name="address" placeholder="Название" type="text" error={formik.errors.address}
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
    shop: IShop
}

export default observer(EditItemModal);