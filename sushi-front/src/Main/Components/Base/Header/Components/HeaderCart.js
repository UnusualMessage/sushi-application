import { observer } from "mobx-react-lite";
import { Link } from "react-router-dom";

import CartPrice from "../../../Store/CartPrice";
import '../Styles/HeaderCart.scss';

const HeaderCart = observer(() => {
    return (
        <div className={(CartPrice.price === "0") ? 'header-cart-inactive' : "header-cart-active"}>
            <Link className='cart-link' to={(CartPrice.price !== "0") ? "/cart" : "/"}>
                <span className='cart-picture'>
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" enableBackground="new 0 0 512 512">
                        <path d="m464.5,301.1l36.5-178h-359.7l-12.5-59.2-108.4-52.9-9.4,18.7 99,47.8 50,238.8h289c0,0 28.5,17.9 17.5,40.5-4.9,7-12.5,15.6-26.1,15.6h-287.6v20.6h287.7c19.8,0 36.5-10.4 45.9-27 18.4-34.4-21.9-64.9-21.9-64.9zm-286.7-5.7l-32.3-151.6h330.5l-31.3,151.6h-266.9z" />
                        <path d="m212.2,422.1c-21.9,0-39.6,17.6-39.6,39.4s17.7,39.4 39.6,39.4 39.6-17.6 39.6-39.4-17.7-39.4-39.6-39.4zm0,58.1c-10.4,0-18.8-8.3-18.8-18.7s8.3-18.7 18.8-18.7 18.8,8.3 18.8,18.7-8.4,18.7-18.8,18.7z" />
                        <path d="m424.9,422.1c-21.9,0-39.6,17.6-39.6,39.4s17.7,39.5 39.6,39.5 40.7-17.6 39.6-39.4c0-21.8-17.7-39.5-39.6-39.5zm18.8,39.5c0,10.4-8.3,18.7-18.8,18.7s-18.8-8.3-18.8-18.7 8.3-18.7 18.8-18.7 19.8,8.3 18.8,18.7z" />
                    </svg>
                </span>

                <span className='cart-price'>
                    {CartPrice.price}
                </span>
            </Link>
        </div>
    );
})

export default HeaderCart;