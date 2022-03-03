// import Contador from "./componentes/Contador";
// import Eventos from "./componentes/Eventos";
// import Formulario from "./componentes/Formulario";
// import Lista from "./componentes/Lista";
// import Parrafos from "./componentes/Parrafos";
// import Variables from "./componentes/Variables";

function App() {
  return (
    <div className="container">
      {/* <h1>hola mundo</h1>
      <Parrafos/>
      <Variables/>
      <Eventos/>
      <Contador/>
      <Lista/>
      <Formulario/> */}

      <h1 className="text-center">Agrega evento</h1>
      <hr/>
      <div className="row">
        <div className="col-8">
          <h4 className="text-center">Lista de Eventos</h4>
          <ul className="list-group">
            <li className="list-group-item">
              <span className="lead">nombre Evento</span>
              <button className="btn btn-danger btn-sm float-right mx-2">Eliminar</button>
              <button className="btn btn-warning btn-sm float-right">Editar</button>
            </li>
          </ul>
        </div>
        <div className="col-4">
        <h4 className="text-center">formulario Evento</h4>
        </div>
      </div>
    </div>
  );
}

export default App;
