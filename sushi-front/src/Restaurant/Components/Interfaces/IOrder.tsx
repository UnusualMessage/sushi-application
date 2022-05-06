import IItem from "./IItem"

export default interface IOrder {
    id: number,
    status: string,
    city: string,
    price: number,
    date: string,
    items: IItem[]
}