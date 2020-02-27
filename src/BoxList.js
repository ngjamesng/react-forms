import React, { useState } from 'react';
import uuid from 'uuid/v4';
import Box from './Box';
import NewBoxForm from './NewBoxForm';


function BoxList (){
  const [boxes, setBoxes] = useState([]);

  const addBox = box => {
    let newBox = {...box, id:uuid()};
    setBoxes(oldBoxes => [...oldBoxes, newBox]);
  }
  const renderBoxes = ()=>{
    return (
      boxes.map(({backgroundColor, width, height, id}) =>(
        <Box backgroundColor={ backgroundColor }
             width={ width }
             height={ height }
             key={ id }
      />
      ))
    )
  }

  return (
    <div>
      <NewBoxForm addBox={addBox}/>
      { renderBoxes() }
    </div>
  )
}

export default BoxList;