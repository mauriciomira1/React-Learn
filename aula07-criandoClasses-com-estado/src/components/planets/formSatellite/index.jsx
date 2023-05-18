import { useState } from "react";

const initialState = {
  name: "",
};

export default function FormSatellite(props) {
  const [satellite, setSatellites] = useState(initialState);

  const handleSatelliteChange = (ev) =>
    setSatellites({
      ...satellite,
      [ev.currentTarget.name]: ev.currentTarget.value,
    });

  const handleSubmit = (ev) => {
    // eslint-disable-next-line react/prop-types
    props.addSatellite(satellite);
    ev.preventDefault();
    setSatellites(initialState);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Add satellite:</label>
          <input
            type="text"
            name="name"
            id="name"
            value={satellite.name}
            onChange={handleSatelliteChange}
          />
        </div>
        <input type="submit" />
      </form>
    </>
  );
}
