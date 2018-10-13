import React from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

export class MapContainer extends React.Component {
  constructor(props) {
    super(props);
    this.onMarkerClick = this.onMarkerClick.bind(this);
    this.state = {
      showingInfoWindow: true,
      activeMarker: {},
      selectedPlace: {}
    };
  }

  onMarkerClick(props, marker, e) {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  }

  render() {
    return (
      <section id="house-map" className="py-5">
        <div className="container">
          <div className="row">
            <div className="col">
              <h3 className="text-center">Localizaci&oacute;n</h3>              
                <p className="text-center">Villa Dr. Mora. Colonia Villas de Guanajuato</p>
              <div style={{ height: '50vh', width: '100%' }}>
                <Map
                  google={this.props.google}
                  zoom={18}
                  initialCenter={{
                    lat: 20.959843,
                    lng: -101.29562
                  }}
                >
                  <Marker
                    onClick={this.onMarkerClick}
                    name={'Villa Dr. Mora. Col. Villas de Guanajuato'}
                    position={{ lat: 20.959843, lng: -101.29562 }}
                  />

                  <InfoWindow
                    onClose={this.onInfoWindowClose}
                    marker={this.state.activeMarker}
                    visible={this.state.showingInfoWindow}
                  >
                    <div>
                      <p>{this.state.selectedPlace.name}</p>
                    </div>
                  </InfoWindow>
                </Map>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ''
})(MapContainer);
