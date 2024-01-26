import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';




const Home = () => {

    return (
        <div>
            <div className='container justify-content-center'>
                <h1 className='text-center'>Home Page</h1>
                <div className=''>
                    <Link to='/films' className='btn btn-outline-primary mx-3'>Get Films</Link>
                    <Link to='/people' className='btn btn-outline-danger mx-3'>Get People</Link>
                    <Link to='/species' className='btn btn-outline-secondary mx-3'>Get Species</Link>
                </div>
            </div>
        </div>
    )
}


export default Home;


