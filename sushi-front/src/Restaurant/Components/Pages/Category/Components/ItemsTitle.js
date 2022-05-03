import { observer } from "mobx-react-lite";

import CurrentCategory from "../../../Store/CurrentCategory";

import "../Styles/ItemsTitle.scss";

const ItemsTitle = observer(() => {
    return (
        <section className='main-title'>
            <h1>
                {CurrentCategory.category}
            </h1>
        </section>
    )
});

export default ItemsTitle;