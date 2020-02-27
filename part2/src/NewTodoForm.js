import React, { useState } from "react";

function NewTodoForm({ addTodo }) {
  const intialState = { task: "" };
  const [formData, setFormData] = useState(intialState);

  const handleSubmit = evt => {
    evt.preventDefault();
    addTodo(formData);
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
      <label htmlFor="task"> Add Task:</label>
      <input id="task"
        name="task"
        value={formData.task}
        onChange={handleChange}
      />
      <button>add task!</button>
    </form>
  );
}

export default NewTodoForm;
