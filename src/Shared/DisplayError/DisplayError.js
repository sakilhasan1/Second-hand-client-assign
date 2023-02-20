import React, { useContext } from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const DisplayError = () => {
    const { logOut } = useContext(AuthContext)
    const navigate = useNavigate()
    const error = useRouteError();


    const handleSignOut = () => {
        logOut()
            .then(() => {
                navigate('/login')
            })
            .catch(error => console.log(error))
    }


    return (
        <div>
            <p className='text-red-500'> Something went wrong</p>
            <p className='text-red-500'> {error.statusText || error.message}</p>
            <h3 className="text-3xl">Please <button className='btn' onClick={handleSignOut}>SignOut</button>and log back in</h3>

        </div>
    );
};

export default DisplayError;