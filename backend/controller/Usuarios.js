const express = require('express');

const pool = require('../settings/db');
const Usuario = require('../models/Usuario');

let getUsuarios = async function(req, res) {
    const model = await Usuario.find();
    Usuario.countDocuments({}, (err, total) => {
        if(err) {
            return res.json({
                status: 400,
                mensaje: "Error al visualizar usuario",
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

//Buscar por id
let getUsuarioById = async function(req, res) {
    const user = await Usuario.findById(req.params.id);
    res.json(user);
}


let addUsuario = async function(req, res) {
  const {documento, nombre, rol, estado} = req.body;
  const usuario = await new Usuario({
   documento,
   nombre,
         rol,
         estado
     });
     try{
         usuario.save();
        res.status(200).send({ok: true, mensaje: "Usuario registrado correctamente"});
    }catch(error) {
        res.status(500).send({ok: false, mensaje: "Error al registrar usuario", error: error});     }
 }

let editUsuario = async function (req, res) {
    const {_id, email, nombre, rol, estado} = req.body;
    const editUsuario= {
         email, 
         nombre, 
         rol, 
         estado,
    }
    try{
        console.log(_id);
        const usuario = await Usuario.updateOne({_id : _id}, editUsuario);
        res.status(200).send({ok: true, mensaje: "Usuario actualizado correctamente"});
    }catch(error) {
        res.status(500).send({ok: false, mensaje: "Error al actualizar usuario", error: error});
    }
}

let deleteUsuario = async function (req, res) {
    try{
        let id = req.body;
        await Usuario.findOneAndDelete({_id: id});
        
        res.status(200).send({ok: true, mensaje: "Usuario eliminado correctamente"});
        
        }catch(error) {
            console.log(error);
            res.status(500).send({ok: false, mensaje: "Error al eliminar usuario", error: error});
        }
    
}

module.exports = {
    getUsuarios,
    addUsuario,
    //exportar uduario by id
    getUsuarioById,
    editUsuario,
    deleteUsuario
}