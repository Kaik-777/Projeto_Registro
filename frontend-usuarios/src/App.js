import React, { useState, useEffect } from 'react'; 
import api from './api'; 
import UsuarioForm from './components/UsuarioForm'; 
import UsuarioList from './components/UsuarioList'; 
 
function App() { 
  const [usuarios, setUsuarios] = useState([]); 
  const [usuarioSelecionado, setUsuarioSelecionado] = useState(null); 
 
  const loadUsuarios = async () => { 
    const response = await api.get('/'); 
    setUsuarios(response.data); 
  }; 
 
  useEffect(() => { 
    loadUsuarios(); 
  }, []); 
 
  const editar = usuario => { 
    setUsuarioSelecionado(usuario); 
  }; 
 
  const limparSelecao = () => { 
    setUsuarioSelecionado(null); 
  }; 
 
  const deletar = async id => { 
    await api.delete(`/${id}`); 
    loadUsuarios(); 
  }; 
 
  return ( 
    <div> 
      <h1>Cadastro de Usuários</h1> 
      <UsuarioForm loadUsuarios={loadUsuarios} usuarioSelecionado={usuarioSelecionado} 
limparSelecao={limparSelecao} /> 
      <UsuarioList usuarios={usuarios} editar={editar} deletar={deletar} /> 
    </div> 
  ); 
} 
 
export default App;