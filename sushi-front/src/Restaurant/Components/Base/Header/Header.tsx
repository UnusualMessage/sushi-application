import HeaderCart from './Components/HeaderCart';
import HeaderMenu from './Components/HeaderMenu';
import HeaderInfo from './Components/HeaderInfo';

import './Header.scss';

const Header = () => {
    return (
        <>
            <header className='header'>
                <div className='header-content'>
                    <HeaderInfo />
                    <HeaderMenu />
                    <HeaderCart />
                </div>
            </header>
        </>

    )
}

export default Header;