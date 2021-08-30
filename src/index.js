import React from 'react';
import ReactDOM from 'react-dom';
import 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Administrador from './components/layouts/PlantillaAdministrador'

ReactDOM.render(
  <React.StrictMode>
    <div>
      <Administrador></Administrador>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
