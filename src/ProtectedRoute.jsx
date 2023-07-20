import React from 'react';
import {Route} from 'react-router-dom';
import Error from './pages/Error';
import One from './pages/One';
import allowedRoles from './security/roles.json';
import user from './security/user.json';

const wrapComponent = (wrapperProps) => ((WrappedComponent) => {
    const wrapper = (props) => <WrappedComponent {...props} />;
    return wrapper;
});

const ProtectedRoute = ({sid, children}) => {
    const isAuthorized = user.roles.some(role => allowedRoles[sid].includes(role));
    const WrappedComponent = () => {
        return children;
    }
    return (
        isAuthorized? <WrappedComponent />: null
    )
}


export default ProtectedRoute;