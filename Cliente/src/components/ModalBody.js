import React from 'react'

function ModalBody() {
    return (
        <div className="modal-body">
            <div className="row">
                <div className="row mt-2">
                    <label for="#documento" className="form-label">N° Documento</label>
                    <input type="number"
                            className="form-control"
                            id="#documento"
                            placeholder="1 234 567 890"/>
                </div>
                <div className="row mt-2">
                    <label for="NombresyApellidos" className="form-label">Nombres y apellidos</label >
                    <input type="text"
                            className="form-control"
                            id="NombresyApellidos"
                            placeholder="Nombre Completo"/>
                </div>
                <div className="row mt-2">
                    <label for="Rol" className="form-label">Rol</label>
                    <select className="form-select" aria-label="Default select example" id="Rol">
                        <option selected>Selecciona un rol</option>
                        <option value="admin">Administrador</option>
                        <option value="vendedor">Vendedor</option>
                    </select>                         
                </div>
            </div>
        </div>
    );
}

export default ModalBody