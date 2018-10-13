import React from 'react';

class Details extends React.Component {
  render() {
    return (
      <section id="details" className="py-5">
        <div className="container">
          <h3 className="text-center">Arrendamiento</h3>  
          <div className="row">
            <div className="col-md-6 order-2">
              <img
                src="/img/kitchen.jpg"
                alt=""
                className="img-fluid mb-3 rounded"
              />
            </div>
            <div className="col-md-6 order-1">
              
              <p>
                En caso de estar interesado en ver la propiedad, ésta será bajo
                previa cita ya que el acceso es controlado y no se podr&aacute;
                acceder a la privada sin autorización por parte del propietario, se
                pide formalidad al momento de agendar la cita.
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
