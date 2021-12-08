const jwt = require('jsonwebtoken');

//uid -> user id, name -> nombre usuario para generar el payload del token
const generateJWT = (uid, name) =>{

    return new Promise((resolve, reject) => {

        const payload = {uid, name};
        //metodo sign -> crear el token 
        jwt.sign(payload, process.env.Ventas_JWT, {
            //expiresIn: '3h'
            expiresIn: 84640
        }, (err, token) => {
            if(err){
                console.log(err);
                reject('No se pudo generar el token');
            }
            resolve(token);
        })
    });
}

module.exports = {generateJWT};