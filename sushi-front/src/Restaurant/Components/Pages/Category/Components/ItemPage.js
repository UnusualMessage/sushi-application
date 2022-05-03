import { useParams } from "react-router-dom";
import ShoppingData from "../../../Data/ShoppingData";

const ItemPage = () => {
    const { category, id } = useParams();
    const item = ShoppingData.find((i) => (i.id.toString() === id) && (i.category === category));
    console.log(category);
    return (
        <section className="item-page">
            <div>
                <img src={item?.path} alt="" />
            </div>

            <div>
                {item?.title}
            </div>

            <div>
                {item?.text}
            </div>

            <div>
                {item?.price}
            </div>
        </section>
    );
}

export default ItemPage;