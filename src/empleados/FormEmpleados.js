import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EmpleadosServicios from "../../servicios/EmpleadosServicios";

const FormEmpleados = () => {
  const { id } = useParams();
  const navigateTo = useNavigate();

  const [codigo, setCodigo] = useState("");
  const [nombres, setNombres] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [cargo, setCargo] = useState("");
  const [area, setArea] = useState("");
  const [telefono, setTelefono] = useState("");
  const [email, setEmail] = useState("");
  const [rolAdministrador, setRoladministrador] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [titulo, setTitulo] = useState("");

  const guardarEmpleado = async (event) => {
    event.preventDefault();

    if (password === confirm) {
      try {
        const empleado = {
          codigo: codigo,
          nombres: nombres,
          apellidos: apellidos,
          cargo: cargo,
          area: area,
          telefono: telefono,
          email: email,
          rolAdministrador: rolAdministrador,
          password: password,
          titulo: titulo,
        };
        console.log(empleado);
        if (id == null) {
          await EmpleadosServicios.guardarEmpleado(empleado);
          navigateTo("/");
        } else {
          await EmpleadosServicios.modificarEmpleado(id, empleado);
          navigateTo("/clientes");
        }
      } catch (error) {
        setMensaje("Ocurrió un error");
      }
    } else {
      setMensaje("Las contraseñas no coinciden");
    }
  };

  const cargarEmpleados = async () => {
    try {
      if (id != null) {
        const respuesta = await EmpleadosServicios.buscarEmpleado(id);
        if (respuesta.data != null) {
          console.log(respuesta);
          setCodigo(respuesta.data.codigo);
          setNombres(respuesta.data.nombres);
          setApellidos(respuesta.data.apellidos);
          setCargo(respuesta.data.cargo);
          setArea(respuesta.data.area);
          setTelefono(respuesta.data.telefono);
          setEmail(respuesta.data.email);
          setRoladministrador(respuesta.data.rolAdministrador);
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
      navigateTo("/empleados");
    } else {
      navigateTo("/");
    }
  };

  useEffect(() => {
    cargarEmpleados();
  }, []);

  const cambiarNombres = (event) => {
    setNombres(event.target.value);
  };

  const cambiarApellidos = (event) => {
    setApellidos(event.target.value);
  };

  const cambiarCodigo = (event) => {
    setCodigo(event.target.value);
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
        <h3>{titulo} de Empleados</h3>
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
              <label className="form-control-sm" htmlFor="codigo">
                Ingrese Código *
              </label>
              <input
                className="form-control form-control-sm"
                type="number"
                onChange={cambiarCodigo}
                readOnly={id != null ? true : false}
                value={codigo}
                name="codigo"
                id="codigo"
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
            <button onClick={guardarEmpleado} className="btn btn-primary me-2">
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

export default FormEmpleados;
