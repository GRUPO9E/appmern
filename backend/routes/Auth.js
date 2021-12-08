const {Router} = require('express');
const {gAuth, renovarToken} = require('../controller/GoogleAuth');
const { googleValidate } = require('../middlewares/validar_google');
const {validarJWT} = require('../middlewares/valid_jwt');

const router = Router();

router.post('/google/login',googleValidate, gAuth);

router.get('/renew', validarJWT, renovarToken)

module.exports = router;