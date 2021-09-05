import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import React, { useState } from 'react'
import { Table, Button, Container, Modal, FormGroup, InputGroup, FormControl } from 'react-bootstrap'

export default function FacturaCRUD() {

    const data = [
        { id: 1, numero: "1-0001-01", tipo: "primario" },
        { id: 2, numero: "2-0002-02", tipo: "primario" },
        { id: 3, numero: "3-0003-03", tipo: "terciario" },
        { id: 4, numero: "4-0004-04", tipo: "primario" },
        { id: 5, numero: "5-0005-05", tipo: "secundario" },
    ];

    const [datos, setDatos] = useState({
        data: data,
        id: '',
        numero: '',
        tipo: '',
        modal : {
            modalInsert: false
        }

    })

    const handleInputChange = (event) => {
        console.log(event.target.value)
        setDatos({
            ...datos,
            [event.target.name]: event.target.value
        })
    }

    const mostrarModalInsert = () => {
        setDatos({
            ...datos,
            modal:{
                modalInsert: true
            }
        })
    }

    const ocultarModalInsert = () => {
        setDatos({
            ...datos,
            modal:{
                modalInsert: false
            }
        })
    }

    const mostrarModalEdit = (element) => {
        setDatos({
            ...datos,
            id: element.id,
            numero : element.numero,
            tipo: element.tipo,
            modal:{
                modalEdit: true
            }
        })
    }

    const ocultarModalEdit = () => {
        setDatos({
            ...datos,
            modal:{
                modalEdit: false
            }
        })
    }



    const agregar = () => {

        let lista = datos.data
        let lastElement = lista[lista.length - 1];

        let factura = {
            id: lastElement.id + 1,
            numero: datos.numero,
            tipo: datos.tipo
        }

        lista.push(factura)

        setDatos({
            ...datos,
            data: lista,
            modal:{
                modalInsert: false
            }
        })
    }

    const eliminar = (dato) => {
        var opcion = window.confirm("Desea eliminar la factura" + dato.id)
        if (opcion) {
            let contador = 0
            var lista = datos.data
            lista.map((element) => {
                if (element.id === dato.id) {
                    lista.splice(contador, 1)
                }
                contador++
            }
            )
        }
        setDatos({
            ...datos,
            data: lista
        })
    }

    const editar = () => {

        let lista = datos.data

        lista.map((element) => {
            if (element.id === datos.id) {
                element.numero = datos.numero
                element.tipo = datos.tipo
            }
        }
        )
        setDatos({
            ...datos,
            data: lista,
            modal:{
                modalEdit: false
            }
        })
    }

    return (
        <>
            <Container>
                <br />
                <Button variant="success" onClick={mostrarModalInsert}>Ingresar factura</Button>
                <br />
                <br />
                <Table>
                    <tr>
                        <th>Id</th>
                        <th>Numero</th>
                        <th>Tipo</th>
                        <th>Acciones</th>
                    </tr>
                    <tbody>
                        {datos.data.map((elemento) => (
                            <tr>
                                <td>{elemento.id}</td>
                                <td>{elemento.numero}</td>
                                <td>{elemento.tipo}</td>
                                <td><Button variant="secondary" onClick={() => mostrarModalEdit(elemento)}>Editar</Button>{"  "}
                                    <Button variant="danger" onClick={() => eliminar(elemento)}>Eliminar</Button></td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Container>
            <Modal show={datos.modal.modalInsert}>
                <Modal.Header>
                    <Modal.Title>Ingresar factura</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FormGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1">Id</InputGroup.Text>
                            <FormControl
                                aria-label="Id"
                                aria-describedby="basic-addon1"
                                readOnly
                                type="text"
                                value={datos.data[datos.data.length - 1].id + 1}
                            />
                        </InputGroup>
                    </FormGroup>
                    <FormGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1">Numero</InputGroup.Text>
                            <FormControl
                                name="numero"
                                type="text"
                                onChange={handleInputChange}
                                aria-label="Numero"
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>
                    </FormGroup>
                    <FormGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1">Tipo</InputGroup.Text>
                            <FormControl
                                name="tipo"
                                type="text"
                                onChange={handleInputChange}
                                aria-label="Tipo"
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>
                    </FormGroup>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="success" onClick={agregar}>Ingresar</Button>
                    <Button variant="danger" onClick={ocultarModalInsert}>Cancelar</Button>
                </Modal.Footer>
            </Modal>
            <Modal show={datos.modal.modalEdit}>
                <Modal.Header>
                    <Modal.Title>Editar factura</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FormGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1">Id</InputGroup.Text>
                            <FormControl
                                aria-label="Id"
                                aria-describedby="basic-addon1"
                                readOnly
                                type="text"
                                value={datos.id}
                            />
                        </InputGroup>
                    </FormGroup>
                    <FormGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1">Numero</InputGroup.Text>
                            <FormControl
                                name="numero"
                                type="text"
                                onChange={handleInputChange}
                                aria-label="Numero"
                                aria-describedby="basic-addon1"
                                value={datos.numero}
                            />
                        </InputGroup>
                    </FormGroup>
                    <FormGroup>
                        <InputGroup className="mb-3">
                            <InputGroup.Text id="basic-addon1">Tipo</InputGroup.Text>
                            <FormControl
                                name="tipo"
                                type="text"
                                onChange={handleInputChange}
                                aria-label="Tipo"
                                aria-describedby="basic-addon1"
                                value={datos.tipo}
                            />
                        </InputGroup>
                    </FormGroup>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={editar}>Editar</Button>
                    <Button variant="danger" onClick={ocultarModalEdit}>Cancelar</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}