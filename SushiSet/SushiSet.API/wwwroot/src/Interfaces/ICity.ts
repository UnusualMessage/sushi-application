import IShop from "./IShop";

export default interface ICity {
    id: string,
    name: string,
    shops: IShop[]
}