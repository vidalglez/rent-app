import React from 'react';

class Details extends React.Component {
  render() {
    return (
      <section id="details" className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6 order-2">
              <img
                src="/img/kitchen.jpg"
                alt=""
                className="img-fluid mb-3 rounded"
              />
            </div>
            <div className="col-md-6 order-1">
              <h3>Detalles de arrendamiento</h3>
              <p>
                En caso de estar interesado (a) en ver la propiedad será bajo
                previa cita, ya que el acceso es controlado y no se podra
                acceder sin autorización por parte de la (el) propietario, se
                pide formalidad.
              </p>
              <div className="d-flex">
                <div className="p-4 align-self-start">
                  <i className="fas fa-check fa-2x" />
                </div>
                <div className="p-4 align-self-end">
                  Todas las habitaciones cuentan con closets
                </div>
              </div>
              <div className="d-flex">
                <div className="p-4 align-self-start">
                  <i className="fas fa-check fa-2x" />
                </div>
                <div className="p-4 align-self-end">
                  Ventanas y puertas cuentan con mosquiteros y cortineros.
                </div>
              </div>
              <div className="d-flex">
                <div className="p-4 align-self-start">
                  <i className="fas fa-check fa-2x" />
                </div>
                <div className="p-4 align-self-end">
                  Los baños completos tienen canceles.
                </div>
              </div>
              <div className="d-flex">
                <div className="p-4 align-self-start">
                  <i className="fas fa-check fa-2x" />
                </div>
                <div className="p-4 align-self-end">
                  La cochera es para dos autos.
                </div>
              </div>
              <div className="d-flex">
                <div className="p-4 align-self-start">
                  <i className="fas fa-check fa-2x" />
                </div>
                <div className="p-4 align-self-lg-end">
                  La casa se renta por minímo un año y el contrato se lleva a
                  cabo ante notario.
                </div>
              </div>
              <div className="d-flex">
                <div className="p-4 align-self-start">
                  <i className="fab fa-whatsapp" id="whatsapp-icon" />
                </div>
                <div className="p-4 align-self-end">Para mayor informaci&oacute;n, manda un mensaje al Whatsapp 4731212901</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Details;
