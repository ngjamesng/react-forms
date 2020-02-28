import React, {useState} from "react";
import EditForm from './EditForm'


function Todo({ task, id, editTodo, removeTodo }) {

  const [showEdit, setShowEdit] = useState(false);

  const showEditForm = () => {
    setShowEdit((showEdit)=>!showEdit)
  }

  return (
    <li>
      <p> {`Task: ${task}`} </p>
      <button onClick={() => removeTodo(id)}>X</button>
      <button onClick={showEditForm}>Edit</button>
      {showEdit 
      ? <EditForm id={id} editTodo={editTodo} task={task} showEditForm={showEditForm}/> 
      : null}
    </li>
  )
}

export default Todo;
