const CrearTicket = () => {
    return (
        <div className="container mt-3">
            <h3>Generar Ticket</h3>
            <form className="container" action="">
                <div className="row">
                    <div className="col-4">
                        <label htmlFor="tipo">Identificación del cliente *</label>
                        <input className="form-control" type="text" name="idcliente" id="idcliente" />
                    </div>
                    <div className="col-4">
                        <label htmlFor="tipo">Correo del cliente *</label>
                        <input className="form-control" type="text" name="email" id="email" />
                    </div>
                    <div className="col-4">
                        <label htmlFor="tipo">Tipo de requerimiento *</label>
                        <select className="form-select" type="text" name="tipo" id="tipo" required>
                            <option value="Danio">Daño o deterioro fisico </option>
                            <option value="software">Problemas con software </option>
                            <option value="Problema">No he identificado el problema </option>
                            <option value="Otro">Otro</option>
                        </select>
                    </div>
                    <div className="col-4">
                        <label htmlFor="tipo">Descripción *</label>
                        <input className="form-control" type="text" name="descripcion" id="descripcion" />
                    </div>
                    <div className="col-4">
                        <label htmlFor="tipo">Fecha de radicación *</label>
                        <input className="form-control" type="date" name="fecradicacion" id="fecradicacion" />
                    </div>
                </div>
                <div className="mt-3">
                    <button className="btn btn-primary">Crear Ticket</button>
                    <a href="/" className="btn btn-Secondaryry">Consultar estado de un Ticket</a>
                </div>

            </form>
        </div>

    )
}
export default CrearTicket;