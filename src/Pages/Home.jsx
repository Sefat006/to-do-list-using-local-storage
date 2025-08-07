import React from 'react';
import Add from './Add';
import { Link } from 'react-router';

const Home = () => {
    return (
        <div className=''>
            <Link className='btn btn-wide text-white font-bold bg-red-700' to='/trash'>Trash</Link>
            <Link to="/viewList" className='btn btn-success'>View List</Link>
            <Add></Add>
        </div>
    );
};

export default Home;