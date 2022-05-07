import IAddress from "../../../Interfaces/IAddress";
import ICustomerContacts from "../../../Interfaces/ICustomerContacts";
import Modal from "../../../Others/Modal";

import "../Styles/DeliveryInfoModal.scss";

const DeliveryInfoModal = ({ active, setActive, address, customer } : IDeliveryInfoModalProps) => {
    return(
        <Modal active={active} setActive={setActive}>
            <div className="delivery-customer-info">
                <div className="toolbar">
                    <h1 className="toolbar-title">Информация о клиенте</h1>
                    <span className="toolbar-close" onClick={() => {setActive(false)}}>Закрыть</span>
                </div>

                <div className="customer-info">
                    <span className="customer-name">Имя: {customer.name}</span>
                    <span className="customer-phone">Телефон: {customer.phone}</span>
                    <span className="customer-address">Улица: {address.street}</span>
                    <span className="customer-home">Дом: {address.home}</span>
                    <span className="customer-housing">Корпус: {address.housing}</span>
                    <span className="customer-part">Подъезд: {address.part}</span>
                    <span className="customer-floor">Этаж: {address.floor}</span>
                    <span className="customer-flat">Квартира: {address.flat}</span>
                </div>
            </div>
        </Modal>
    );
}

interface IDeliveryInfoModalProps {
    address: IAddress,
    customer: ICustomerContacts,
    active: boolean,
    setActive: (arg: boolean) => void
}

export default DeliveryInfoModal;