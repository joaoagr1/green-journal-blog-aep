const Materia = require('../books/materia.squema');

exports.createMateria = async (materiaData:any) => {
  const materia = new Materia(materiaData);
  return await materia.save();
};

exports.getMaterias = async () => {
  return await Materia.find().populate('autor');
};

exports.getMateriaById = async (id:string) => {
  return await Materia.findById(id).populate('autor');
};

exports.updateMateria = async (id:string, materiaData:any) => {
  return await Materia.findByIdAndUpdate(id, materiaData, { new: true });
};

exports.deleteMateria = async (id:string) => {
  return await Materia.findByIdAndDelete(id);
};
