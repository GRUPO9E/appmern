const express = require('express');

const pool = require('../settings/db');
const Servicio = require('../models/Servicio');

let getServicios = async function(req, res) {
    const model = await Servicio.find();
    Servicio.countDocuments({}, (err, total) => {
        if(err) {
            return res.json({
                status: 400,
                mensaje: "Error al obtener servicios",
                err: err
            });
        }
            res.json({
                status: 200,
                total: total,
                servicios: model
            });
    });
}

let getServicioById = async function(req, res) {
    const model = await Servicio.findById(req.params.id);
    Servicio.countDocuments({}, (err, total) => {
        if(err) {
            return res.json({
                status: 400,
                mensaje: "Error al obtener servicio por id",
                err: err
            });
        }
            res.json({
                status: 200,
                total: total,
                servicios: model
            });
    });
}

let addServicio = async function(req, res) {
    const {cpeID, cpeName, ubicacion, coordenadas, tipoServicio, nombreContacto, numeroContacto, clienteID, 
        direccionIP, mask, tamañoAntena, bucW, bucOL, lnbOL, disponible} = req.body;
    const servicio = await new Servicio({
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
        disponible
        
    });
    try{
        servicio.save();
        res.status(200).send({ok: true, mensaje: "Servicio registrado correctamente"});
    }catch(error) {
        res.status(500).send({ok: false, mensaje: "Error al registrar servicio", error: error});
    }
}

let editServicio = async function (req, res) {
    const { _id, cpeID, cpeName, ubicacion, coordenadas, tipoServicio, nombreContacto, numeroContacto, clienteID, 
        direccionIP, mask, tamañoAntena, bucW, bucOL, lnbOL,  disponible} = req.body;
    const editServicio = {
        cpeID, cpeName, ubicacion, coordenadas, tipoServicio, nombreContacto, numeroContacto, clienteID, 
        direccionIP, mask, tamañoAntena, bucW, bucOL, lnbOL,  disponible,
    }
    try {
        const servicio = await Servicio.updateOne({_id: _id}, editServicio);
        res.status(200).send({ok: true, mensaje: "Servicio actualizado correctamente"});
    } catch(error) {
        res.status(500).send({ok: false, mensaje: "Error al actualizar servicio", error: error});
    }
}

let deleteServicio = async function (req, res) {
    try{
        let id = req.body;
        await Servicio.findOneAndDelete({_id: id});
        res.status(200).send({ok: true, mensaje: "Servicio eliminado correctamente"});
    }catch(error) {
        res.status(500).send({ok: false, mensaje: "Error al eliminar servicio", error: error});
    }
}

module.exports = {
    getServicios,
    addServicio,
    editServicio,
    deleteServicio,
    getServicioById
}