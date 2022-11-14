import axios from "axios";

const ClientesServicios = {};

ClientesServicios.buscarClientes = () => {
    return axios.get("http://localhost:8080/clientes");
}

ClientesServicios.filtrarClientes = (criterio) => {
    return axios.get("http://localhost:8080/clientes?q="+criterio);
}

ClientesServicios.buscarClientePorId = (id) => {
    return axios.get("http://localhost:8080/clientes/"+id);
}

ClientesServicios.crearCliente = (cliente) => {
    return axios.post("http://localhost:8080/clientes", cliente);
}

ClientesServicios.modificarCliente = (id, cliente) => {
    return axios.put("http://localhost:8080/clientes/"+id, cliente);
}


export  default ClientesServicios;