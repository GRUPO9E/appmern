const express = require('express');


const servicios = require('../controller/Servicios');

const usuarios = require('../controller/Usuarios');

const ventas = require('../controller/Ventas');

const app = express.Router();
//const {validarJWT} = require('../middlewares/valid_jwt');

//app.use(validarJWT);


app.get("/getServicios", servicios.getServicios);

app.get("/getServicioById/:id", servicios.getServicioById);

app.post("/addServicio", servicios.addServicio);

app.put("/editServicio", servicios.editServicio);

app.delete("/deleteServicio", servicios.deleteServicio);

app.get("/getVentas", ventas.getVentas);

app.post("/addVenta", ventas.addVenta);

app.put("/editVenta", ventas.editVenta);

app.delete("/deleteVenta", ventas.deleteVenta);

app.get("/getUsuarios" , usuarios.getUsuarios);

//Get usuario by id

app.get("/getUsuarioById/:id", usuarios.getUsuarioById);

app.post("/addUsuario" , usuarios.addUsuario);

app.put("/editUsuario" , usuarios.editUsuario);

app.delete("/deleteUsuario" , usuarios.deleteUsuario);

app.get("/getVentaById/:id", ventas.getVentaById);

module.exports = app;
