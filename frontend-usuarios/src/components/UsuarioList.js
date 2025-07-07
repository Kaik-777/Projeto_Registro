import React from 'react'; 
import './styledLista.css';
 
const UsuarioList = ({ usuarios, editar, deletar }) => { 
  return ( 
    <table border="1"> 
      <thead> 
        <tr> 
          <th>Nome</th> 
          <th>Email</th> 
          <th>Ações</th> 
        </tr> 
      </thead> 
      <tbody> 
        {usuarios.map(usuario => ( 
          <tr key={usuario._id}> 
            <td>{usuario.nome}</td> 
            <td>{usuario.email}</td> 
            <td> 
              <button onClick={() => editar(usuario)}>Editar</button> 
              <button onClick={() => deletar(usuario._id)}>Deletar</button> 
            </td> 
          </tr> 
        ))} 
      </tbody> 
    </table> 
  ); 
}; 
 
export default UsuarioList;