import React from 'react';
/*
<a href="index.html" className="navbar-brand">
          Renta de Casa - Villas de Guanajuato
        </a>
*/
const Header = function() {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light" id="main-nav">
      <div className="container">
        <a href="#index" className="navbar-brand">
          Casa en Renta en Guanajuato
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
              <a href="#index" className="nav-link">
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a href="#gallery" className="nav-link">
                Galer&iacute;a
              </a>
            </li>
            <li className="nav-item">
              <a href="#house-map" className="nav-link">
                Localizaci&oacute;n
              </a>
            </li>                        
            <li className="nav-item">
              <a href="#details" className="nav-link">
                Arrendamiento
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;