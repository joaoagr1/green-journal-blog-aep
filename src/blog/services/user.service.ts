const Usuario = require('../squemas/user.schema');

exports.createUsuario = async (usuarioData:any) => {
  const usuario = new Usuario(usuarioData);
  return await usuario.save();
};

exports.getUsuarios = async () => {
  return await Usuario.find();
};

exports.getUsuarioById = async (id:string) => {
  return await Usuario.findById(id);
};

exports.updateUsuario = async (id:string, usuarioData:any) => {
  return await Usuario.findByIdAndUpdate(id, usuarioData, { new: true });
};

exports.deleteUsuario = async (id:string) => {
  return await Usuario.findByIdAndDelete(id);
};