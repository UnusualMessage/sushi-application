const ShoppingCard = (props) => {
    const onMouseDown = (e) => {
        e.preventDefault();
    }
    
    return (
        <div className='shopping-card'>
            <div className='card-image'>
                <img src={props.imageSource} alt="" />
            </div>

            <div className='card-description'>
                <span className='card-description-title'>
                    {props.title}
                </span>

                <div className='card-description-order'>
                    <span className='order-price'>
                        {props.price}
                    </span>

                    <div className='order-button' onMouseDown={onMouseDown}>
                        <span className='order-button-text'>
                            Добавить
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShoppingCard;