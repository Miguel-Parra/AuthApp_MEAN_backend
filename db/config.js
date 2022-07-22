
const mongoose = require('mongoose')

const dbConnection = async () => {
    try {
        await mongoose.connect(process.env.BD_CNN);
        console.log('DB Online')

    } catch (error) {
        console.log(error);
        throw new Error('Error a la hora de inicializar BD')
        //al lanzar este Error hacemos que nada se levante ni la aplicacion ni la base
    }
}

module.exports = {
    dbConnection
}