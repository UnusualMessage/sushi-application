import "../Styles/CartOrderUnit.scss";

const CartOrderUnit = () => {
    return (
        <div className="cart-order-unit">
            <div className="order-unit-image">
                <img src="/1.jfif" alt="" />
            </div>

            <div className="order-unit-description">
                <div className="order-unit-description-text-container">
                    <span className="order-unit-description-title">КЛУБНИЧНЫЙ МОРС</span>
                    <span className="order-unit-description-text">Задача организации, в особенности же сложившаяся структура организации создаёт предпосылки качественно новых шагов для всесторонне сбалансированных нововведений. </span>
                </div>

                <div className="order-unit-buttons">
                    <div className="order-unit-count">
                        <span className="order-unit-count-minus">-</span>
                        <span className="order-unit-count-current">125</span>
                        <span className="order-unit-count-plus">+</span>
                    </div>

                    <div className="order-unit-price">
                        <span className="order-unit-count-price-text">124</span>
                    </div>

                    <div className="order-unit-remove-button">
                        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <rect width="24" height="24" transform="rotate(180 12 12)" opacity="0" />
                            <path d="M13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4.29-4.3 4.29 4.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CartOrderUnit;