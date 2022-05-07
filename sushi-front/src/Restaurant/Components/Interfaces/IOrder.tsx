import IAddress from "./IAddress";
import IItem from "./IItem";
import ICustomerContacts from "./ICustomerContacts";

export default interface IOrder {
    id: number,
    status: string,
    price: number,
    date: string,
    city: string,
    shop?: string,

    isDelivery: boolean,
    customer: ICustomerContacts,
    address?: IAddress,
    items: IItem[]
}