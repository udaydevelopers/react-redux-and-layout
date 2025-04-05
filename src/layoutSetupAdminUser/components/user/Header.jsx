import { Link, useNavigate } from "react-router-dom";
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/slices/authSlice';

const Header = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <header className="p-3 text-bg-dark">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <Link to="/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
            <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"></svg>
          </Link>

          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li><Link to="/" className="nav-link px-2 text-white">Home</Link></li>
            <li><Link to="/features" className="nav-link px-2 text-white">Features</Link></li>
            <li><Link to="/pricing" className="nav-link px-2 text-white">Pricing</Link></li>
            <li><Link to="/faqs" className="nav-link px-2 text-white">FAQs</Link></li>
            <li><Link to="/about" className="nav-link px-2 text-white">About</Link></li>
          </ul>

          <div className="text-end">
            {auth.isAuthenticated ? (
              <button onClick={handleLogout} className="btn btn-outline-light me-2">Logout</button>
            ) : (
              <>
                <Link className="btn btn-outline-light me-2" to="/login">Login</Link>
                <Link className="btn btn-warning" to="/signup">Sign-up</Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
