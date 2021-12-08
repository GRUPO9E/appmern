import React, { useEffect, useState } from 'react';
import { addServicioSE, updatServicioSE } from '../../services/Servicios.service';
import { getServicioByIdSE } from '../../services/Servicios.service';
import notie from 'notie';
import 'notie/dist/notie.css';

function ModalServicio(props) {

    const { tituloModal, setTituloModal, idServicioEditar, setIdServicioEditar } = props;
    const [cpeID, setCpeID] = useState("");
    const [cpeName, setCpeName] = useState("");
    const [ubicacion, setUbicacion] = useState("");
    const [coordenadas, setCoordenadas] = useState("");
    const [tipoServicio, setTipoServicio] = useState("");
    const [nombreContacto, setNombreContacto] = useState("");
    const [numeroContacto, setNumeroContacto] = useState("");
    const [clienteID, setClienteID] = useState("");
    const [direccionIP, setDireccionIP] = useState("");
    const [mask, setMask] = useState("");
    const [tamañoAntena, setTamañoAntena] = useState("");
    const [bucW, setBucW] = useState("");
    const [bucOL, setBucOL] = useState("");
    const [lnbOL, setLnbOL] = useState("");
    const [disponible, setDisponible] = useState("");
    const [editar, setEditar] = useState(false);

    let isDisabled = false;
    if (cpeID === "" || cpeName === "" ||  ubicacion === "" || coordenadas === "" || tipoServicio === "" || nombreContacto === "" || numeroContacto === "" || clienteID === "" || direccionIP === "" || mask === "" || tamañoAntena === "" || 
    bucW === "" || bucOL === "" || lnbOL === "" ) {
        isDisabled = true;
    } else {
        isDisabled = false;
        
    }
    useEffect(() => {
        getServicios();
    }, [idServicioEditar]);

    const handleCerrar = e => {
        setIdServicioEditar("");
        setCpeID("");
        setCpeName("");
        setUbicacion("");
        setCoordenadas("");
        setTipoServicio("");
        setNombreContacto("");
        setNumeroContacto("");
        setClienteID("");
        setDireccionIP("");
        setMask("");
        setTamañoAntena("");
        setBucW("");
        setBucOL("");
        setLnbOL("");        
        setDisponible("");
    }

    const getServicios = async function () {
        setEditar(true);
        if (idServicioEditar !== null && idServicioEditar !== "") {
            setTituloModal("Actualizar servicio");
            try {
                const { data } = await getServicioByIdSE(idServicioEditar);
                setCpeID(data.servicios.cpeID);
                setCpeName(data.servicios.cpeName);
                setUbicacion(data.servicios.ubicacion);
                setCoordenadas(data.servicios.coordenadas);
                setTipoServicio(data.servicios.tipoServicio);
                setNombreContacto(data.servicios.nombreContacto);
                setNumeroContacto(data.servicios.numerocontacto);
                setClienteID(data.servicios.clienteID);
                setDireccionIP(data.servicios.direccionIP);
                setMask(data.servicios.mask);
                setTamañoAntena(data.servicios.tamañoAntena);
                setBucW(data.servicios.bucW);
                setBucOL(data.servicios.bucOL);
                setLnbOL(data.servicios.lnbOL);
                setDisponible(data.servicios.disponible === true ? 1 : 0);
            } catch (error) {
                console.log(error);
            }
        } else {
            setEditar(false);
        }
    }
    //getServicios();

    const handleSubmit = e => {
        e.preventDefault();
        const servicio = {
            _id: idServicioEditar,
            cpeID,
            cpeName,
            ubicacion, 
            coordenadas, 
            tipoServicio,
            nombreContacto,
            numeroContacto, 
            clienteID, 
            direccionIP,
            mask,
            tamañoAntena,
            bucW,
            bucOL,
            lnbOL,
            disponible: disponible === "1" ? true : false
        };
        if (!editar) {
            try {
                addServicioSE(servicio).then(response => {
                    if (response.data.ok) {
                        document.querySelector('.closeModalServicio').click();
                        notie.alert({
                            type: 'success',
                            text: response.data.mensaje,
                        });
                        setTimeout(() => {window.location.href="/servicios"}, 1500);
                        
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
                updatServicioSE(servicio).then(response => {
                    if (response.data.ok) {
                        document.querySelector('.closeModalServicio').click();
                        notie.alert({
                            type: 'success',
                            text: response.data.mensaje,
                        });
                        setTimeout(() => {window.location.href="/servicios"}, 1500);
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
    return (
        <div className="principalBody">
            <div className="modal-header">
                <h5 className="modal-title" id="tituloModal">{tituloModal}</h5>
                <button
                    type="button"
                    className="btn-close closeModalServicio"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    onClick={handleCerrar}
                ></button>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="modal-body">
                    <div className="row">
                        <div className="mb-3">
                            <label htmlFor="cpeID" className="form-label">ID:</label>
                            <input type="text" className="form-control" id="CPEid"
                                placeholder="Servicio 01"
                                onChange={e => setCpeID(e.target.value)}
                                value={cpeID} />
                        </div>


                        <div className="col">
                            <label htmlFor="cpeName" className="form-label">cpeName:</label>
                            <input type="texto" className="form-control" placeholder="cpeName"
                                onChange={e => setCpeName(e.target.value)}
                                value={cpeName}
                            />
                        </div>

                        
                        <div className="col">
                            <label htmlFor="ubicacion" className="form-label">Ubicacion:</label>
                            <input type="texto" className="form-control" placeholder="ubicacion"
                                onChange={e => setUbicacion(e.target.value)}
                                value={ubicacion}
                            />
                        </div>


                        <div className="col">
                            <label htmlFor="coordenadas" className="form-label">coordenadas:</label>
                            <input type="texto" className="form-control" placeholder="coordenadas"
                                onChange={e => setCoordenadas(e.target.value)}
                                value={coordenadas}
                            />
                        </div>


                        <div className="col">
                            <label htmlFor="tipoServicio" className="form-label">Tipo:</label>
                            <select className="form-select" onChange={e => setTipoServicio(e.target.value)}
                                value={tipoServicio}
                            >
                                <option disabled selected value="">Seleccione</option>
                                <option value="Silver">Silver</option>
                                <option value="Golg">Gold</option>
                                <option value="Platinium">Platinium</option>
                            </select>
                        </div>

                        <div className="col">
                            <label htmlFor="nombreContacto" className="form-label">NombreContacto:</label>
                            <input type="texto" className="form-control" placeholder="nombreContacto"
                                onChange={e => setNombreContacto(e.target.value)}
                                value={nombreContacto}
                            />
                        </div>

                        <div className="col">
                            <label htmlFor="numeroContacto" className="form-label">NumeroContacto:</label>
                            <input type="texto" className="form-control" placeholder="numeroContacto"
                                onChange={e => setNumeroContacto(e.target.value)}
                                value={numeroContacto}
                            />
                        </div>

                        <div className="col">
                            <label htmlFor="clienteID" className="form-label">clienteID:</label>
                            <input type="texto" className="form-control" placeholder="clienteID"
                                onChange={e => setClienteID(e.target.value)}
                                value={clienteID}
                            />
                        </div>

                        <div className="col">
                            <label htmlFor="direccionIP" className="form-label">direccionIP:</label>
                            <input type="texto" className="form-control" placeholder="cpeName"
                                onChange={e => setDireccionIP(e.target.value)}
                                value={direccionIP}
                            />
                        </div>


                        <div className="col">
                            <label htmlFor="mask" className="form-label">mask:</label>
                            <input type="texto" className="form-control" placeholder="cpeName"
                                onChange={e => setMask(e.target.value)}
                                value={mask}
                            />
                        </div>

                        <div className="col">
                            <label htmlFor="tamañoAntena" className="form-label">tamañoAntena:</label>
                            <input type="texto" className="form-control" placeholder="cpeName"
                                onChange={e => setTamañoAntena(e.target.value)}
                                value={tamañoAntena}
                            />
                        </div>

                        <div className="col">
                            <label htmlFor="bucW" className="form-label">bucW:</label>
                            <input type="texto" className="form-control" placeholder="bucW"
                                onChange={e => setBucW(e.target.value)}
                                value={bucW}
                            />
                        </div>

                        <div className="col">
                            <label htmlFor="bucOL" className="form-label">bucOL:</label>
                            <input type="texto" className="form-control" placeholder="bucOL"
                                onChange={e => setBucOL(e.target.value)}
                                value={bucOL}
                            />
                        </div>

                        <div className="col">
                            <label htmlFor="lnbOL" className="form-label">lnbOL:</label>
                            <input type="texto" className="form-control" placeholder="lnbOL"
                                onChange={e => setLnbOL(e.target.value)}
                                value={lnbOL}
                            />
                        </div>

                        <div className="col">
                            <label htmlFor="disponible" className="form-label">Estado:</label>
                            <select className="form-select" onChange={e => setDisponible(e.target.value)}
                                value={disponible}
                            >
                                <option disabled selected value="">Seleccione</option>
                                <option value="1">Disponible</option>
                                <option value="0">No disponible</option>
                            </select>
                        </div>

                    </div>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" onClick={handleCerrar} data-bs-dismiss="modal">Cerrar</button>
                    <input type="submit" className="btn btn-primary" disabled={isDisabled} value="Guardar" />
                </div>
            </form>
        </div>

    );
}

export default ModalServicio