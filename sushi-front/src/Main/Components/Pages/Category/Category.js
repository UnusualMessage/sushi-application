import Title from './Components/Title';
import CurrentCategory from '../../Store/CurrentCategory';
import ItemCards from './Components/ItemCards';

import './Category.scss';
import { useParams } from 'react-router-dom';

const Category = () => {
    const params = useParams();
    CurrentCategory.set(params.category);

    return (
        <>
            <main className='main'>
                <div className='main-content'>
                    <Title />
                    <ItemCards category={CurrentCategory.category} />
                </div>
            </main>
        </>
    )
}

export default Category;