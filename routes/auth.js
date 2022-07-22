const { Router } = require('express');
const { crearUsuario, login, renovarToken } = require('../controllers/auth.controller');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');
const { validarJWT } = require('../middlewares/validar-jwt');
const router = Router();

//crear un nuevo usuario
router.post('/new', [
    check('name', 'el nombre es obligatorio').notEmpty(),
    check('email', 'el correo es obligatorio').isEmail(),
    check('password', 'el password es obligatorio').isLength({ min: 6 }),
    validarCampos
], crearUsuario)

//Login de usuario
router.post('/', [
    check('email', 'el correo es obligatorio').isEmail(),
    check('password', 'el password es obligatorio').isLength({ min: 6 }),
    validarCampos
], login)

//Validar y revalidar token
router.get('/renew', validarJWT, renovarToken)



module.exports = router;