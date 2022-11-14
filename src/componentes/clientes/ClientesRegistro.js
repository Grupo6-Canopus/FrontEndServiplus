const RegistroClientes = () => {

    return (
        <div className="container mt-3">
            <h3>Registro de Clientes</h3>
            <form className="container" action="">
                <div className="row">
                    <div className="col-4">
                        <label htmlFor="tipo">Seleccione tipo de documento *</label>
                        <select className="form-select" type="text" name="tipo" id="tipo" required>
                            <option value="Cédula">Cédula </option>
                            <option value="Cédula">Cédula de Extranjeria </option>
                            <option value="Pasaporte">Pasaporte </option>
                            <option value="Tarjeta">Tarjeta de Identidad </option>
                            <option value="Otro">Otro </option>
                        </select>
                    </div>
                    <div className="col-4">
                        <label htmlFor="identificacion">Identificación *</label>
                        <input className="form-control" type="text" name="identificacion" id="identificacion" />
                    </div>
                    <div className="col-4">
                        <label htmlFor="nombre">Nombres *</label>
                        <input className="form-control" type="text" name="nombres" id="nombres" />
                    </div>
                    <div className="col-4">
                        <label htmlFor="apellido">Apellidos *</label>
                        <input className="form-control" type="text" name="apellidos" id="apellidos" />
                    </div>
                    <div className="col-4">
                        <label htmlFor="documento">Sede *</label>
                        <select className="form-select" type="text" name="tipo" id="tipo" required>
                            <option value="Cédula">Centro </option>
                            <option value="Cédula">Oriente </option>
                            <option value="Pasaporte">Occidente </option>
                            <option value="Pasaporte">Norte</option>
                            <option value="Pasaporte">Sur</option>
                        </select>
                    </div>
                    <div className="col-4">
                        <label htmlFor="telefono">Teléfono *</label>
                        <input className="form-control" type="text" name="telefono" id="telefono" />
                    </div>
                    <div className="col-4">
                        <label htmlFor="documento">Correo electrónico *</label>
                        <input className="form-control" type="text" name="email" id="email" />
                    </div>
                    <div className="col-4">
                        <label htmlFor="documento">Ingrese contraseña *</label>
                        <input className="form-control" type="password" name="password" id="password" />
                    </div>
                    <div className="col-4">
                        <label htmlFor="documento">Confirme Contraseña *</label>
                        <input className="form-control" type="password" name="password" id="password" />
                    </div>
                </div>
                <div className="mt-3">
                    <button className="btn btn-primary">Guardar</button>
                    <a href="/" className="btn btn-link">Cancelar</a>
                </div>

            </form>
        </div>

    )
}
export default RegistroClientes;
