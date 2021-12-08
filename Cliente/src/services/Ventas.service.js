import axios from 'axios'

export const getVentasSE = async function () {
    try {
        return await axios({
            method: 'GET',
            url: `${process.env.REACT_APP_API_URL}/api/getVentas`,
            headers: { "x-token" : sessionStorage.getItem("token")}
        });
    } catch (error) {
        throw new Error(error);
    }
}

export const addVentaSE = async function(venta) {
    try {
        return await axios({
            method: 'POST',
            url: `${process.env.REACT_APP_API_URL}/api/addVenta`,
            data: venta,
            headers: { "x-token" : sessionStorage.getItem("token")}
        });
    } catch(error) {
        console.log(error);
    }
}

export const getVentaByIdSE = async function (id) {
    try {
        return await axios({
            method: 'GET',
            url: `${process.env.REACT_APP_API_URL}/api/getVentaById/${id}`,
            headers: { "x-token" : sessionStorage.getItem("token")}
        });
    } catch (error) {
        throw new Error(error);
    }
}


export const deleteVentaSE = async function (id) {
    try {
        return await axios({
            method: 'DELETE',
            url: `${process.env.REACT_APP_API_URL}/api/deleteVenta`,
            data: id,
            headers: { "x-token" : sessionStorage.getItem("token")}
        });
    } catch(error) {
        console.log(error);
    }
}

export const updateVentaSE = async function (venta) {
    try {
        return await axios({
            method: 'PUT',
            url: `${process.env.REACT_APP_API_URL}/api/editVenta`,
            data: venta,
            headers: { "x-token" : sessionStorage.getItem("token")}
        });
    } catch (error) {
        throw new Error(error);
    }
}