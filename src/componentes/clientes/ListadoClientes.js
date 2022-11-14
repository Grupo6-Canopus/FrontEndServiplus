import { useState, useEffect } from "react";
import Estados from "../../enums/Estados";
import ClientesServicios from "../../servicios/ClientesServicios";

const ListadoClientes = () => {

    const [listadoClientes, setListadoClientes] = useState([]);
    const [estado, setEstado] = useState(Estados.CARGANDO);
    const [criterio, setCriterio] = useState("");
   
   const cargarClientes = async () => {
        try {
            const respuesta = await ClientesServicios.buscarClientes();
            console.log(respuesta);
            if (respuesta.data.length > 0) {
                setListadoClientes(respuesta.data);
                setEstado(Estados.OK);
            }
            else {
                setEstado(Estados.VACIO);
            }
        } catch (error) {
            setEstado(Estados.ERROR);
        }
    }

    const buscarClientes = async (event) => {
        event.preventDefault();
        try {
            const respuesta = await ClientesServicios.buscarClientes(criterio);
            console.log(respuesta.data);
            if (respuesta.data.length > 0) {
                setListadoClientes(respuesta.data);
                setEstado(Estados.OK);
            }
            else {
                setEstado(Estados.VACIO);
            }
        } catch (error) {
            setEstado(Estados.ERROR);
        }
    }

    useEffect(() => {
        cargarClientes();
    }, [])

    const cambiarCriterio = (event) => {
        setCriterio(event.target.value);
    }

    return (
        <div className="container">
            <h3 className="mt-3">Lista de clientes</h3>
            <form action="">
                <input type="text" value={criterio} onChange={cambiarCriterio} id="criterio" name="criterio" />
                <button id="buscar" name="buscar" onClick={buscarClientes} >Buscar</button>
            </form>
            <table className="table table-sm">
                <thead>
                    <tr>
                        <th>Identificación</th>
                        <th>Nombres</th>
                        <th>Apellidos</th>
                        <th>Sede</th>
                        <th>Telefono</th>
                        <th>Correo</th>
                        <th className="text-center">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {estado === Estados.CARGANDO ?
                        (<tr><td>
                            <div className="spinner-border text-secondary" role="status">
                                <span className="sr-only"></span>
                            </div>
                        </td></tr>)
                        :
                        estado === Estados.ERROR ?
                            (<tr><td>Ocurrió un error, intente más tarde</td></tr>)
                            :
                            estado === Estados.VACIO ?
                                (<tr><td>Lo lamento, no hay datos</td></tr>)
                                :
                                listadoClientes.map((cliente) => (
                                    <tr key={cliente._id}>
                                        <td>{cliente.identificacion}</td>
                                        <td>{cliente.nombres}</td>
                                        <td>{cliente.apellidos}</td>
                                        <td>{cliente.sede}</td>
                                        <td>{cliente.telefono}</td>
                                        <td>{cliente.email}</td>
                                        <td>
                                            <a className="btn btn-sm btn-warning me-2" href={"/clientes/form/" + cliente._id}>Editar</a>
                                            <a className="btn btn-sm btn-danger me-2" href={"/clientes/form/" + cliente._id}>Cancelar</a>
                                        </td>
                                    </tr>
                                ))
                    }
                </tbody>
            </table>

           
        </div>
    )
}

export default ListadoClientes;