import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';


const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location = useLocation();
    console.log(location);
   
    if(loading){
        return <Spinner animation="border" variant="primary" />
    }

    if(user){
        return children;
    }

    return <Navigate state={{from: location}} to="/login" replace></Navigate>;
};

export default PrivateRoute;

/**
 * ---------------------
 *     STEPS
 * ---------------------
 * 1.Check user is looged in or not
 * 2. if user is looged in, then allow them to visit the route
 * 3. Else redirect the user to the login page.
 * 4. Setup the private router
 * 5. Handle Loading
 * 
 * 
 * **/ 