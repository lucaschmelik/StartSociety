import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import React from 'react'
import {Table, Button, Container} from 'react-bootstrap'

export default function ClienteCRUD(){
    const data = [
        {
            id:1, nombre:"Lucas", apellido:"Chmelik", dni:"38422138"
        },
        {
            id:2, nombre:"Juan", apellido:"Perez", dni:"386155155"
        }
    ];

    const agregar = () => console.log("El agregar funciona!");
    const eliminar = () => console.log("El eliminar funciona!");

    return(
        <>
            <Container>
                <Button color = "btn btn-secondary">Ingresar Factura</Button>
                <br/><br/>
                <Table>
                    <tr>
                        <th>Id</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>DNI</th>
                        <th>Acciones</th>
                    </tr>
                    <tbody>
                        {data.map((elemento) => (
                            <tr>
                                <td>{elemento.id}</td>
                                <td>{elemento.nombre}</td>
                                <td>{elemento.apellido}</td>
                                <td>{elemento.dni}</td>
                                <td><Button variant="secondary" onClick={agregar}>Editar</Button>{" "}
                                    <Button variant="danger" onClick={eliminar}>Eliminar</Button></td>
                            </tr>
                                )
                                )
                                }
                    </tbody>
                </Table>
            </Container>
        </>
    );
}