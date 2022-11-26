import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext/UserContext';
import useUserRole from '../../hooks/useUserRole';
import Loading from '../../Pages/Shared/Loading/Loading';

const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isAdmin, isUserRoleLoading] = useUserRole(user?.email);
    const location = useLocation();

    if (loading && isUserRoleLoading) {
        return <Loading></Loading>
    }

    if (user && isAdmin) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;