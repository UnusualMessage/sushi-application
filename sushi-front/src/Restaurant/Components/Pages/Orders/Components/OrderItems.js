import { observer } from "mobx-react-lite";
import PropTypes from "prop-types";

import OrderItem from "./OrderItem";
import OrdersStore from "../../../Store/OrdersStore";

import "../Styles/OrderItems.scss";

const OrderItems = ({ id }) => {
    const items = OrdersStore.orders.find((order => order.id === id)).items;

    return(
        <div className="order-items">
            {
                items?.map(item => {
                    return <OrderItem 
                        key={item.id}

                        id={item.id}
                        category={item.category}
                        title={item.title}
                        price={item.price}
                        text={item.text}
                        image={item.path}
                        count={item.count}
                    />
                })
            }
        </div>
    );
}

OrderItems.propTypes = {
    id: PropTypes.number
}

export default observer(OrderItems);