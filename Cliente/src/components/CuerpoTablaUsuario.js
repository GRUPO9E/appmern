import React, { useEffect, useState } from 'react'
import BotonDangerUsuario from './BotonDangerUsuario';
import BotonWarningUsuario from './BotonWarningUsuario';
import {getUsuariosSE} from '../services/Usuarios.service';


function CuerpoTablaUsuario(props) {
    const { textoBuscar, sendData2, sendDataEditar2} = props;
    //const { setTextoBuscar} = props;

    function getData(val){
        sendData2(val);
    }
    function getDataEditar(val){
        sendDataEditar2(val);
    }

    useEffect(() => {
        getUsuarios();
    }, []);

    const [usuarios, setUsuarios] = useState([]);
    const getUsuarios = async function () {
        try {
            const { data } = await getUsuariosSE();
            
            setUsuarios(data.model);
        } catch (error) {
            console.log(error);
        }
    }
    return (
        usuarios.filter (function(item) {
            if (item.documento === undefined) {
                item.documento = "";
            }
            if (textoBuscar === "" || item.documento.includes(textoBuscar) || item._id.includes(textoBuscar)) {
                return true;
            }

        }) .map((usuario, index) => (
        <tr key={usuario._id}>        
                    
                <td > {usuario._id} </td>
                <td >{usuario.email}</td>
                <td >{usuario.nombre}</td>
                <td >{usuario.rol}</td>
                <td >{usuario.estado}</td>
                
                <td>
                    <div className="btn-group btn-group-sm">
                        <BotonWarningUsuario id={usuario._id} sendDataEditar={getDataEditar}></BotonWarningUsuario>
                        <BotonDangerUsuario id={usuario._id} sendData={getData}></BotonDangerUsuario>
                    </div>
                    
                </td>
        </tr>
        ))
    );
}

export default CuerpoTablaUsuario
