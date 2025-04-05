import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginSuccess, logout } from '../redux/slices/authSlice';

const LoginPage = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);

  const handleLogin = () => {
    // Fake login data
    const userData = {
      user: { name: 'Uday Pandey' },
      token: 'fake-jwt-token',
    };

    dispatch(loginSuccess(userData));
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      {auth.isAuthenticated ? (
        <>
          <h2>Welcome, {auth.user.name}</h2>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <>
          <h2>Please Login</h2>
          <button onClick={handleLogin}>Login</button>
        </>
      )}
    </div>
  );
};

export default LoginPage;
