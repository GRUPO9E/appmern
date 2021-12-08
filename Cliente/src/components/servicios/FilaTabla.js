import React, { useEffect, useState } from 'react'
import EliminarServicio from './EliminarServicio';
import EditarServicio from './EditarServicio';
import { getServiciosSE } from '../../services/Servicios.service';
function CuerpoTablaUsuario(props) {
    const { textoBuscar, sendData2, sendDataEditar2 } = props;
    //const {setTextoBuscar } = props;

    function getData(val){
        sendData2(val);
    }        
    function getDataEditar(val) {
        sendDataEditar2(val);
    }
    useEffect(() => {
        getServicios();
    }, []);

    const [servicios, setServicios] = useState([]);
    const getServicios = async function () {
        try {
            const { data } = await getServiciosSE();
            setServicios(data.servicios);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        servicios.filter(function(item) {
            if (item.cpeID === undefined) {
                item.cpeID = "";
            }
            if (textoBuscar === "" || item.cpeID.includes(textoBuscar) || item._id.includes(textoBuscar)) {
                return true;
            }
        }).map((servicio, index) => (
            <tr key={servicio._id}>
                <td>{servicio.cpeID}</td>
                <td>{servicio.cpeName}</td>
                <td>{servicio.ubicacion}</td>
                <td>{servicio.coordenadas}</td>
                <td>{servicio.tipoServicio}</td>
                <td>{servicio.nombreContacto}</td>
                <td>{servicio.clienteID}</td>
                <td>{servicio.direccionIP}</td>
                <td>{servicio.mask}</td>
                <td>{servicio.tamañoAntena}</td>
                <td>{servicio.bucW}</td>
                <td>{servicio.bucOL}</td>
                <td>{servicio.lnbOL}</td>
                <td>{servicio.disponible ? "Sí" : "No"}</td>
                <td>
                    <div className="btn-group btn-group-sm">
                        <EditarServicio id={servicio._id} sendDataEditar={getDataEditar}></EditarServicio>
                        <EliminarServicio id={servicio._id} sendData={getData}></EliminarServicio>
                    </div>

                </td>
            </tr>
        ))
    );
}

export default CuerpoTablaUsuario
