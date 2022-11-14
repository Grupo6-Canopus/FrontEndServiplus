const Login = () => {
	return (
		<div className="container mt-3">
			<h3>Login</h3>
			<form className="container" action="">
				<div className="row">
					<div className="col-4">
						<label htmlFor="correoelectronico">Correo electronico *</label>
						<input className="form-control" type="text" name="Correo electronico" id="Correo electronico" />
					</div>
					<div className="col-4">
						<label htmlFor="tipo">Contraseña *</label>
						<input className="form-control" type="text" name="Contraseña" id="Contraseña" />
					</div>
					<div className="mt-3">
						<button className="btn btn-primary">Ingresar</button>
						<a href="/" className="btn btn-link">Cancelar</a>
					</div>
				</div>

			</form>
		</div>

	);
}
export default Login;
