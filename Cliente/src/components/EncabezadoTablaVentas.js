import React from 'react'

function EncabezadoTablaVentas() {
    return (
        
        <thead>
            <tr>
                <th scope="col">Codigo Venta</th>
                <th scope="col">Servicio</th>
                <th scope="col" id="estado">Medio de Pago</th>
                <th scope="col">Fecha de Venta</th>
                <th scope="col">Cliente</th>
                <th scope="col">ID Cliente</th>
                <th scope="col">Vendedor</th>
                <th scope="col" id="estado">Estado</th>
                <th scope="col">Valor Total</th>
                <th scope="colgroup">Acciones</th>
            </tr>
      </thead>
        
    );
}

export default EncabezadoTablaVentas