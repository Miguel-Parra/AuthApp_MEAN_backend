const { response } = require('express');
const Usuario = require('../models/Usuario')
const bcrypt = require('bcryptjs');
const { generarJWT } = require('./helpers/jwt');



const crearUsuario = async (req, res = response) => {
    const { name, email, password } = req.body;
    try {
        //verificar email
        let usuario = await Usuario.findOne({ email: email })
        if (usuario) {
            return res.status(400).json({
                ok: false, msg: 'El email ya existe'
            })
        }
        // crear el usaurio con el modelo 
        usuario = new Usuario(req.body)
        //hashear la contraseña
        const salt = bcrypt.genSaltSync(10);
        usuario.password = bcrypt.hashSync(password, salt)


        //generar el JWT
        const token = await generarJWT(usuario.id, usuario.name)

        //crear usuario de Db
        usuario.save();

        //generar respuesta exitosa
        return res.status(201).json({
            ok: true,
            uid: usuario.id,
            name,
            token
        })

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador'
        })
    }
}

const login = async (req, res = response) => {
    const { email, password } = req.body;
    try {
        //verificar correo
        const usuarioDB = await Usuario.findOne({ email })
        if (!usuarioDB) {
            return res.status(400).json({
                ok: false,
                msg: "usuario/contraseña incorrectos (email)"
            })
        }

        //verificar password
        const passwordIgual = bcrypt.compareSync(password, usuarioDB.password);

        if (passwordIgual) {

            //generar el JWT
            const token = await generarJWT(usuarioDB.id, usuarioDB.name)

            //respuesta servicio
            return res.json({
                ok: true,
                uid: usuarioDB.id,
                name: usuarioDB.name,
                token
            })

        } else {
            return res.status(400).json({
                ok: false,
                msg: "usuario/contraseña incorrectos (password)"
            })
        }

    } catch (error) {
        console.log(error)
        return res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        })
    }

}

const renovarToken = async (req, res = response) => {
    const {uidUsuario, nameUsuario} = req;

    //generar el JWT
    const token = await generarJWT(uidUsuario,nameUsuario)

    return res.json({
        ok: true,
        uidUsuario, 
        nameUsuario,
        token
        
    })
}

module.exports = {
    crearUsuario,
    login,
    renovarToken
}