import { observer } from "mobx-react-lite";

import AvailableOrderItem from "./DeliveryOrderItem";
import IItem from "../../../Interfaces/IItem";

import "../Styles/AvailableOrderItems.scss";

const AvailableOrderItems = ({ items } : IAvailableOrderItemsProps) => {
    return(
        <div className="available-order-items">
            {
                items?.map((item : IItem) => {
                    return <AvailableOrderItem 
                        key={item.id}

                        id={item.id} 
                        category={item.category}
                        price={item.price} 
                        title={item.title} 
                        path={item.path} 
                        count={item.count}
                        text={item.text}
                    />
                })
            }
        </div>
    );
}

interface IAvailableOrderItemsProps {
    items: IItem[];
}

export default observer(AvailableOrderItems);