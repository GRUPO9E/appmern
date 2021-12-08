const {response} = require('express');
const { generateJWT } = require('../helpers/jwt');
const Usuario = require('../models/Usuario');

const gAuth = async (req, res = response) =>{

    const rol = "No-asignado";
    const estado = "pendiente";
    const {uid: idToken, name, email} = req;

    try{
        let usuario = await Usuario.findOne({email});
        //si no existe el usuario
        if(!usuario){
            usuario = new Usuario({
                nombre:name,
                email:email,
                rol,
                estado
            });

            const usuarioCreado = await usuario.save();
                res.status(201).json({
                    ok: true,
                    msg: 'Usuario creado con exito',
                    uid: usuarioCreado.id,
                    name: usuarioCreado.nombre
                });
        }else{
            if(usuario.estado == "pendiente" && usuario.rol === 'No-asignado'){
                res.status(401).json({
                    ok: false,
                    msg: 'Usuario no autorizado y rol definido!'
                });
            }else{
                const Token = await generateJWT(usuario._id, usuario.nombre);
                res.json({
                    ok: true,
                    msg:'Ok',
                    uid:usuario._id,
                    nombre:usuario.nombre,
                    Token
                });
            }
        }
    }catch (error){
        console.log(error);
    }
}

const renovarToken = async (req, res=response) =>{
    const {id, name} = req.body;
    const Token = await generateJWT(id, name);
    res.json({
        ejecucion:true,
        msg: "Token generado satisfactoriamente",
        Token
    })

}

module.exports = {gAuth, renovarToken}