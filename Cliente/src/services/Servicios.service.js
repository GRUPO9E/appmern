import axios from 'axios'

export const getServiciosSE = async function () {
    try {
        return await axios({
            method: 'GET',
            url: `${process.env.REACT_APP_API_URL}/api/getServicios`,
            headers: { "x-token" : sessionStorage.getItem("token")}
        });
    } catch (error) {
        throw new Error(error);
    }
}

export const addServicioSE = async function(servicio) {
    try {
        return await axios({
            method: 'POST',
            url: `${process.env.REACT_APP_API_URL}/api/addServicio`,
            data: servicio,
            headers: { "x-token" : sessionStorage.getItem("token")}
        });
    } catch(error) {
        console.log(error);
    }
}

export const deleteServicioSE = async function (id) {
    try {
        return await axios({
            method: 'DELETE',
            url: `${process.env.REACT_APP_API_URL}/api/deleteServicio`,
            data: id,
            headers: { "x-token" : sessionStorage.getItem("token")}
        });
    } catch(error) {
        console.log(error);
    }
}

export const getServicioByIdSE = async function (id) {
    try {
        return await axios({
            method: 'GET',
            url: `${process.env.REACT_APP_API_URL}/api/getServicioById/${id}`,
            headers: { "x-token" : sessionStorage.getItem("token")}
        });
    } catch (error) {
        throw new Error(error);
    }
}

export const updatServicioSE = async function (servicio) {
    try {
        return await axios({
            method: 'PUT',
            url: `${process.env.REACT_APP_API_URL}/api/editServicio`,
            data: servicio,
            headers: { "x-token" : sessionStorage.getItem("token")}
        });
    } catch (error) {
        throw new Error(error);
    }
}