import React, { useState } from 'react';
import studentsArr from './studentData';
import Students from './Students';
import './App.css';

function App() {
  const students = studentsArr.map((e, index) => {
    return(
      <Students
       name = {e.name}
       scores = {e.scores}
       bio = {e.bio}
       key = {index}
      />
    )
  })
  return (
    <div className="App">{students}</div>
  )
}

export default App;
