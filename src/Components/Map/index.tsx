import * as React from "react";
import { RadioSVGMap } from "react-svg-map";
// import "react-svg-map/lib/index.css";
import Czechia from "./czechia";
// import "../../styles.css";

export interface IMapProps {
  setRegion: (id: string) => void
}

const Map: React.FC<IMapProps> = ({setRegion}) => {
  return (
    <RadioSVGMap
      map={Czechia}
      className="map"
      onChange={({id}) => setRegion(id)}
    />
  );
};

export default Map