import React from "react";
import "react-svg-map/lib/index.css";
import "./styles/styles.scss";
import { RegionForm, NameForm } from "./Components";

const App: React.FC = () => {
  const [location, setLocation] = React.useState("");

  return (
    <div className="container">
      <nav className="navbar">
        <h1>REAS TASK</h1>
      </nav>
      <div style={{ width: "90%" }}>
        <div className="card">
          {location.length > 0 ? (
            <NameForm
              location={location}
              resetLocation={() => {
                setLocation("");
              }}
            />
          ) : (
            <RegionForm setLocation={setLocation} />
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
