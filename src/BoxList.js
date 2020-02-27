import React, { useState } from 'react';
import uuid from 'uuid/v4';
import Box from './Box';
import NewBoxForm from './NewBoxForm';


function BoxList() {
  const [boxes, setBoxes] = useState([]);

  const addBox = box => {
    let newBox = { ...box, id: uuid() };
    setBoxes(oldBoxes => [...oldBoxes, newBox]);
  }

  const removeBox = id => {
    setBoxes(oldBoxes => oldBoxes.filter(box => box.id !== id))
  }

  const renderBoxes = () => {
    return (
      boxes.map(({ backgroundColor, width, height, id }) => (
        <Box backgroundColor={backgroundColor}
          width={width}
          height={height}
          id={id}
          key={id}
          removeBox={removeBox}
        />
      ))
    )
  }

  return (
    <div>
      <NewBoxForm addBox={addBox} />
      {renderBoxes()}
    </div>
  )
}

export default BoxList;