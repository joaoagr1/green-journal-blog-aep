import { Schema, model } from 'mongoose'

const MateriaSchema = new Schema({
  titulo: { type: String, required: true },
  conteudo: { type: String, required: true },
  autor: { type: Schema.Types.ObjectId, ref: 'Usuario', required: true },
  legenda: { type: String, required: true },
  dataCriacao: { type: Date, default: Date.now },
 });

module.exports = model('Materia', MateriaSchema);