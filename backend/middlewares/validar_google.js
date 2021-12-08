const { response } = require('express');
const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client('635122526604-bfe88c7rq4qrrenfc11l65ht9v1f425i.apps.googleusercontent.com');

const googleValidate = (req, res = response, next) => {


    let token = '';
    token = req.headers['x-access-token'] || req.headers['authorization'];

    if (!token) {
        return res.status(401).json({
            ok: false,
            msg: 'No se ha proporcionado un token valido'
        });
    }

    if (token.startsWith('Bearer ')) {
        token = token.slice(7, token.length);
    }

    try {
        client.verifyIdToken({
            idToken: token,
            audience: '635122526604-bfe88c7rq4qrrenfc11l65ht9v1f425i.apps.googleusercontent.com'
        })
            .then((resp) => {
                const { sub, name, email } = resp.payload;
                console.log(sub, name, email);
                req.uid = sub;
                req.name = name;
                req.email = email;
                next();
            })
            .catch((error) => {
                return res.status(401).json({
                    ok: false,
                    msg: 'Token invalido'
                });
            });

    } catch (error) {
        return res.status(401).json({
            ok: false,
            msg: 'Token invalido'
        });
    }

}

module.exports = { googleValidate }

