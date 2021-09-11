import React from 'react';
import{BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"
import FacturaCRUD from "../../../views/AdminFactura";

export default function Head() {
    return (
      <Router>
        <nav className="nav nav-pills nav-fill">          
          <Link className="nav-link active" to="/facturas">CRUD Facturas</Link>
          <Link className="nav-link active" to="/clientes">CRUD Clientes</Link>         
        </nav>
        <br/>
        <Switch>
          <Route path="/facturas">
            <FacturaCRUD />
          </Route>
          <Route path="/clientes">
            <h1>Cliente CRUD</h1>
          </Route>
        </Switch>
      </Router>
    );
}