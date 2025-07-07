const express = require('express'); 
const mongoose = require('mongoose'); 
const cors = require('cors'); 
 
const app = express(); 
app.use(cors()); 
app.use(express.json()); 
 
// Importa as rotas 
testRoute = require('./routes/usuarioRoutes'); 
app.use('/usuarios', testRoute); 
 
// Conectar ao MongoDB 
mongoose.connect('mongodb://localhost:27017/test', { 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
}) 
.then(() => console.log('MongoDB conectado')) 
.catch(err => console.log(err)); 
 
app.listen(3000, () => { 
  console.log('Servidor rodando na porta 3000'); 
});