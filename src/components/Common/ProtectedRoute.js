import React from 'react';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const ProtectedRoute = ({ user, children }) => {
  if(!user){
    return <Navigate to='/login' replace/>;
  }

  return children;
};

ProtectedRoute.defaultProps = {
  user: null
};

ProtectedRoute.propTypes = {
  user: PropTypes.object,
  children: PropTypes.node.isRequired,
};

export default ProtectedRoute;