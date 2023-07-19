import React from 'react';
import {Route} from 'react-router-dom';
import Error from './pages/Error';
import One from './pages/One';

const wrapComponent = (wrapperProps) => ((WrappedComponent) => {
    const wrapper = (props) => <WrappedComponent {...props} />;
    return wrapper;
});

const ProtectedRoute = ({role, allowedRoles, children}) => {
    const isAuthorized = allowedRoles.includes(role);
    const WrappedComponent = () => {
        return children;
    }
    return (
        isAuthorized? <WrappedComponent />: null
    )
}


export default ProtectedRoute;