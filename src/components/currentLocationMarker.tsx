import { Marker } from "@react-google-maps/api";
import { url } from "inspector";
import { ImLocation } from "react-icons/im";

interface IProps {
  position: {
    lat: number;
    lng: number;
  };
}

export const CurrentLocationMarker: React.FC<IProps> = ({ position }) => {
  return (
    <Marker
      position={position}
      icon={
        "https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png"
      }
    />
  );
};
