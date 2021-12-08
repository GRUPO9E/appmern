import React from 'react'
import {deleteVentaSE} from '../services/Ventas.service'
import notie from 'notie';
import 'notie/dist/notie.css';

function ModalEliminarVenta(props) {
    const {idVentaEliminar} = props;
    console.log (idVentaEliminar)
    const handleEliminar = e => {
        let objId = { "_id": idVentaEliminar };
        deleteVentaSE(objId).then(response => {
            console.log(response);
            if (response.data.ok) {
                notie.alert({
                    type: 'success',
                    text: response.data.mensaje,
                });
                document.querySelector('.closeModalEliminar').click();
                setTimeout(() => {window.location.href="/ventas"}, 1500);
            } else {
                notie.alert({
                    type: 'error',
                    text: response.data.mensaje,
                });
            }
        });
    }
    return (
        <div>
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Confirmar accion</h5>
                <button type="button" className="btn-close closeModalEliminar" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                ¿Está seguro que desea eliminar la venta? 
                con id: {idVentaEliminar}
            
            </div>
            <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
            <button type="button" className="btn btn-danger" onClick={handleEliminar}>Eliminar</button>
            </div>
        </div>
    );
}

export default ModalEliminarVenta