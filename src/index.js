import React from 'react';
import ReactDOM from 'react-dom/client';
import AddBox from './addbox.jsx';
import { SearchBox } from './searchbox.jsx'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <h1>Dictionary App</h1>
    <AddBox />
    <SearchBox />
  </div>
)