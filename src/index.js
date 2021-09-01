import React from 'react';
import ReactDOM from 'react-dom';
import 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Administrador from './components/layouts/'
import AdminLayout from './components/layouts/';

ReactDOM.render(
  <React.StrictMode>
    <div>
      <AdminLayout></AdminLayout>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);
