import React from "react";


function Box({ backgroundColor, height, width, id, removeBox }) {

  const style = { backgroundColor, height, width };

  return (
    <div>
      <div style={style}></div>
      <button onClick={() => removeBox(id)}>X</button>
    </div>
  )
}

export default Box;
