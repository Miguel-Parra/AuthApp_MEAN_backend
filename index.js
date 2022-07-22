const { response } = require('express');
const express = require('express');
const cors = require('cors');
const { dbConnection } = require('./db/config');
require('dotenv').config();

// crear el servidor/aplicacion de express
const app = express();

//Conexion base de datos
dbConnection();

//levantar el servidor/ aplicacion de express
app.listen((process.env.PORT), () => {
    console.log(`servidor coriendo en el puerto ${process.env.PORT}`)
})

//CORS
app.use(cors());

//Directorio Público
app.use(express.static('./public'))

//Lectura y parseo del body
app.use( express.json())

//RUTAS 
app.use('/api/auth', require('./routes/auth'));



