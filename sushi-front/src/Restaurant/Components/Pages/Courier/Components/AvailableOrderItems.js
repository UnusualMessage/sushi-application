import { observer } from "mobx-react-lite";

import AvailableOrderItem from "./AvailableOrderItem";

import "../Styles/AvailableOrderItems.scss";

const AvailableOrderItems = observer(({ items }) => {
    return(
        <div className="available-order-items">
            {
                items.map(item => {
                    return <AvailableOrderItem 
                        key={item.id}
                        item={item}
                    />
                })
            }
        </div>
    );
});

export default AvailableOrderItems;