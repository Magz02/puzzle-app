let express = require('express');
let cors = require('cors');
let db = require('./db');

let app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

// POST route for login
app.post('/login', (req, res, next) => {
    const loginData = req.body;
    console.log(loginData);

    // login...
    let credentials = db.login(loginData.email, loginData.password);

    if (credentials === null) {
        res.status(400).json({
            message: 'Invalid credentials'
        });
    } else {
        res.status(200).json({
            message: 'Login',
            token: credentials.token,
            username: credentials.username
        });
    }
});

app.post('/signup', (req, res, next) => {
    const signupData = req.body;
    console.log(signupData);

    // signup...
    let signedUp = db.signup(signupData.email, signupData.password);

    if (signedUp) {
        res.status(200).json({
            message: 'Signed up'
        });
    } else {
        res.status(400).json({
            message: 'Invalid credentials'
        });
    }
}) ;

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
