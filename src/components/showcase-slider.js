import React from 'react';
/* SHOWCASE SLIDER (CARROUSEL) */
const Slider = (props) => (
  <section id="showcase">
    <div id="myCarousel" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" className="active" />
        <li data-target="#myCarousel" data-slide-to="1" />
        <li data-target="#myCarousel" data-slide-to="2" />
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item carousel-image-1 active">
          <div className="container">
            <div className="carousel-caption d-sm-block text-right mb-5">
              <h2 className="display-6">Vive c&oacute;modamente</h2>
              <p className="lead text-success">
                Ambiente y tranquilidad en area privada y segura con control de acceso
              </p>
            </div>
          </div>
        </div>
        <div className="carousel-item carousel-image-2">
          <div className="container">
            <div className="carousel-caption d-sm-block mb-5">
              <h2 className="display-6">Conexi&oacute;n con Autopista</h2>
              <p className="lead text-muted">
                Accede r&aacute;pidamente a traves de la autopista Guanajuato - Silao y evita tr&aacute;fico
              </p>
            </div>
          </div>
        </div>
        <div className="carousel-item carousel-image-3">
          <div className="container">
            <div className="carousel-caption d-sm-block text-right mb-5">
              <h2 className="display-6">Amenidades</h2>
              <p className="lead">
                Espacio compartido 
              </p>
            </div>
          </div>
        </div>
        <a
          href="#myCarousel"
          data-slide="prev"
          className="carousel-control-prev"
        >
          <span className="carousel-control-prev-icon" />
        </a>
        <a
          href="#myCarousel"
          data-slide="next"
          className="carousel-control-next"
        >
          <span className="carousel-control-next-icon" />
        </a>
      </div>
    </div>
  </section>
);

export default Slider;
