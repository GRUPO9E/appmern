import React from 'react'

function EncabezadoTablaUsuario() {
    return (
        
        <thead>
            <tr>
                <th scope="col">ID</th>
                <th scope="col">Correo</th>
                <th scope="col">Nombres</th>
                <th scope="col">Rol</th>
                <th scope="col" id="estado">Estado</th>
                <th scope="colgroup">Acciones</th>
            </tr>
      </thead>
        
    );
}

export default EncabezadoTablaUsuario


                