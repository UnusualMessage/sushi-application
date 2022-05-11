import IItem from "./IItem";

export default interface ICartUnit {
    id: string,
    item: IItem,
    count: number
}