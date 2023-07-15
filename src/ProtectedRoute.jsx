import React from 'react';
import {Route} from 'react-router-dom';
import Error from './pages/Error';
import One from './pages/One';

const wrapComponent = (wrapperProps) => ((WrappedComponent) => {
    const wrapper = (props) => <WrappedComponent {...props} />;
    return wrapper;
});

const ProtectedRoute = ({role, allowedRoles, component, ...rest}) => {
    const isAuthorized = allowedRoles.includes(role);
    const WrappedComponent = component;
    return (
        isAuthorized? <WrappedComponent {...rest} />: <Error {...rest} />
    )
}


export default ProtectedRoute;