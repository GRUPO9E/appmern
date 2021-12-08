import React from 'react';
import { deleteUsuarioSE } from '../services/Usuarios.service';
import notie from 'notie';
import 'notie/dist/notie.css';

function ModalEliminarUsuario(props) {
    const {idUsuarioEliminar} = props;
    const handleEliminar = e => {
        let objId = { "_id": idUsuarioEliminar };
        deleteUsuarioSE(objId).then(response => {
            console.log(response);
            if (response.data.ok) {
                notie.alert({
                    type: 'success',
                    text: response.data.mensaje,
                });
                document.querySelector('.closeModalEliminar').click();
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
                <h5 className="modal-title" id="exampleModalLabel">Confirmar acción</h5>
                <button type="button" className="btn-close closeModalEliminar" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
                ¿Está seguro de eliminar el producto
                con id: {idUsuarioEliminar}
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                <button type="button" className="btn btn-danger" onClick={handleEliminar}>Eliminar</button>
            </div>
        </div>
    );
}

export default ModalEliminarUsuario