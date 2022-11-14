import axios from "axios";

const EmpleadosServicios = {};

EmpleadosServicios.buscarEmpleados = () => {
    return axios.get("http://localhost:8080/empleados");
}

EmpleadosServicios.filtrarEmpleados = (criterio) => {
    return axios.get("http://localhost:8080/empleados?q="+criterio);
}

EmpleadosServicios.buscarEmpleadoPorId = (id) => {
    return axios.get("http://localhost:8080/empleados/"+id);
}

EmpleadosServicios.crearEmpleado = (empleado) => {
    return axios.post("http://localhost:8080/empleados", empleado);
}

EmpleadosServicios.modificarEmpleado = (id, empleado) => {
    return axios.put("http://localhost:8080/empleados/"+id, empleado);
}


export  default EmpleadosServicios;