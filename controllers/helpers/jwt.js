const jwt = require('jsonwebtoken')
const { promisify } = require('util')

const generarJWT = (uid, name) => {
    const payload = { uid, name };

    //transformando a promesa
    const promesaJWT = promisify(jwt.sign)
    return promesaJWT(payload, process.env.SECRET_JWT_SEED, {
        expiresIn: '24h'
    })

    //transformar a promesa otra manera

    // return new Promise((resolve, reject) => {
    //     jwt.sign(payload, process.env.SECRET_JWT_SEED, {
    //         expiresIn: '24h'
    //     }, (error, tokenFirmado) => {
    //         if (error) {
    //             console.error
    //             reject(error)
    //         } else {
    //             resolve(token)
    //         }
    //     })
    // })
}

module.exports = {
    generarJWT
}