const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();

const port = process.env.PORT || 3200; 

app.use(cors());
app.use(express.json());

async function main () {
  await mongoose.connect(process.env.DB_CONNECTION_STRING);
  console.log("conectado a mongo");
}

main().catch(console.error);

app.use('/api/signup', require('./routes/signup'));
app.use('/api/login', require('./routes/login'));
app.use('/api/user', require('./routes/user'));
app.use('/api/todos', require('./routes/todos'));
app.use('/api/refreshToken', require('./routes/refreshToken'));
app.use('/api/signout', require('./routes/logOut'));




app.get('/', (req, res) => {
  res.send('Hello world');
});

app.listen(port, () => {
  console.log(`Servidor ejecutándose en el puerto: ${port}`);
});
