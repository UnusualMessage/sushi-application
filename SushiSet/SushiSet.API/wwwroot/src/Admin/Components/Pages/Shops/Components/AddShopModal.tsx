import { useFormik } from "formik";
import { object, string } from "yup";
import { observer } from "mobx-react-lite";

import Modal from "../../../../../Restaurant/Components/Others/Modal";
import Input from "../../../Others/Input";
import ShopsStore from "../../../../../Stores/ShopsStore";
import ICreateShop from "../../../../../Interfaces/ICreateShop";

import "../Styles/AddCityModal.scss";

const AddShopModal = ({ id, active, setActive }: IAddShopModalProps) => {
    const validationSchema = object({
        address: string().required("Введите название!"),
    });

    interface IFormValues {
        address: string,
    }

    const initialValues: IFormValues = {
        address: '',
    }

    const formik = useFormik({
        initialValues: initialValues,

        validationSchema: validationSchema,

        validateOnBlur: false,
        validateOnChange: false,

        onSubmit: values => {
            const shop: ICreateShop = {
                cityId: id,
                address: values.address,
            }

            ShopsStore.addShop(shop);
            formik.resetForm();
            setActive(false);
        },
    });

    return (
        <Modal active={active} setActive={setActive}>
            <div className="add-item">
                <div className="toolbar">
                    <h1 className="toolbar-title">Новый ресторан</h1>
                    <span className="toolbar-close" onClick={() => { formik.resetForm(); setActive(false) }}>Закрыть</span>
                </div>

                <form className="add-item-form" onSubmit={formik.handleSubmit}>
                    <Input value={formik.values.address} onChange={formik.handleChange}
                        name="address" placeholder="Адрес ресторана" type="tex" error={formik.errors.address}
                    />

                    <button className="add-item-confirm" type="submit">Добавить</button>
                </form>
            </div>
        </Modal>
    );
}

interface IAddShopModalProps {
    id: string,
    active: boolean,
    setActive: (arg: boolean) => void
}

export default observer(AddShopModal);