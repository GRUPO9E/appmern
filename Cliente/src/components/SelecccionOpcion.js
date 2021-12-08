import React from 'react'

function SeleccionOpcion() {
    return (
        
            <select className="form-select">
                <option disabled selected>Seleccione</option>
                <option value=" 0">Autorizado</option>
                <option value="0">Pendiente</option>
                <option value=" 0">No autorizado</option>
            </select>
        
    );
}

export default SeleccionOpcion