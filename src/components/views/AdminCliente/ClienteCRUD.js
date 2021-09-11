import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import React, { useState } from 'react'
import {Table, Button, Container, Modal, ModalBody, ModalTitle, FormGroup, InputGroup, FormControl, ModalFooter} from 'react-bootstrap'
import ModalHeader from 'react-bootstrap/esm/ModalHeader';

export default function ClienteCRUD(){

    const data = [
        { id:1, nombre:"Lucas", apellido:"Chmelik", dni:"38422138"},
        { id:2, nombre:"Juan", apellido:"Perez", dni:"386155155"}
    ];

    const [clientes, setClientes] = useState({
        data: data,
        id: '',
        nombre:'',
        apellido:'',
        dni:'',
        modal:{
            modalInsert: false,
            modalEdit: false
        }
    })

    const handleInputChange = (event) => {
        setClientes({
            ...clientes,
            [event.target.name]: event.target.value
        })
    }

    const mostrarModalInsert = () => {
        setClientes({
            ...clientes,
            modal: {
                modalInsert: true
            }
        })
    }

    const ocultarModalInsert = () => {
        setClientes({
            ...clientes,
            modal: {
                modalInsert: false
            }
        })
    }

    const mostrarModalEdit = (elemento) => {
        setClientes({
            ...clientes,
            id: elemento.id,
            nombre: elemento.nombre,
            apellido: elemento.apellido,
            dni: elemento.dni,
            modal: {
                modalEdit: true
            }
        })
    }

    const ocultarModalEdit = () => {
        setClientes({
            ...clientes,
            modal: {
                modalEdit: false
            }
        })
    }

    const agregar = () => {

        let listaClientes = clientes.data
        
        let clienteNuevo = {
            id: listaClientes[listaClientes.length - 1].id + 1,
            nombre: clientes.nombre,
            apellido: clientes.apellido,
            dni: clientes.dni
        }

        listaClientes.push(clienteNuevo)

        setClientes({
            ...clientes,
            data: listaClientes,
            modal:{
                modalInsert: false
            }
        })
    }

    const eliminar = (cliente) => {
        let consulta = window.confirm("Desea eliminar el cliente" + cliente.id)

        if(consulta) {
            let contador = 0
            var listaClientes = clientes.data
            listaClientes.map( (elemento) => {
                if(elemento.id === cliente.id){
                    listaClientes.splice(contador, 1)
                }
                contador++
            } )
        }

        setClientes({
            ...clientes,
            data:listaClientes
        })
    }

    const editar = () => {
        let listaClientes = clientes.data

        listaClientes.map( (elemento) => {
            if (elemento.id === clientes.id) {
                elemento.nombre = clientes.nombre
                elemento.apellido = clientes.apellido
                elemento.dni = clientes.dni
            }  
        })

        setClientes({
            ...clientes,
            data: listaClientes,
            modal:{
                modalEdit: false
            }
        })
    }

    return(
        <>
            <Container>
                <br/>
                <Button variant = "success" onClick={mostrarModalInsert} >Ingresar cliente</Button>
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
                        {clientes.data.map((elemento) => (
                            <tr>
                                <td>{elemento.id}</td>
                                <td>{elemento.nombre}</td>
                                <td>{elemento.apellido}</td>
                                <td>{elemento.dni}</td>
                                <td><Button variant="secondary" onClick={ () => mostrarModalEdit(elemento)}>Editar</Button>{" "}
                                    <Button variant="danger" onClick={() => eliminar(elemento)}>Eliminar</Button></td>
                            </tr>
                                )
                                )
                                }
                    </tbody>
                </Table>
            </Container>
            <Modal show = {clientes.modal.modalInsert}>
                <ModalHeader>
                    <ModalTitle>Ingresar cliente</ModalTitle>
                </ModalHeader>
                <ModalBody>
                    <FormGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id = "basic-addon1">Id</InputGroup.Text>
                            <FormControl 
                                aria-label="Id"
                                aria-describedby="basic-addon1"
                                readOnly
                                type="text"
                                value= {clientes.data[clientes.data.length -1].id + 1}
                            />               
                        </InputGroup>
                    </FormGroup>
                    <FormGroup>
                        <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1">Nombre</InputGroup.Text>
                            <FormControl
                                name="nombre"
                                type="text"
                                onChange={handleInputChange}
                                aria-label="Nombre"
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>
                    </FormGroup>
                    <FormGroup>
                        <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1">Apellido</InputGroup.Text>
                            <FormControl
                                name="apellido"
                                type="text"
                                onChange={handleInputChange}
                                aria-label="Apellido"
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>
                    </FormGroup>
                    <FormGroup>
                        <InputGroup className="mb-3">
                        <InputGroup.Text id="basic-addon1">DNI</InputGroup.Text>
                            <FormControl
                                name="dni"
                                type="text"
                                onChange={handleInputChange}
                                aria-label="DNI"
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>
                    </FormGroup>
                </ModalBody>
                <ModalFooter>
                    <Button variant="success" onClick={agregar}>Ingresar</Button>
                    <Button variant="danger" onClick={ocultarModalInsert}>Cancelar</Button>
                </ModalFooter>
            </Modal>
            <Modal show = {clientes.modal.modalEdit}>
                <ModalHeader>
                    <ModalTitle>Editar cliente</ModalTitle>
                </ModalHeader>
                <ModalBody>
                    <FormGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id = "basic-addon1">Id</InputGroup.Text>
                            <FormControl 
                                aria-label="Id"
                                aria-describedby="basic-addon1"
                                readOnly
                                type="text"
                                value={clientes.id}
                            />                     
                        </InputGroup>
                    </FormGroup>
                    <FormGroup>
                        <InputGroup className="mb-3">
                            <FormControl
                                name="nombre"
                                type="text"
                                onChange={handleInputChange}
                                aria-label="Nombre"
                                aria-describedby="basic-addon1"
                                value={clientes.nombre}
                            />
                        </InputGroup>
                    </FormGroup>
                    <FormGroup>
                        <InputGroup className="mb-3">
                            <FormControl
                                name="apellido"
                                type="text"
                                onChange={handleInputChange}
                                aria-label="Apellido"
                                aria-describedby="basic-addon1"
                                value={clientes.apellido}
                            />
                        </InputGroup>
                    </FormGroup>
                    <FormGroup>
                        <InputGroup className="mb-3">
                            <FormControl
                                name="dni"
                                type="text"
                                onChange={handleInputChange}
                                aria-label="DNI"
                                aria-describedby="basic-addon1"
                                value={clientes.dni}
                            />
                        </InputGroup>
                    </FormGroup>
                </ModalBody>
                <ModalFooter>
                    <Button variant="success" onClick={editar}>Ingresar</Button>
                    <Button variant="danger" onClick={ocultarModalEdit}>Cancelar</Button>
                </ModalFooter>
            </Modal>
        </>
    );
}