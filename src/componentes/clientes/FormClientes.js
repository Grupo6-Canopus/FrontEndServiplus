import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ClientesServicios from "../../servicios/ClientesServicios";

const FormClientes = () => {
  const { id } = useParams();
  const navigateTo = useNavigate();

  const [tipo_identificacion, setTipo_Identificacion] = useState("");
  const [identificacion, setIdentificacion] = useState("");
  const [nombres, setNombres] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [sede, setSede] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [titulo, setTitulo] = useState("");

  const guardarCliente = async (event) => {
    event.preventDefault();

    if (password === confirm) {
      try {
        const cliente = {
          tipo_identificacion: tipo_identificacion,
          identificacion: identificacion,
          nombres: nombres,
          apellidos: apellidos,
          sede: sede,
          telefono: telefono,
          email: email,
          password: password,
          titulo: titulo,
        };
        console.log(cliente);
        if (id == null) {
          await ClientesServicios.crearCliente(cliente);
          navigateTo("/");
        } else {
          await ClientesServicios.modificarCliente(id, cliente);
          navigateTo("/clientes");
        }
      } catch (error) {
        setMensaje("Ocurrió un error");
      }
    } else {
      setMensaje("Las contraseñas no coinciden");
    }
  };

  const cargarClientes = async () => {
    try {
      if (id != null) {
        const respuesta = await ClientesServicios.buscarCliente(id);
        if (respuesta.data != null) {
          console.log(respuesta);
          setTipo_Identificacion(respuesta.data.tipo_identificacion);
          setIdentificacion(respuesta.data.identificacion);
          setNombres(respuesta.data.nombres);
          setApellidos(respuesta.data.apellidos);
          setSede(respuesta.data.sede);
          setTelefono(respuesta.data.telefono);
          setEmail(respuesta.data.email);
          setPassword(respuesta.data.password);
          setConfirm(respuesta.data.password);
        }
        setTitulo("Edición");
      } else {
        setTitulo("Registro");
      }
    } catch (error) {
      console.log("Ocurrió un error");
    }
  };

  const cancelar = () => {
    if (id != null) {
      navigateTo("/clientes");
    } else {
      navigateTo("/");
    }
  };

  useEffect(() => {
    cargarClientes();
  }, []);

  const cambiarNombres = (event) => {
    setNombres(event.target.value);
  };

  const cambiarApellidos = (event) => {
    setApellidos(event.target.value);
  };

  const cambiarIdentificacion = (event) => {
    setIdentificacion(event.target.value);
  };

  
  const cambiarTelefono = (event) => {
    setTelefono(event.target.value);
  };

  const cambiarEmail = (event) => {
    setEmail(event.target.value);
  };

  const cambiarPassword = (event) => {
    setPassword(event.target.value);
  };

  const cambiarConfirm = (event) => {
    setConfirm(event.target.value);
  };

  return (
    <div className="container mt-3">
      <div>Imagen</div>
      <div>
        <h3>{titulo} de clientes</h3>
        <form className="container" action="">
          <div className="row">
            <div className="col-3">
              <label className="form-control-sm" htmlFor="nombres">
                Nombres *
              </label>
              <input
                className="form-control form-control-sm"
                type="text"
                onChange={cambiarNombres}
                value={nombres}
                name="nombres"
                id="nombres"
                required
              />
            </div>
            <div className="col-3">
              <label className="form-control-sm" htmlFor="apellidos">
                Apellidos *
              </label>
              <input
                className="form-control form-control-sm"
                type="text"
                onChange={cambiarApellidos}
                value={apellidos}
                name="apellidos"
                id="apellidos"
                required
              />
            </div>
            <div className="col-3">
              <label className="form-control-sm" htmlFor="documento">
                Ingrese Identificacion *
              </label>
              <input
                className="form-control form-control-sm"
                type="number"
                onChange={cambiarIdentificacion}
                readOnly={id != null ? true : false}
                value={identificacion}
                name="identificacion"
                id="identificacion"
                required
              />
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <label className="form-control-sm" htmlFor="telefono">
                Teléfono *
              </label>
              <input
                className="form-control form-control-sm"
                type="number"
                onChange={cambiarTelefono}
                value={telefono}
                name="telefono"
                id="telefono"
                required
              />
            </div>
            <div className="col-3">
              <label className="form-control-sm" htmlFor="correo">
                Email *
              </label>
              <input
                className="form-control form-control-sm"
                type="email"
                onChange={cambiarEmail}
                value={email}
                name="email"
                id="email"
                required
              />
            </div>
            <div className="col-3">
              <label className="form-control-sm" htmlFor="passw">
                Contraseña *
              </label>
              <input
                className="form-control form-control-sm"
                type="password"
                onChange={cambiarPassword}
                value={password}
                name="password"
                id="password"
                required
              />
            </div>
            <div className="col-3">
              <label className="form-control-sm" htmlFor="confirm">
                Confirme contraseña *
              </label>
              <input
                className="form-control form-control-sm"
                type="password"
                onChange={cambiarConfirm}
                value={confirm}
                name="confirm"
                id="confirm"
                required
              />
            </div>
          </div>
          <div className="mt-3">
            <button onClick={guardarCliente} className="btn btn-primary me-2">
              Guardar
            </button>
            <button onClick={cancelar} className="btn btn-secondary">
              Cancelar
            </button>
            <div id="mensaje">{mensaje}</div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormClientes;
