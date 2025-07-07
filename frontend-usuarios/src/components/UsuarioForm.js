import React, { useState, useEffect } from 'react'; 
import api from '../api'; 
 
const UsuarioForm = ({ loadUsuarios, usuarioSelecionado, limparSelecao }) => { 
  const [usuario, setUsuario] = useState({ nome: '', email: '', senha: '' }); 
 
  useEffect(() => { 
    if (usuarioSelecionado) { 
      setUsuario(usuarioSelecionado); 
    } 
  }, [usuarioSelecionado]); 
 
  const handleChange = e => { 
    setUsuario({ ...usuario, [e.target.name]: e.target.value }); 
  }; 
 
  const handleSubmit = async e => { 
    e.preventDefault(); 
    if (usuario._id) { 
      await api.put(`/${usuario._id}`, usuario); 
    } else { 
      await api.post('/', usuario); 
    } 
    setUsuario({ nome: '', email: '', senha: '' }); 
    loadUsuarios(); 
    limparSelecao(); 
  }; 
 
  return ( 
    <form onSubmit={handleSubmit}> 
      <input name="nome" value={usuario.nome} onChange={handleChange} placeholder="Nome" 
required /> 
      <input name="email" value={usuario.email} onChange={handleChange} placeholder="Email" 
required /> 
      <input name="senha" type="password" value={usuario.senha} onChange={handleChange} 
placeholder="Senha" required /> 
      <button type="submit">{usuario._id ? 'Atualizar' : 'Cadastrar'}</button> 
    </form> 
  ); 
}; 
 
export default UsuarioForm;