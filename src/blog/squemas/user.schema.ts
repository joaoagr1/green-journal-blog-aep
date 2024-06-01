import { Schema, model } from 'mongoose'

const UsuarioSchema = new Schema({
  nome: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  senha: { type: String, required: true }
});

module.exports = model('Usuario', UsuarioSchema);
