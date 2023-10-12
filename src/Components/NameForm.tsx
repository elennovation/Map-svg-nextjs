import React from "react";

interface INameFormProps {
  location: string;
  resetLocation: () => void;
}
export const NameForm: React.FC<INameFormProps> = ({
  location,
  resetLocation
}) => {
  const [name, setName] = React.useState("");

  return (
    <div className="container">
      <h1>Vase jmeno</h1>
      <input
        className="name-input"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      {name.length > 1 && (
        <button
          className="continue-button"
          onClick={() => {
            alert(location + " " + name);
            resetLocation();
            setName("");
          }}
        >
          Odeslat
        </button>
      )}
    </div>
  );
};
