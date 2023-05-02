import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';

const PrivateRoute = () => {
    const {user} = useContext(AuthContext);

    return (
        <div>
            
        </div>
    );
};

export default PrivateRoute;

/**
 * ---------------------
 *     STEPS
 * ---------------------
 * 1.Check user is looged in or not
 * 2. if user is looged in, then allow them to visit the route
 * 3. Else redirect the user to the login page.
 * 
 * 
 * **/ 