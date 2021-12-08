import axios from 'axios'

export const getUsuariosSE = async function () {
    try {
        return await axios({
            method: 'GET',
            url: `${process.env.REACT_APP_API_URL}/api/getUsuarios`,
            headers: { "x-token" : sessionStorage.getItem("token")}
        });
    } catch (error) {
        throw new Error(error);
    }
}

export const addUsuarioSE = async function(usuario) {
    try {
        return await axios({
            method: 'POST',
            url: `${process.env.REACT_APP_API_URL}/api/addUsuario`,
            data: usuario,
            headers: { "x-token" : sessionStorage.getItem("token")}
        });
    } catch(error) {
        console.log(error);
    }
}

export const deleteUsuarioSE = async function (id) {
    try {
        return await axios({
            method: 'DELETE',
            url: `${process.env.REACT_APP_API_URL}/api/deleteUsuario`,
            data: id,
            headers: { "x-token" : sessionStorage.getItem("token")}
        });
    } catch(error) {
        console.log(error);
    }
}

export const getUsuarioByIdSE = async function (id) {
    try {
        return await axios({
            method: 'GET',
            url: `${process.env.REACT_APP_API_URL}/api/getUsuarioById/${id}`,
            headers: { "x-token" : sessionStorage.getItem("token")}
        });
    } catch (error) {
        throw new Error(error);
    }
}

export const updateUsuarioSE = async function (usuario) {
    try {
        return await axios({
            method: 'PUT',
            url: `${process.env.REACT_APP_API_URL}/api/editUsuario`,
            data: usuario,
            headers: { "x-token" : sessionStorage.getItem("token")}
        });
    } catch (error) {
        throw new Error(error);
    }
}