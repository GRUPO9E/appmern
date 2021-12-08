import React, { useEffect, useState } from 'react';
import { getUsuarioByIdSE, updateUsuarioSE } from '../services/Usuarios.service';
import notie from 'notie';
import 'notie/dist/notie.css';

function ModalUsuario(props) {

    //const { tituloModal, setTituloModal, idUsuarioEditar, setIdUsuarioEditar } = props;
    const {  idUsuarioEditar } = props;
    const [email, setEmail] = useState("");
    const [nombre, setNombre] = useState("");
    const [rol, setRol] = useState("");
    const [estado, setEstado] = useState("");
    const [_id, setId] = useState("");

    let isDisabled = false;
    
    useEffect(() => {
        getUsuarios();
    }, [idUsuarioEditar]);

    const getUsuarios = async function () {
        if (idUsuarioEditar !== null && idUsuarioEditar !== "") {
            try {
                const { data } = await getUsuarioByIdSE(idUsuarioEditar);
                setEmail(data.email);
                setNombre(data.nombre);
                setRol(data.rol);
                setEstado(data.estado);
                setId(data._id);
            } catch (error) {
                console.log(error);
            }
        }
    }

    const handleSubmit = e => {
        e.preventDefault();
        const usuario = {
            _id,
            email,
            nombre,
            rol,
            estado
        };
        console.log(usuario);
        
            try {
                updateUsuarioSE(usuario).then(response => {
                    if (response.data.ok) {
                        document.querySelector('.closeModalUsuario').click();
                        notie.alert({
                            type: 'success',
                            text: response.data.mensaje,
                        });                        
                    } else {
                        notie.alert({
                            type: 'error',
                            text: response.data.mensaje,
                        });
                    }
                });
            } catch (error) {
                console.log(error);
            }
            
            
    }
    return (
        <div className="principalBody">
            <div className="modal-header">
                <h5 className="modal-title" id="tituloModal">Actualizar usuario</h5>
                <button
                    type="button"
                    className="btn-close closeModalUsuario"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                ></button>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="modal-body">
                    <div className="row">
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="text" readOnly className="form-control" id="email"
                                onChange={e => setEmail(e.target.value)}
                                value={email} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="nombre" className="form-label">Nombres:</label>
                            <input type="text" readOnly className="form-control" placeholder="Digite su nombre"
                                onChange={e => setNombre(e.target.value)}
                                value={nombre}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="rol" className="form-label">Rol:</label>
                            <select class="form-select" onChange={e => setRol(e.target.value)}
                                value={rol}>
                                    <option disabled selected>Seleccione</option>
                                    <option value="No-asignado">No-asignado</option>
                                    <option value="administrador">Administrador</option>
                                    <option value="vendedor">Vendedor</option>
                                    
                            </select>
                            
                        </div>
                        <div className="mb-3">
                            <label htmlFor="estado" className="form-label">Estado:</label>
                            
                            <select class="form-select" onChange={e => setEstado(e.target.value)}
                                value={estado}>
                                  <option disabled selected>Seleccione</option>
                                  <option value="autorizado" >Autorizado</option>
                                  <option value="pendiente">Pendiente</option>
                                  <option value="no autorizado">No autorizado</option>
                                </select>
                        </div>

                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                    <input type="submit" className="btn btn-primary" disabled={isDisabled} value="Actualizar" />
                </div>
            </form>
        </div>

    );
}

export default ModalUsuario