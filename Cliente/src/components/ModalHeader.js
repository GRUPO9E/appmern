import React from 'react'



function ModalHeader() {
    return (
        <div className="modal-header">
            <h5 className="modal-title" id="tituloModal">Registrar Usuario</h5>
            <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                 aria-label="Close"
             ></button>
        </div>
    );
}

export default ModalHeader