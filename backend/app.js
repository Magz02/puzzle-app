var express = require('express');
var cors = require('cors');

var app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

// POST route for login
app.post('/login', (req, res, next) => {
    const loginData = JSON.stringify(req.body);
    console.log(loginData);

    // login...

    res.status(200).json({
        message: 'Hello Login from express.js'
    });
});

module.exports = app;

/*app.use((req, res, next) => {
    console.log("First middleware");
    next();
});

app.use((req, res) => {
    res.end("Middleware finished");
});

app.get('/', (req, res) => {
    console.log('hello world get');
    res.send('GET request to...');
});

app.post('/', (req, res) => {
    console.log('hello world post');
    res.send('POST request to...');
});*/
