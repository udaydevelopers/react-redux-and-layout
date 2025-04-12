// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
function Header() {
  return (
    <header id="header" className="header position-relative">
    <div className="container-fluid container-xl position-relative">

      <div className="top-row d-flex align-items-center justify-content-between">
        <a href="index.html" className="logo d-flex align-items-end">
          <h1 className="sitename">Blogy</h1><span>.</span>
        </a>

        <div className="d-flex align-items-center">
          <div className="social-links">
            <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
            <a href="#" className="twitter"><i className="bi bi-twitter"></i></a>
            <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
          </div>

          <form className="search-form ms-4">
            <input type="text" placeholder="Search..." className="form-control"/>
            <button type="submit" className="btn"><i className="bi bi-search"></i></button>
          </form>
        </div>
      </div>

    </div>

    <div className="nav-wrap">
      <div className="container d-flex justify-content-center position-relative">
        <nav id="navmenu" className="navmenu">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><a href="category.html">Category</a></li>
            <li><a href="blog-details.html">Blog Details</a></li>
            <li><a href="author-profile.html">Author Profile</a></li>
            <li className="dropdown"><a href="#"><span>Pages</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
              <ul>
                <li><a href="about.html">About</a></li>
                <li><a href="category.html">Category</a></li>
                <li><a href="blog-details.html">Blog Details</a></li>
                <li><a href="author-profile.html">Author Profile</a></li>
                <li><a href="search-results.html">Search Results</a></li>
                <li><a href="404.html">404 Not Found Page</a></li>

                <li className="dropdown"><a href="#"><span>Deep Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
                  <ul>
                    <li><a href="#">Deep Dropdown 1</a></li>
                    <li><a href="#">Deep Dropdown 2</a></li>
                    <li><a href="#">Deep Dropdown 3</a></li>
                    <li><a href="#">Deep Dropdown 4</a></li>
                    <li><a href="#">Deep Dropdown 5</a></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
          <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
        </nav>
      </div>
    </div>

  </header>
  );
}

export default Header;
