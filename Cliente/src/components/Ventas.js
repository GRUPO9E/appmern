import React, { useState } from 'react'
import '../Style/estilos.css';
//import BotonIngresarVenta from './BotonIngresarVenta';
import TablaVentas from './TablaVentas';
import EncabezadoTablaVentas from './EncabezadoTablaVentas';

import { Fragment } from 'react/cjs/react.production.min';
//import ModalTitle from './ModalTitle';
//import ModalFooter from './ModalFooter';
import ModalVentas from './ModalVentas';
import ModalEliminarVenta from './ModalEliminarVenta';

function Ventas () {

  const [tituloModal, setTituloModal] = useState("");
  const [textoBuscar, setTextoBuscar] = useState("");
  const [idVentaEliminar, setIdVentaEliminar] = useState("");
  //const [statusEliminar, setStatusEliminar] = useState("");
  const [idVentaEditar, setIdVentaEditar] = useState("");

  function getData2(val){
    setIdVentaEliminar(val);
  }  

  function getDataEditar2(val) {
    setIdVentaEditar(val);
  }


    return (
      <Fragment>
        <div className = "col-xl-10 col-md-10" style={{backgroundColor: '#ececec'}} >
          <h1 className="text-center mt-5 mb-5 pb-4">Gestión de Ventas</h1>
            <div className="row justify-content-md-center">
                <div className ="col col-lg-10">
                  <div className ="row">
                    <div className ="col-auto">
                    <button
                      className="btn btn-success mb-3"
                      data-bs-toggle="modal"
                      data-bs-target="#modalVentas"
                      onClick={e => setTituloModal("Crear una Venta nuevo")}
                    >
                  Crear Venta
                </button>
                    </div>
                  </div>
                  <table className="table table-striped">
                    <EncabezadoTablaVentas></EncabezadoTablaVentas>
                    <tbody>
                      <TablaVentas textoBuscar={textoBuscar} setTextoBuscar={setTextoBuscar} 
                      sendData2={getData2} sendDataEditar2={getDataEditar2}></TablaVentas>
                    </tbody>
                  </table>
                </div>
              </div>
        </div>
        {/* Modal Fade */}
        <div  className="modal fade"
              id="modalVentas"
              tabindex="-1"
              data-bs-backdrop="static"
              data-bs-keyboard="false"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
              >
          <div className="modal-dialog">
            <div className="modal-content">
                
                <ModalVentas tituloModal={tituloModal} setTituloModal={setTituloModal} 
            idVentaEditar={idVentaEditar} setIdVentaEditar={setIdVentaEditar}></ModalVentas>                
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
            <ModalEliminarVenta idVentaEliminar={idVentaEliminar} setIdVentaEliminar={setIdVentaEliminar}></ModalEliminarVenta>
          </div>
        </div>
      </div>
      </Fragment>
        
    );
}

export default Ventas
