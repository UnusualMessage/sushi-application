import './Category.scss';

import { Outlet } from 'react-router-dom';

const Category = () => {
    return (
        <>
            <main className='main'>
                <div className='main-content'>
                    <Outlet />
                </div>
            </main>
        </>
    )
}

export default Category;