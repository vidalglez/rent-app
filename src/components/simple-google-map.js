import React from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;
//20.959785, -101.295682
//20.959843, -101.295620
class SimpleGoogleMap extends React.Component {
  static defaultProps = {
    center: {
      lat: 20.959843,
      lng: -101.295620
    },
    zoom: 17.5
  };

  render() {
    return (
      <div style={{ height: "50vh", width: "98%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{
            key: "",
            language: "es_MX",
            region: "MX"
          }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={20.959843}
            lng={-101.295620}
            text={"Servidor De Nadie"}
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
