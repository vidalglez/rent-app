import React from 'react';

const Header = function() {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
      <div className="container">
        <a href="index.html" className="navbar-brand">
          Casa en Renta
        </a>
        <button
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a href="index.html" className="nav-link">
                Inicio
              </a>
            </li>
            
            <li className="nav-item">
              <a href="contact.html" className="nav-link">
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

/*
            <li className="nav-item">
              <a href="about.html" className="nav-link">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a href="services.html" className="nav-link">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a href="blog.html" className="nav-link">
                Blog
              </a>
            </li>
            */

export default Header;