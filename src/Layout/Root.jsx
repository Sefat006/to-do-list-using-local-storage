
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div className='max-w-screen-lg my-10 py-12 mx-auto px-4'>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;