import express from 'express';
const axios = require('axios');

const app = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
})

app.get('/senate', (req, res, next) => {

    axios.get('http://hp-api.herokuapp.com/api/characters/students')
        .then((response) => res.json(response.data))
    .catch((err) => res.status(500).json({type: 'error', message: err.message}))
})

const port = 9000;
app.listen(port, () => console.log('listing on port 9000'));
