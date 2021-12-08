import React from 'react'

function ModalFooter() {
    return (
        <div className="modal-footer">
            <button  type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
            <button type="button" className="btn btn-primary">Guardar</button>
        </div>
    );
}

export default ModalFooter