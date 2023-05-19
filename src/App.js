import React, { useState } from 'react';
import './App.css';
import Form from './components/Form';
import BoxDisplay from './components/BoxDisplay';

function App() {
  const [boxList, setBoxList] = useState([]);


  const addBox = ( newBox ) => {
    setBoxList(boxes => [...boxes, newBox]);
  }

  return (
    <div className="App">
      <Form addBox={ addBox } />
      <BoxDisplay boxList={ boxList }  />
    </div>
  );
}

export default App;
