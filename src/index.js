import React from 'react';
import ReactDOM from 'react-dom/client';
import UserInput from './userInput.jsx';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <h1>Dictionary App</h1>
    <h3>Add your word in the box below</h3> 
    <UserInput />
  </div>
)