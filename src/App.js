import { BrowserRouter, Route, Routes } from "react-router-dom";
import FormClientes from "./componentes/clientes/FormClientes";
import FormEmpleados from "./componentes/empleados/FormEmpleados";
import ListadoClientes from "./componentes/clientes/ListadoClientes";
import ClientesRegistro from "./componentes/clientes/ClientesRegistro";
import ListadoEmpleados from "./componentes/empleados/ListadoEmpleados";
import Bienvenida from "./componentes/general/Bienvenida";
import Header from "./componentes/general/Header";
import Login from "./componentes/general/Login";
import Footer from "./componentes/general/Footer";
import FormTickets from "./componentes/Tiquetes/FormTickets";

const App = () => {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Bienvenida/>} exact></Route>
          <Route path="/general/bienvenida" element={<Bienvenida/>} exact></Route>
          <Route path="/clientes" element={<ListadoClientes/>} exact></Route>
          <Route path="/clientes/form" element={<FormClientes/>} exact></Route>
          <Route path="/empleados/form" element={<FormEmpleados/>} exact></Route>
          <Route path="/empleados" element={<ListadoEmpleados/>} exact></Route>
          <Route path="/componentes/general" element={<Login/>} exact></Route>
          <Route path="/clientes/registro" element={<ClientesRegistro/>} exact></Route>
          <Route path="/tiquetes/form" element={<FormTickets/>} exact></Route>
          </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
