/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef } from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";
import { DefaultTheme } from "./themeMaps";
import { CurrentLocationMarker } from "./currentLocationMarker";

const containerStyle = {
  width: "400px",
  height: "218px",
};

interface IProps {
  lat: number;
  long: number;
}

const defaultOptions = {
  styles: DefaultTheme,
  panControl: false,
  zoomControl: false,
  mapTypeControl: false,
  scaleControl: false,
  rotateControl: false,
  fullscreenControl: false,
  scrollwheel: false,
  streetViewControl: false,
};

export const Map: React.FC<IProps> = ({ lat, long }) => {
  const mapRef = useRef(undefined);

  const center = {
    lat: lat,
    lng: long,
  };

  const onLoad = React.useCallback(function callback(map: any) {
    mapRef.current = map;
  }, []);

  const onUnmount = React.useCallback(function callback(map: any) {
    mapRef.current = undefined;
  }, []);

  return (
    <div>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={5}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={defaultOptions}
      >
        <CurrentLocationMarker position={center} />
      </GoogleMap>
    </div>
  );
};
function setMap(map: { fitBounds: (arg0: google.maps.LatLngBounds) => void }) {
  throw new Error("Function not implemented.");
}
