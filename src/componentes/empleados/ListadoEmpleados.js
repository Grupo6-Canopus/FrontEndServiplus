import { useState, useEffect } from "react";
import Estados from "../../enums/Estados";
import EmpleadosServicios from "../../servicios/EmpleadosServicios";

const ListadoEmpleados = () => {

    const [listadoEmpleados, setListadoEmpleados] = useState([]);
    const [estado, setEstado] = useState(Estados.CARGANDO);
    const [criterio, setCriterio] = useState("");
   
   const cargarEmpleados = async () => {
        try {
            const respuesta = await EmpleadosServicios.buscarEmpleados();
            console.log(respuesta);
            if (respuesta.data.length > 0) {
                setListadoEmpleados(respuesta.data);
                setEstado(Estados.OK);
            }
            else {
                setEstado(Estados.VACIO);
            }
        } catch (error) {
            setEstado(Estados.ERROR);
        }
    }

    const buscarEmpleados = async (event) => {
        event.preventDefault();
        try {
            const respuesta = await EmpleadosServicios.buscarEmpleados(criterio);
            console.log(respuesta.data);
            if (respuesta.data.length > 0) {
                setListadoEmpleados(respuesta.data);
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
        cargarEmpleados();
    }, [])

    const cambiarCriterio = (event) => {
        setCriterio(event.target.value);
    }

    return (
        <div className="container">
            <h3 className="mt-3">Lista de Empleados</h3>
            <form action="">
                <input type="text" value={criterio} onChange={cambiarCriterio} id="criterio" name="criterio" />
                <button id="buscar" name="buscar" onClick={buscarEmpleados} >Buscar</button>
            </form>
            <table className="table table-sm">
                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Nombres</th>
                        <th>Apellidos</th>
                        <th>Cargo</th>
                        <th>Área</th>
                        <th>Teléfono</th>
                        <th>Correo</th>
                        <th>Rol</th>
                        <th>Estado</th>
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
                                listadoEmpleados.map((empleado) => (
                                    <tr key={empleado._id}>
                                        <td>{empleado.codigo}</td>
                                        <td>{empleado.nombres}</td>
                                        <td>{empleado.apellidos}</td>
                                        <td>{empleado.cargo}</td>
                                        <td>{empleado.area}</td>
                                        <td>{empleado.telefono}</td>
                                        <td>{empleado.email}</td>
                                        <td>{empleado.rolAdministrador}</td>
                                        <td>{empleado.activo}</td>
                                        <td>
                                            <a className="btn btn-sm btn-warning me-2" href={"/Empleados/form/" + empleado._id}>Editar</a>
                                            <a className="btn btn-sm btn-danger me-2" href={"/Empleados/form/" + empleado._id}>Cancelar</a>
                                        </td>
                                    </tr>
                                ))
                    }
                </tbody>
            </table>

           
        </div>
    )
}

export default ListadoEmpleados;