import { useState } from "react";

const initialState = {
  name: "",
  description: "",
  link: "",
  img_url: "",
};

export default function Form(props) {
  const [fields, setFields] = useState(initialState);
  const handleFieldsChange = (ev) =>
    setFields({
      ...fields,
      [ev.currentTarget.name]: ev.currentTarget.value,
    });
  const handleSubmit = (ev) => {
    // eslint-disable-next-line react/prop-types
    props.addPlanet(fields);
    ev.preventDefault();
    setFields(initialState);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={fields.name}
            onChange={handleFieldsChange}
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <input
            type="text"
            id="description"
            name="description"
            value={fields.description}
            onChange={handleFieldsChange}
          />
        </div>
        <div>
          <label htmlFor="name">Link:</label>
          <input
            type="text"
            id="link"
            name="link"
            value={fields.link}
            onChange={handleFieldsChange}
          />
        </div>
        <div>
          <label htmlFor="name">Image URL:</label>
          <input
            type="text"
            id="img_url"
            name="img_url"
            value={fields.img_url}
            onChange={handleFieldsChange}
          />
        </div>
        <br />
        <input type="submit" />
      </form>
    </>
  );
}
