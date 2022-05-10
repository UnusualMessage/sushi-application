import { useState } from "react";

import AddCityModal from "./AddCityModal";

import "../Styles/ShopsTitle.scss";

const ShopsTitle = () => {
    const [addingCityActive, setAddingCityActive] = useState(false);

    const showModal = () => {
        setAddingCityActive(true);
    }

    return(
        <section className='shops-title'>
            <h1>
                РЕСТОРАНЫ
            </h1>

            <span className="shops-add" onClick={showModal}>
                Добавить
            </span>

            <AddCityModal active={addingCityActive} setActive={setAddingCityActive}/>
        </section>
    );
}

export default ShopsTitle;