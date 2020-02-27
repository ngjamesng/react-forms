import React, { useState } from "react";

function NewBoxForm({ addBox }) {
  const intialState = { backgroundColor: "", width: "", height: "" };
  const [formData, setFormData] = useState(intialState);

  const handleSubmit = evt => {
    evt.preventDefault();
    addBox(formData);
    setFormData(intialState);
  }
  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((oldData) => ({
      ...oldData,
      [name]: value
    }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="backgroundColor"> Background Color:</label>
      <input id="backgroundColor"
        name="backgroundColor"
        value={formData.backgroundColor}
        onChange={handleChange}
      />
      <label htmlFor="width"> Width: </label>
      <input id="width"
        name="width"
        value={formData.width}
        onChange={handleChange}
      />
      <label htmlFor="height"> Height: </label>
      <input id="height"
        name="height"
        value={formData.height}
        onChange={handleChange}
      />
      <button>add box!</button>
    </form>
  );
}

export default NewBoxForm;
