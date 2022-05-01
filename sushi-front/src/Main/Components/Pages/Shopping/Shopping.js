import ShoppingTitle from './Components/ShoppingTitle';

import './Shopping.scss';
import ShoppingCards from './Components/ShoppingCards';

const Shopping = () => {
    return(
        <>
            <main className='main'>
                <div className='main-wrapper'>
                    <div className='main-content'>
                        <ShoppingTitle/>
                        <ShoppingCards/>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Shopping;