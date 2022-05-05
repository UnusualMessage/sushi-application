import PropTypes from "prop-types";

import Modal from "../../../Others/Modal";
import HeaderCity from "./HeaderCity";

import "../Styles/HeaderCityChoice.scss";

const HeaderCityChoice = ({ active, setActive }) => {
    return(
        <Modal active={active} setActive={setActive}>
            <div className="city-choice-container">
                <div className="choice-toolbar">
                    <h1 className="choice-title">Выберите город</h1>
                    <span className="choice-close" onClick={() => {setActive(false)}}>Закрыть</span>
                </div>

                <div className="cities">
                    <HeaderCity city="Москва" setActive={setActive}/>
                    <HeaderCity city="Калуга" setActive={setActive}/>
                    <HeaderCity city="Новомосковск" setActive={setActive}/>
                    <HeaderCity city="Владивосток" setActive={setActive}/>
                    <HeaderCity city="Санкт-Петербург" setActive={setActive}/>
                    <HeaderCity city="Тула" setActive={setActive}/>
                    <HeaderCity city="Пермь" setActive={setActive}/>
                    <HeaderCity city="Екатеринбург" setActive={setActive}/>
                    <HeaderCity city="Казань" setActive={setActive}/>
                    <HeaderCity city="Самара" setActive={setActive}/>
                    <HeaderCity city="Москва" setActive={setActive}/>
                    <HeaderCity city="Владивосток" setActive={setActive}/>
                    <HeaderCity city="Санкт-Петербург" setActive={setActive}/>
                    <HeaderCity city="Тула" setActive={setActive}/>
                    <HeaderCity city="Пермь" setActive={setActive}/>
                    <HeaderCity city="Екатеринбург" setActive={setActive}/>
                    <HeaderCity city="Москва" setActive={setActive}/>
                    <HeaderCity city="Москва" setActive={setActive}/>
                    <HeaderCity city="Владивосток" setActive={setActive}/>
                    <HeaderCity city="Владивосток" setActive={setActive}/>
                    <HeaderCity city="Санкт-Петербург" setActive={setActive}/>
                    <HeaderCity city="Тула" setActive={setActive}/>
                    <HeaderCity city="Пермь" setActive={setActive}/>
                    <HeaderCity city="Москва" setActive={setActive}/>
                    <HeaderCity city="Москва" setActive={setActive}/>
                    <HeaderCity city="Владивосток" setActive={setActive}/>
                    <HeaderCity city="Владивосток" setActive={setActive}/>
                    <HeaderCity city="Санкт-Петербург" setActive={setActive}/>
                    <HeaderCity city="Тула" setActive={setActive}/>
                    <HeaderCity city="Пермь" setActive={setActive}/>
                    <HeaderCity city="Екатеринбург" setActive={setActive}/>
                    <HeaderCity city="Москва" setActive={setActive}/>
                    <HeaderCity city="Москва" setActive={setActive}/>
                    <HeaderCity city="Владивосток" setActive={setActive}/>
                    <HeaderCity city="Владивосток" setActive={setActive}/>
                    <HeaderCity city="Санкт-Петербург" setActive={setActive}/>
                    <HeaderCity city="Тула" setActive={setActive}/>
                    <HeaderCity city="Пермь" setActive={setActive}/>
                    <HeaderCity city="Екатеринбург" setActive={setActive}/>
                    <HeaderCity city="Екатеринбург" setActive={setActive}/>
                    <HeaderCity city="Владивосток" setActive={setActive}/>
                    <HeaderCity city="Санкт-Петербург" setActive={setActive}/>
                    <HeaderCity city="Тула" setActive={setActive}/>
                    <HeaderCity city="Пермь" setActive={setActive}/>
                    <HeaderCity city="Екатеринбург" setActive={setActive}/>
                    <HeaderCity city="Владивосток" setActive={setActive}/>
                    <HeaderCity city="Санкт-Петербург" setActive={setActive}/>
                    <HeaderCity city="Тула" setActive={setActive}/>
                    <HeaderCity city="Пермь" setActive={setActive}/>
                    <HeaderCity city="Екатеринбург" setActive={setActive}/>
                    <HeaderCity city="Владивосток" setActive={setActive}/>
                    <HeaderCity city="Санкт-Петербург" setActive={setActive}/>
                    <HeaderCity city="Владивосток" setActive={setActive}/>
                    <HeaderCity city="Санкт-Петербург" setActive={setActive}/>
                    <HeaderCity city="Тула" setActive={setActive}/>
                    <HeaderCity city="Пермь" setActive={setActive}/>
                    <HeaderCity city="Екатеринбург" setActive={setActive}/>
                    <HeaderCity city="Тула" setActive={setActive}/>
                    <HeaderCity city="Пермь" setActive={setActive}/>
                    <HeaderCity city="Екатеринбург" setActive={setActive}/>
                </div>
            </div>
        </Modal>
    );
}

HeaderCityChoice.propTypes = {
    active: PropTypes.bool.isRequired,
    setActive: PropTypes.func.isRequired
}

export default HeaderCityChoice;