import React, { useEffect, useState } from 'react'
import ActualizarVenta from './ActualizarVenta';
import EliminarVenta from './EliminarVenta';
import {getVentasSE} from '../services/Ventas.service';

function TablaVentas(props) {
    const { textoBuscar, sendData2, sendDataEditar2} = props
    //const {setTextoBuscar} = props

    function getData(val){
        sendData2(val);
    }
    function getDataEditar(val){
        sendDataEditar2(val);
    }

    useEffect(() => {
        getVentas();
    }, []);

    const [ventas, setVentas] = useState([]);
    const getVentas = async function () {
        try {
            const { data } = await getVentasSE();
            console.log(data.model);
            setVentas(data.model);
        } catch (error) {
            console.log(error);
        }
    }
    return (
        ventas.filter(function(item) {
            if (item.documento === undefined) {
                item.documento = "";
            }
            if (textoBuscar === "" || item.documento.includes(textoBuscar) || item._id.includes(textoBuscar)) {
                return true;
            }

        }).map((venta, index) => 
        <tr key={venta._id}>
                <td>{venta._id}</td>
                <td>{venta.id_servicio != null ? venta.id_servicio.descripcion : ""}</td>
                <td>{venta.medio_pago}</td>
                <td>{venta.fecha_venta}</td>
                <td>{venta.cliente}</td>
                <td>{venta.ide_cliente}</td>
                <td>{venta.vendedor}</td>
                <td>{venta.estado}</td>
                <td>{venta.valor_total}</td>
                <td>
                    <div className="btn-group btn-group-sm">
                        <ActualizarVenta id={venta._id} sendDataEditar={getDataEditar}></ActualizarVenta>
                        <EliminarVenta id={venta._id} sendData={getData}></EliminarVenta>
                    </div>
                    
                </td>
        </tr>
        ));
    
}

export default TablaVentas