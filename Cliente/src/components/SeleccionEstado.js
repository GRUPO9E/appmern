import React from 'react'

function SeleccionEstado() {
    return (
        
            <select className="form-select">
                <option disabled selected>Seleccione</option>
                <option value=" 0">Procesado</option>
                <option value="0">Cancelado</option>
                <option value=" 0">Entregado</option>
            </select>
        
    );
}

export default SeleccionEstado