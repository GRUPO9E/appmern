import React from 'react'

function SeleccionMedioPago() {
    return (
        
            <select className="form-select">
                <option disabled selected>Seleccione</option>
                <option value=" 0">Efectivo</option>
                <option value="0">Tarjeta de Credito</option>
            </select>
        
    );
}

export default SeleccionMedioPago