import React from 'react';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;
//20.959785, -101.295682
//20.959843, -101.295620
class SimpleGoogleMap extends React.Component {
  static defaultProps = {
    center: {
      lat: 20.959843,
      lng: -101.29562
    },
    zoom: 17.5
  };

  render() {
    return (
      <section id="house-map">
        <div className="container">
          <div className="row">
            <div className="col">
              <h1 className="text-center">Localizaci&oacute;n</h1>
              <div style={{ height: '50vh', width: '100%' }}>
                <GoogleMapReact
                  bootstrapURLKeys={{
                    key: '',
                    language: 'es_MX',
                    region: 'MX'
                  }}
                  defaultCenter={this.props.center}
                  defaultZoom={this.props.zoom}
                >
                  <AnyReactComponent
                    lat={20.959843}
                    lng={-101.29562}
                    text={'Servidor De Nadie'}
                  />
                </GoogleMapReact>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default SimpleGoogleMap;
