const materiaService = require('./materia.service');
import { Response, Request } from 'express'


exports.createMateria = async (req:Request, res:Response) => {
  try {
    const materia = await materiaService.createMateria(req.body);
    res.status(201).json(materia);
  } catch (error:any) {
    res.status(400).json({ error: error.message });
  }
};

exports.getMaterias = async (req:Request, res:Response) => {
  try {
    const materias = await materiaService.getMaterias();
    res.status(200).json(materias);
  } catch (error:any) {
    res.status(400).json({ error: error.message });
  }
};

exports.getMateriaById = async (req:Request, res:Response) => {
  try {
    const materia = await materiaService.getMateriaById(req.params.id);
    res.status(200).json(materia);
  } catch (error:any) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateMateria = async (req:Request, res:Response) => {
  try {
    const materia = await materiaService.updateMateria(req.params.id, req.body);
    res.status(200).json(materia);
  } catch (error:any) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteMateria = async (req:Request, res:Response) => {
  try {
    await materiaService.deleteMateria(req.params.id);
    res.status(204).send();
  } catch (error:any) {
    res.status(400).json({ error: error.message });
  }
};
