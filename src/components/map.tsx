import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

export default function SimpleMap() {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };
  // AIzaSyBs0noOj_yBE8WLIbT45GDw5l4NKCSnctk;
  // AIzaSyChwAsW1xMGkDhpy8N9QoLWQmEQtrkwKSY;
  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "400px", width: "400px" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
        <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
      </GoogleMapReact>
    </div>
  );
}
