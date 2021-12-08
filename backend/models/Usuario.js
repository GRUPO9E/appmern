const {Schema, model} = require('mongoose');
const ObjectId = Schema.ObjectId;

const Usuario = new Schema({
  id: ObjectId,
  documento: { type: Number, require: true},
  email: {type: String, require: true, unique: true},
  nombre: { type: String, require: true},
  rol: {type: String, require: true},
  estado: {type: String, require: true}
});

module.exports = model('Usuario', Usuario);