const {Schema, model} = require('mongoose');
const ObjectId = Schema.ObjectId;

const Servicio = new Schema({
  id: ObjectId,
  cpeID: {type: String, require: true},
  cpeName: { type: String, require: true},
  ubicacion: { type: String, require: true}, 
  coordenadas: { type: String, require: true}, 
  tipoServicio: { type: String, require: true},
  nombreContacto: { type: String, require: true},
  numeroContacto: { type: String, require: true}, 
  clienteID: { type: String, require: true}, 
  direccionIP: { type: String, require: true},
  mask: { type: Number, require: true},
  tamañoAntena: { type: Number, require: true},
  bucW: { type: String, require: true},
  bucOL: { type: String, require: true},
  lnbOL: { type: String, require: true},
  disponible: {type: Boolean, require: true}
});

module.exports = model('Servicio', Servicio);