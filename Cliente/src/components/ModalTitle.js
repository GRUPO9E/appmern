import React from 'react'



function ModalTitle() {
    return (
        <div className="modal-header">
            <h5 className="modal-title" id="tituloModal">Registrar Venta</h5>
            <button
                type="button"
                className="btn-close closeModalVenta"
                data-bs-dismiss="modal"
                 aria-label="Close"
             ></button>
        </div>
    );
}

export default ModalTitle