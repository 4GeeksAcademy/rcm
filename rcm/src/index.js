import React from 'react';
import ReactDOM from 'react-dom/client';

import './styles/index.css';
import NewRecipe from "./views/newRecipe"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NewRecipe />
  </React.StrictMode>
);