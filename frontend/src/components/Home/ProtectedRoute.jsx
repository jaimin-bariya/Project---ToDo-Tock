import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../Conexts/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  if (loading) {
    return <div>Loading...</div>; // Optional: add a loading spinner
  }

  // If no user is logged in, redirect to login page
  if (!user) {
    return <Navigate to="/" />;
  }

  // Render the protected content if user is authenticated
  return children;
};

export default ProtectedRoute;
