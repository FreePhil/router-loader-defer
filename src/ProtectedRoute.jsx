import React from 'react';
import {Route} from 'react-router-dom';
import Error from './pages/Error';
import One from './pages/One';

const ProtectedRoute = ({component: Component, role, allowedRoles, ...rest}) => {
    const isAuthorized = allowedRoles.includes(role);
    return (
        isAuthorized? <Component {...rest} />: <Error />
    )
}

export default ProtectedRoute;