import React from 'react';

class Explore extends React.Component {
  render() {
    return (
      <section id="explore">
        <div className="container">
        <h3 className="p-4 text-center">Detalles interiores</h3>  
          <div className="row">
            <div className="col-md-6">
              <img
                src="/img/thumbs/Cocina2.jpg"
                alt="Vista de cocina"
                className="img-fluid mb-3 rounded"
              />
            </div>
            <div className="col-md-3">
              <h4>Planta baja</h4>
              
              <div className="d-flex">
                <div className="p-1 align-self-start">
                  <i className="far fa-check-square fa-1x" />
                </div>
                <div className="p-1 align-self-end">
                  Sala
                </div>
              </div>
              <div className="d-flex">
                <div className="p-1 align-self-start">
                  <i className="far fa-check-square fa-1x" />
                </div>
                <div className="p-1 align-self-end">
                  Comedor
                </div>
              </div>
              <div className="d-flex">
                <div className="p-1 align-self-start">
                  <i className="far fa-check-square fa-1x" />
                </div>
                <div className="p-1 align-self-end">
                  Cuarto de TV
                </div>
              </div>
              <div className="d-flex">
                <div className="p-1 align-self-start">
                  <i className="far fa-check-square fa-1x" />
                </div>
                <div className="p-1 align-self-end">
                  1/2 Baño
                </div>
              </div>
              <div className="d-flex">
                <div className="p-1 align-self-start">
                  <i className="far fa-check-square fa-1x" />
                </div>
                <div className="p-1 align-self-end">
                  Cocina Integral
                </div>
              </div>
              <div className="d-flex">
                <div className="p-1 align-self-start">
                  <i className="far fa-check-square fa-1x" />
                </div>
                <div className="p-1 align-self-end">
                  Patio (boiler)
                </div>
              </div>
              <div className="d-flex">
                <div className="p-1 align-self-start">
                  <i className="far fa-check-square fa-1x" />
                </div>
                <div className="p-1 align-self-end">
                  Cochera para uno o dos autos
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <h4>Planta alta</h4>
              <div className="d-flex">
                <div className="p-1 align-self-start">
                  <i className="far fa-check-square fa-1x" />
                </div>
                <div className="p-1 align-self-end">
                  2 Recamaras (principal y secundaria) con closets
                </div>
              </div>
              <div className="d-flex">
                <div className="p-1 align-self-start">
                  <i className="far fa-check-square fa-1x" />
                </div>
                <div className="p-1 align-self-end">
                  Baño completo dentro de habitaci&oacute;n principal
                </div>
              </div>
              <div className="d-flex">
                <div className="p-1 align-self-start">
                  <i className="far fa-check-square fa-1x" />
                </div>
                <div className="p-1 align-self-end">
                  Baño completo al lado de habitaci&oacute;n secundaria
                </div>
              </div>
            </div>  
          </div>
        </div>
      </section>
    );
  }
}

export default Explore;
