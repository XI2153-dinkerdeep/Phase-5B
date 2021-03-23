const e = require('express');
const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();

app.get('/api',(req, res) => {
    res.json({
        message: 'Welcome to the API'
    });
});

app.post('/api/posts', verifyToken,  (req, res) => {
    jwt.verify(req.token, 'secretkey', (err, authData) => {
        if(err) {
            res.sendStatus(403);
        } else {
            res.json({
                message: 'Post Created...',
                authData
            });
        }
    });

    
});

app.post('/api/login',(req, res) => {
    //Mock User
    const user = {
        id: 1,
        username: 'Dinker',
        email: 'dinkerdeep@gmail.com'
    };

    jwt.sign({user}, 'secretkey', { expiresIn: '30s' }, (err, token) => {
        res.json({
            token
        });
    });
});

// verifyToken
function verifyToken(req, res, next) {
    // get Auth Token
    const bearerHeader = req.headers['authorization'];
    // check if bearer is undefined
    if(typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
        req.token = bearerToken;
        next();
    } else {
        // Forbidden
        res.sendStatus(403);
    }
}

app.listen(5000, () => console.log('Server started at 5000...'));