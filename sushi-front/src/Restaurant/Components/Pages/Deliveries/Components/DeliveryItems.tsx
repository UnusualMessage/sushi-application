import { observer } from "mobx-react-lite";

import DeliveryItem from "./DeliveryItem";
import IItem from "../../../../../Interfaces/IItem";

import "../Styles/DeliveryItems.scss";

const DeliveryItems = ({ items } : IDeliveryItemsProps) => {
    return(
        <div className="delivery-items">
            {
                items?.map((item : IItem) => {
                    return <DeliveryItem 
                        key={item.id}
                        item={item}
                    />
                })
            }
        </div>
    );
}

interface IDeliveryItemsProps {
    items: IItem[];
}

export default observer(DeliveryItems);