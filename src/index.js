import React from 'react';
import ReactDOM from 'react-dom';
import 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
  <React.StrictMode>
    <div>
      <nav class="nav nav-pills nav-fill">
        <a class="nav-link active" href='/facturas'>CRUD Facturas</a>
        <a class="nav-link active" href='/clientes'>CRUD Clientes</a>
      </nav>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
