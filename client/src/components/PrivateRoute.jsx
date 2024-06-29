import { Navigate, Outlet } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ user, role, requiredRole }) => {
  if (!user) {
    return <Navigate to="/login" />;
  }

  if (role !== requiredRole) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};

export default PrivateRoute;