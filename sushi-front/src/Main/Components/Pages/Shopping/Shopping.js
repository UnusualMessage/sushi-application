import { observer } from 'mobx-react-lite';

import ShoppingTitle from './Components/ShoppingTitle';
import ShoppingCards from './Components/ShoppingCards';
import CurrentCategory from '../../Store/CurrentCategory';

import './Shopping.scss';
import { useParams } from 'react-router-dom';

const Shopping = () => {
    const params = useParams();
    CurrentCategory.set(params.category);

    return(
        <>
            <main className='main'>
                <div className='main-wrapper'>
                    <div className='main-content'>
                        <ShoppingTitle/>
                        <ShoppingCards category={CurrentCategory.category}/>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Shopping;