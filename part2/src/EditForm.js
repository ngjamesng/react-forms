import React, { useState } from "react";

function EditForm({ id, editTodo, task, showEditForm }) {
  const intialState = { newTask: task };
  const [formData, setFormData] = useState(intialState);

  const handleSubmit = evt => {
    evt.preventDefault();
    editTodo(id,formData.newTask);
    setFormData({newTask: ""});
    showEditForm();
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
      <label htmlFor="newTask"></label>
      <input id="newTask"
        name="newTask"
        value={formData.newTask}
        onChange={handleChange}
      />
      <button>save task!</button>
    </form>
  );
}

export default EditForm;
