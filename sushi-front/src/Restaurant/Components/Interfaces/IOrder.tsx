import IAddress from "./IAddress"
import IItem from "./IItem"

export default interface IOrder {
    id: number,
    status: string,
    price: number,
    date: string,
    city: string,
    shop: string,
    address?: IAddress,
    items: IItem[]
}