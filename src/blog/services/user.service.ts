import {Usuario, IUsuario}from '../squemas/user.schema';


exports.createUsuario = async (usuarioData:IUsuario) => {
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

exports.loginUsuario = async (usuarioData:IUsuario) => {
  console.log("usuarioa data: "+usuarioData.email + usuarioData.senha);
  return await Usuario.findOne({email:usuarioData.email, senha:usuarioData.senha});
};