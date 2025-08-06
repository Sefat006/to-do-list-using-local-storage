
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <div className="mx-auto px-5 m">
            <Outlet></Outlet>
        </div>
    );
};

export default Root;