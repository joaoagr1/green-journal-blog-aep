const express = require('express');
const router = express.Router();
const materiaController = require('./src/books/material.controller');
const usuarioController = require('./src/books/user.controller');


router.post('/materia', materiaController.createMateria);
router.get('/materia', materiaController.getMaterias);
router.get('materia/:id', materiaController.getMateriaById);
router.put('/materia/:id', materiaController.updateMateria);
router.delete('/materia/:id', materiaController.deleteMateria);
router.post('/user', usuarioController.createUsuario);
router.get('/user', usuarioController.getUsuarios);
router.get('/user/:id', usuarioController.getUsuarioById);
router.put('/user/:id', usuarioController.updateUsuario);
router.delete('/user/:id', usuarioController.deleteUsuario);

export default router;










