import React, { useState } from 'react'

function BotonIngresarUsuario() {
    const [ setTituloModal] = useState("");
    return (
        
        <button 
            className ="btn btn-success mb-3" 
            data-bs-toggle="modal" 
            data-bs-target="#modalUsuario"
            onClick={e => setTituloModal("Registrar usuario")}
            >
            Crear Usuario
        </button>
        
    );
}

export default BotonIngresarUsuario

        