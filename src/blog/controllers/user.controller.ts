import { Request, Response } from 'express';
const usuarioService = require('../services/user.service');

exports.createUsuario = async (req: Request, res: Response) => {
  try {
    const usuario = await usuarioService.createUsuario(req.body);
    res.status(201).json(usuario);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

exports.getUsuarios = async (req: Request, res: Response) => {
  try {
    const usuarios = await usuarioService.getUsuarios();
    res.status(200).json(usuarios);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

exports.getUsuarioById = async (req: Request, res: Response) => {
  try {
    const usuario = await usuarioService.getUsuarioById(req.params.id);
    res.status(200).json(usuario);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateUsuario = async (req: Request, res: Response) => {
  try {
    const usuario = await usuarioService.updateUsuario(req.params.id, req.body);
    res.status(200).json(usuario);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteUsuario = async (req: Request, res: Response) => {
  try {
    await usuarioService.deleteUsuario(req.params.id);
    res.status(204).send();
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

exports.loginUsuario = async (req: Request, res: Response) => {
  try {
    const usuario = await usuarioService.loginUsuario(req.body);
    console.log(usuario);
    
    if (usuario == null) {
      return res.status(404).json({ error: "Usuario não encontrado" });
    }

    return res.status(200).json(usuario);
  } catch (error: any) {
    return res.status(500).json({ error: error.message });
  }
};
