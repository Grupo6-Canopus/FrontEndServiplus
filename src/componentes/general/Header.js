const Header = () => {
    return (
        <header className="p-3 text-bg-dark">
            <div className="container">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">           
                    <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                        <li><a href="/general/bienvenida" className="nav-link px-2 text-secondary">Bienvenida</a></li>
                        <li><a href="/clientes" className="nav-link px-2 text-white">Clientes</a></li>

                        <li><a href="/empleados" className="nav-link px-2 text-white">Empleados</a></li>
                        <li><a href="/tiquetes/form" className="nav-link px-2 text-white">Tickets</a></li>
                    </ul>

                    <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
                        <input type="search" className="form-control form-control-dark text-bg-dark" placeholder="Search..." aria-label="Search"></input>
                    </form>

                    <div className="text-end">
                        <a href="/componentes/general" type="button" className="btn btn-primary me-lg-3">Inicio de Sesión 
                        </a>
                        <a href="/clientes/registro" type="button" className="btn btn-warning">Registrarse 
                        </a>
                    </div>
                </div>
            </div>

        </header>
    );
}

export default Header;
