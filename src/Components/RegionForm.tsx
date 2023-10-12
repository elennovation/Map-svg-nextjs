import React from "react";
import Map from "./Map";
import { RegionTag } from "./";
import {okresy} from "../okresy"


interface IRegionFormProps {
  setLocation: (name: string) => void;
}

export const RegionForm: React.FC<IRegionFormProps> = ({ setLocation }) => {
  const [region, setRegion] = React.useState("");
  const [place, setPLace] = React.useState("");

  return (
    <div>
      <h1>Kde se nachazi vase nemovitost</h1>
      <Map
        setRegion={(id: string) => {
          setRegion(id);
          setPLace("");
        }}
      />
      {region.length > 0 && <h3>Vyberte okres</h3>}
      <div className="regions">
        {region.length > 0 &&
          okresy[region].map((name, index) => (
            <RegionTag
              key={name}
              selected={place === name}
              name={name}
              onClick={() => setPLace(name)}
            />
          ))}
      </div>
      {place.length > 0 && (
        <button className="continue-button" onClick={() => setLocation(place)}>
          Pokracovat
        </button>
      )}
    </div>
  );
};
