import { observer } from "mobx-react-lite";

import AvailableOrderItem from "./AvailableOrderItem";

import "../Styles/AvailableOrderItems.scss";

const AvailableOrderItems = ({ items }) => {
    return(
        <div className="available-order-items">
            {
                items?.map(item => {
                    return <AvailableOrderItem 
                        key={item.id}

                        id={item.id} 
                        category={item.category}
                        price={item.price} 
                        title={item.title} 
                        image={item.path} 
                        count={item.count}
                        text={item.text}
                    />
                })
            }
        </div>
    );
}

export default observer(AvailableOrderItems);