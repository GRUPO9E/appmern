const express = require('express');

//const pool = require('../settings/mongodb+srv://ventas:Colombia2021*-@cluster0.nfjsb.mongodb.net/ventas');
const Venta = require('../models/ventas');

let getVentas = async function(req, res) {
    const model = await Venta.find().populate("id_servicio");
    Venta.countDocuments({}, (err, total) => {
        if(err) {
            return res.json({
                status: 400,
                mensaje: "Error al ingresar una  Venta",
                err: err
            })
        }
            res.json({
                status: 200,
                total: total,
                model: model
            });
    });
}

let addVenta = async function(req, res) {
    const {codigo_venta, id_servicio, medio_pago, fecha_venta, cliente, ide_cliente, vendedor, estado, valor_total} = req.body;
    const venta = await new Venta({
        codigo_venta,
        id_servicio,
        medio_pago,
        fecha_venta,
        cliente,
        ide_cliente,
        vendedor,
        estado, 
        valor_total
    });
    try{
        venta.save();
        res.status(200).send({ok: true, mensaje: "Venta registrado correctamente"});
    }catch(error) {
        res.status(500).send({ok: false, mensaje: "Error al registrar servicio", error: error});
    }
}

let editVenta = async function (req, res) {
    const { _id, codigo_venta, id_servicio, medio_pago, fecha_venta, cliente, ide_cliente, vendedor, estado, valor_total} = req.body;
    const editVenta = {
        codigo_venta,
        id_servicio,
        medio_pago,
        fecha_venta,
        cliente,
        ide_cliente,
        vendedor,
        estado, 
        valor_total,
    }
    console.log(_id)
    try {
        const venta = await Venta.updateOne({_id: _id}, editVenta);
        res.status(200).send({ok: true, mensaje: "Venta actualizada correctamente"});
    } catch(error) {
        res.status(500).send({ok: false, mensaje: "Error al actualizar una venta", error: error});
    }
}

let deleteVenta = async function (req, res) {
    try{
        let id = req.body;
        await Venta.findOneAndDelete({_id: id});
        res.status(200).send({ok: true, mensaje: "Venta  eliminada correctamente"});
    }catch(error) {
        console.log(error);
        res.status(500).send({ok: false, mensaje: "Error al eliminar la venta", error: error});
    }
}

let getVentaById = async function(req, res) {
    const model = await Venta.findById(req.params.id);
    Venta.countDocuments({}, (err, total) => {
        if(err) {
            return res.json({
                status: 400,
                mensaje: "Error al obtener una  venta por id",
                err: err
            });
        }
            res.json({
                status: 200,
                total: total,
                ventas: model
            });
    });
}



module.exports = {
    getVentas,
    addVenta,
    editVenta,
    deleteVenta,
    getVentaById

}