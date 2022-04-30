import ShoppingTitle from './ShoppingTitle';

import './Shopping.scss';
import ShoppingCards from './ShoppingCards';

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