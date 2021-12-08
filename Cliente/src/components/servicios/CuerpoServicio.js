import React, { useState } from 'react'
import '../../Style/estilos.css'
import HeaderTablaServicio from './HeaderTablaServicio';
import { Fragment } from 'react/cjs/react.production.min';
import ModalServicio from './ModalServicio';
import FilaTabla from './FilaTabla';
import ModalEliminarServicio from './ModalEliminarServicio';

function Cuerpo() {

  const [tituloModal, setTituloModal] = useState("");
  const [textoBuscar, setTextoBuscar] = useState("");
  const [idServicioEliminar, setIdServicioEliminar] = useState("");
  //const [statusEliminar, setStatusEliminar] = useState("");
  const [idServicioEditar, setIdServicioEditar] = useState("");

  function getData2(val){
    setIdServicioEliminar(val);
  }  

  function getDataEditar2(val) {
    setIdServicioEditar(val);
  }
  
  return (
    <Fragment>
      <div className="col-xl-10 col-md-10 " style={{backgroundColor: '#ececec'}}>
        <h1 className="text-center mt-5 mb-5 pb-4">Gestión de Servicios</h1>
        <div className="row justify-content-md-center ">
          <div className="col col-lg-10">
            <div className="row">
              <div className="col-auto">
                <button
                  className="btn btn-success mb-3"
                  data-bs-toggle="modal"
                  data-bs-target="#modalServicio"
                  onClick={e => setTituloModal("Registrar servicio")}
                >
                  Crear Servicio
                </button>
              </div>
              <div class="col-4 offset-md-5 offset-lg-5">
                <input type="text" class="form-control" id="campoBuscar" placeholder="Buscar por ID o descripción"
                  onChange={e => setTextoBuscar(e.target.value)}
                  value={textoBuscar}
                />
              </div>
            </div>
            <table className="table table-striped">
              <HeaderTablaServicio></HeaderTablaServicio>
              <tbody>
                <FilaTabla textoBuscar={textoBuscar} setTextoBuscar={setTextoBuscar} 
                sendData2={getData2} sendDataEditar2={getDataEditar2}></FilaTabla>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* Modal Fade */}
      <div className="modal fade"
        id="modalServicio"
        tabindex="-1"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <ModalServicio tituloModal={tituloModal} setTituloModal={setTituloModal} 
            idServicioEditar={idServicioEditar} setIdServicioEditar={setIdServicioEditar}></ModalServicio>
          </div>
        </div>
      </div>
      <div className="modal fade"
        id="modalEliminar"
        tabindex="-1"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <ModalEliminarServicio idServicioEliminar={idServicioEliminar} setIdServicioEliminar={setIdServicioEliminar}></ModalEliminarServicio>
          </div>
        </div>
      </div>
    </Fragment>

  );
}

export default Cuerpo