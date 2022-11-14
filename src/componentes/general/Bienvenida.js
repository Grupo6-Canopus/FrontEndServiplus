import imagen from "../../img/sistema_pqr2.jpg";
const Bienvenida = () => {
    return (
        <div class="container">
            <label></label>
            <h1 align="center" > SERVIPLUS - CANOPUS</h1>
            <label></label>
            <div class="clearfix">
                <img src={imagen} class="col-md-5 float-md-end mb-3 ms-md-3"></img>

                <h3>Estamos para servirte.</h3>
                <p>
                Nuestro objetivo es mantener la operatividad de las empresas cuando se vea interrumpido algún servicio, mejorar los procesos para asegurarnos que no se repitan los incidentes y garantizar un mejor uso y aprovechamiento de recursos. De esta manera nuestros clientes reciben un servicio eficiente y de calidad que cumple con sus expectativas y las necesidades de su negocio, lo que les permite enfocarse únicamente en sus objetivos y prioridades internas.
                </p>

                
                
            </div>
        </div>
    );
}

export default Bienvenida;

