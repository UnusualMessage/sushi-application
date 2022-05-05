import AvailableOrder from "./Components/AvailableOrder";
import AvailableOrderToolbar from "./Components/AvailableOrderToolbar";

import "./Courier.scss";

const Courier = () => {
    return(
        <section className="available-orders">
            <AvailableOrder />
            <AvailableOrderToolbar />
        </section>
    );
}

export default Courier;