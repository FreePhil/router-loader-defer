import React from 'react';
import {Route} from 'react-router-dom';
import Error from './pages/Error';
import One from './pages/One';

const ProtectedRoute = ({children, role, allowedRoles, ...rest}) => {
    const isAuthorized = allowedRoles.includes(role);
    return (
        isAuthorized? children: <Error />
    )
}

export default ProtectedRoute;