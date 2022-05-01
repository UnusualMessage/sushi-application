import ShoppingTitle from './Components/ShoppingTitle';

import './Shopping.scss';
import ShoppingCards from './Components/ShoppingCards';

const Shopping = () => {
    return(
        <>
            <main className='main'>
                <div className='main-wrapper'>
                    <ShoppingTitle/>
                    <ShoppingCards/>
                </div>
            </main>
        </>
    )
}

export default Shopping;