const express = require('express'); 
const router = express.Router(); 
const Usuario = require('../models/usuario'); 
 
// Criar Usuário 
router.post('/', async (req, res) => { 
  try { 
    const usuario = new Usuario(req.body); 
    await usuario.save(); 
    res.status(201).send(usuario); 
  } catch (err) { 
    res.status(400).send(err); 
  } 
}); 
 
// Listar todos 
router.get('/', async (req, res) => { 
  const usuarios = await Usuario.find(); 
  res.send(usuarios); 
}); 
 
// Buscar por ID 
router.get('/:id', async (req, res) => { 
  try { 
    const usuario = await Usuario.findById(req.params.id); 
    if (!usuario) return res.status(404).send('Usuário não encontrado'); 
    res.send(usuario); 
  } catch (err) { 
    res.status(400).send(err); 
  } 
}); 
 
// Atualizar 
router.put('/:id', async (req, res) => { 
  try { 
    const usuario = await Usuario.findByIdAndUpdate(req.params.id, req.body, { new: true }); 
    if (!usuario) return res.status(404).send('Usuário não encontrado'); 
    res.send(usuario); 
  } catch (err) { 
    res.status(400).send(err); 
  } 
}); 
 
// Deletar 
router.delete('/:id', async (req, res) => { 
  try { 
    const usuario = await Usuario.findByIdAndDelete(req.params.id); 
if (!usuario) return res.status(404).send('Usuário não encontrado'); 
res.send('Usuário deletado'); 
} catch (err) { 
res.status(400).send(err); 
} 
}); 
module.exports = router;