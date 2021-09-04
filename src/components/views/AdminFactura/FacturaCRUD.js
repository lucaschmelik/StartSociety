import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import React from 'react'
import {Table, Button, Container, Modal, ModalBody, ModalHader, FormGroup, ModalFooter} from 'react-bootstrap'

export default function FacturaCRUD() {

    const data= [
        {id:1, numero:"1-0001-01", tipo:"primario"},
        {id:2, numero:"2-0002-02", tipo:"primario"},
        {id:3, numero:"3-0003-03", tipo:"terciario"},
        {id:4, numero:"4-0004-04", tipo:"primario"},
        {id:5, numero:"5-0005-05", tipo:"secundario"},
    ];

    const agregar = () => console.log("Usuario editado")
    const eliminar = () => console.log("Usuario eliminado")

    return (
        <>
            <Container>
            <br/>
            <Button color ="primary">Ingresar factura</Button>
            <br/>  
            <br/>           
            <Table>
                <tr>
                    <th>Id</th>
                    <th>Numero</th>
                    <th>Tipo</th>
                    <th>Acciones</th>
                </tr>                
                <tbody>
                    {data.map((elemento) => (
                        <tr>
                            <td>{elemento.id}</td>
                            <td>{elemento.numero}</td>
                            <td>{elemento.tipo}</td>
                            <td><Button color="primary" onClick={agregar}>Editar</Button>{"  "}
                            <Button color="danger" onClick={eliminar}>Eliminar</Button></td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            </Container>
        </>
    );
}