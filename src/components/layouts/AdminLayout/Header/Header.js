import React from 'react';
import{BrowserRouter as Router, Switch, Route} from "react-router-dom"
import ClienteCRUD from '../../../views/AdminCliente/ClienteCRUD';
import FacturaCRUD from "../../../views/AdminFactura";
import {Nav, NavDropdown} from 'react-bootstrap';

export default function Head() {
    return (
      <Router>
        <Nav variant="pills">
          <Nav.Item>
            <Nav.Link href="/">
              Inicio
            </Nav.Link>
          </Nav.Item>
          <NavDropdown title="ABM" id="nav-dropdown">
            <NavDropdown.Item className="nav-link active" href="/facturas">Facturas</NavDropdown.Item>
            <NavDropdown.Item className="nav-link active" href="/clientes">Clientes</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <br/>
        <Switch>
          <Route path="/facturas">
            <FacturaCRUD />
          </Route>
          <Route path="/clientes">
            <ClienteCRUD/>
          </Route>
          <Route path="/">
            <h1>INICIO</h1>
          </Route>
        </Switch>
      </Router>
    );
}