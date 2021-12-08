import React, { useState } from 'react'
import '../Style/estilos.css'
import CuerpoTablaUsuario from './CuerpoTablaUsuario';
import EncabezadoTablaUsuario from './EncabezadoTablaUsuario';
import { Fragment } from 'react/cjs/react.production.min';
import ModalEliminarUsuario from './ModalEliminarUsuario';
import ModalUsuario from './ModalUsuario';


function Cuerpo () {

  const [tituloModal, setTituloModal] = useState("");
  const [textoBuscar, setTextoBuscar] = useState("");
  const [idUsuarioEliminar, setIdUsuarioEliminar] = useState("");
  //const [statusEliminar, setStatusEliminar] = useState("");
  const [idUsuarioEditar, setIdUsuarioEditar] = useState("");

  function getData2(val){
    setIdUsuarioEliminar(val);
  }  

  function getDataEditar2(val) {
    setIdUsuarioEditar(val);
  }


    return (
      <Fragment>
        <div className = "col-xl-10 col-md-10" style={{backgroundColor: '#ececec'}}>
          <h1 className="text-center mt-5 mb-5 pb-4">Gestión de Usuarios y Roles</h1>
            <div className="row justify-content-md-center">
                <div className ="col col-lg-10">
                  <div className ="row">
                    <div className ="col-auto">
                    </div>
                    
                  </div>
                  <table className="table table-striped">
                    <EncabezadoTablaUsuario></EncabezadoTablaUsuario>
                    <tbody>
                      <CuerpoTablaUsuario textoBuscar={textoBuscar} setTextoBuscar={setTextoBuscar} 
                      sendData2={getData2} sendDataEditar2={getDataEditar2}></CuerpoTablaUsuario>                      
                    </tbody>
                  </table>
                </div>
              </div>
        </div>
        {/* Modal Fade */}
        <div  className="modal fade"
              id="modalUsuario"
              tabindex="-1"
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
              >
          <div className="modal-dialog">
            <div className="modal-content">
            <ModalUsuario tituloModal={tituloModal} setTituloModal={setTituloModal} 
            idUsuarioEditar={idUsuarioEditar} setIdUsuarioEditar={setIdUsuarioEditar}></ModalUsuario>
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
            <ModalEliminarUsuario idUsuarioEliminar={idUsuarioEliminar} setIdUsuarioEliminar={setIdUsuarioEliminar}></ModalEliminarUsuario>
          </div>
        </div>
        
      </div>
      </Fragment>
        
    );
}

export default Cuerpo