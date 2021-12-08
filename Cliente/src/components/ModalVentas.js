import React, { useEffect, useState } from 'react';
import { addVentaSE,getVentaByIdSE,updateVentaSE } from '../services/Ventas.service';
import notie from 'notie';
import 'notie/dist/notie.css';
import { getServiciosSE } from '../services/Servicios.service';


function ModalVenta(props) {

    const { tituloModal, setTituloModal, idVentaEditar, setIdVentaEditar } = props;
    //const [codigo_venta, setCodigo_venta] = useState("");
    const [id_servicio, setId_servicio] = useState("");
    const [fecha_venta, setFecha_venta] = useState("");
    const [cliente, setCliente] = useState("");
    const [ide_cliente, setIde_cliente] = useState("");
    const [vendedor, setVendedor] = useState("");
    const [estado, setEstado] = useState("");
    const [valor_total, setValor_total] = useState("");
    const [medio_pago, setMedio_pago] = useState("");
    const [editar, setEditar] = useState(false);
    
    console.log(idVentaEditar);


    let isDisabled = false;
    
    if ( id_servicio === "" || fecha_venta === ""
     || cliente === "" || ide_cliente === "" || vendedor === ""|| estado === ""|| valor_total === "") {
        isDisabled = true;
    } else {
        isDisabled = false;
    }   

    useEffect(() => {
        getServicios();
    }, []);

    useEffect(() => {
        getVenta();
    }, [idVentaEditar]);

    const [servicios, setServicios] = useState([]);
    const getServicios = async function () {
        try {
            const { data } = await getServiciosSE();
            setServicios(data.servicios);
        } catch (error) {
            console.log(error);
        }
    }

    const getVenta = async function () {
        setEditar(true);
        if (idVentaEditar !== null && idVentaEditar !== "") {
            setTituloModal("Actualizar Venta");
            try {
                const { data } = await getVentaByIdSE(idVentaEditar);
                setId_servicio(data.ventas.id_servicio);
                setFecha_venta(data.ventas.fecha_venta);
                setCliente(data.ventas.cliente);
                setIde_cliente(data.ventas.ide_cliente);
                setVendedor(data.ventas.vendedor);
                setEstado(data.ventas.estado);
                setValor_total(data.ventas.valor_total);
                setMedio_pago(data.ventas.medio_pago);
                                
            } catch (error) {
                console.log(error);
            }
        } else {
            setEditar(false);
        }
    }


    const handleSubmit = e => {
        e.preventDefault();
        const venta = {
            _id:idVentaEditar,            
            id_servicio,
            medio_pago,
            fecha_venta,
            cliente,
            ide_cliente,
            vendedor,
            estado,
            valor_total            
        };
        console.log(venta);
        if (!editar) {
            try {
                addVentaSE(venta).then(response => {
                    if (response.data.ok) {
                        document.querySelector('.closeModalVenta').click();
                        notie.alert({
                            type: 'success',
                            text: response.data.mensaje,
                        });
                        setTimeout(() => {window.location.href="/ventas"}, 1500);
                        
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
            
        } else {
            try {
                updateVentaSE(venta).then(response => {
                    if (response.data.ok) {
                        document.querySelector('.closeModalVenta').click();
                        notie.alert({
                            type: 'success',
                            text: response.data.mensaje,
                        });
                        setTimeout(() => {window.location.href="/ventas"}, 1500);
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
        } 
        const handleCerrar = e => {
            setIdVentaEditar("");
           
        }
    return (
        <div className="modal-body">
            <div className="modal-header">
                <h5 className="modal-title" id="tituloModal">{tituloModal}</h5>
                <button
                    type="button"
                    className="btn-close closeModalVenta"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    onClick={handleCerrar}
                ></button>
            </div>
            <form onSubmit={handleSubmit}>           
            <div className="row">
                
                <div className="row mt-2">
                    <label for="ID Servicio" className="form-label">Servicio</label >
                    <select className="form-select"onChange={e => setId_servicio(e.target.value)}
                            value={id_servicio} aria-label="Default select example" id="Medio de Pago">
                        <option selected>Seleccione</option>
                        {
                            servicios.map((servicio,index )=> (
                                <option value={servicio._id}>{servicio.cpeID}</option>
                            ))
                        }                        
                    </select>
                </div>
                <div className="row mt-2">
                    <label for="Medio de Pago" className="form-label">Medio de Pago</label>
                    <select className="form-select"onChange={e => setMedio_pago(e.target.value)}
                            value={medio_pago} aria-label="Default select example" id="Medio de Pago">
                        <option selected>Seleccione</option>
                        <option value="efectivo">Efectivo</option>
                        <option value="tarjeta">Tarjeta de Credito</option>
                    </select>                         
                </div>
                <div className="row mt-2">
                    <label for="Fecha de Venta" className="form-label">Fecha de Venta</label >
                    <input type="date"
                            className="form-control"
                            id="Fecha de Venta"
                            placeholder="dd/mm/aaaa"onChange={e => setFecha_venta(e.target.value)}
                            value={fecha_venta}/>
                </div>
                <div className="row mt-2">
                    <label for="Cliente" className="form-label">Cliente</label >
                    <input type="text"
                            className="form-control"
                            id="Nombre cliente"
                            placeholder=""onChange={e => setCliente(e.target.value)}
                            value={cliente}/>
                </div>
                <div className="row mt-2">
                    <label for="ID Cliente" className="form-label">ID Cliente</label >
                    <input type="text"
                            className="form-control"
                            id="ID cliente"
                            placeholder=""onChange={e => setIde_cliente(e.target.value)}
                            value={ide_cliente}/>
                </div>
                <div className="row mt-2">
                    <label for="Vendedor" className="form-label">Vendedor</label >
                    <input type="text"
                            className="form-control"
                            id="Nombre vendedor"
                            placeholder=""onChange={e => setVendedor(e.target.value)}
                            value={vendedor}/>
                </div>
                <div className="row mt-2">
                    <label for="Estado" className="form-label">Estado</label>
                    <select className="form-select" onChange={e => setEstado(e.target.value)}
                                value={estado} aria-label="Default select example" id="estado">
                        
                        <option selected>Seleccione</option>
                        <option value="procesado">Procesado</option>
                        <option value="cancelado">Cancelado</option>
                        <option value="entregado">Entregado</option>
                    </select>                         
                </div>
                <div className="row mt-2">
                    <label for="Valor Total" className="form-label">Valor Total</label >
                    <input type="number"
                            className="form-control"
                            id="Valor Total"
                            placeholder=""
                            onChange={e => setValor_total(e.target.value)}
                                value={valor_total}
                            
                            />
                </div>
                <div className="modal-footer">
            
            <button  type="button" className="btn btn-secondary" onClick={handleCerrar}  data-bs-dismiss="modal">Cerrar</button>
            
            <input type="submit" className="btn btn-primary" disabled ={isDisabled}  value="Guardar" />
        </div>
            </div>
            </form>
        </div>
    );
}

export default ModalVenta