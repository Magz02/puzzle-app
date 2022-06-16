let express = require('express');
const passwordHash = require('password-hash')
let cors = require('cors');
var randomToken = require('random-token');
const mongoose = require('mongoose');

const UserData = require('./models/user-data.js');

mongoose.connect("mongodb+srv://admin:admin1234@puzzle-app.aaykq.mongodb.net/?retryWrites=true&w=majority")
.then(() => {
    console.log("Connected to DB");

    /*let user = new UserData({
        username: db.users[0].email,
        password: db.users[0].password
    });

    (async() => {
        console.log("Before save: " + JSON.stringify(user));
        user = await user.save();
        console.log("After save: " + JSON.stringify(user));
    })*/
})
.catch(() => {
    console.log("Connection failed");
});

let app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

//login post
app.post('/login', (req, res, next) => {
    console.log(UserData);
    UserData.find({ username: req.body.username, password: req.body.password })
        .then(documents => {
            console.log("Found users: " + documents);

            if (documents.length <= 0) {
                console.log("Login failed");
                res.status(400).json({
                    message: 'Invalid credentials'
                });
            } else {
                let token = randomToken(64);
                console.log("Logged in");
                res.status(200).json({
                    message: 'Login',
                    token: token,
                    username: req.body.username
                });
            }
        });
});

//signup post
app.post("/signup", (req, res, next) => {
    // find all stored users with username
    console.log(UserData);
    UserData.find({ username: req.body.username })
        .then(documents => {
            console.log("Found users: " + documents);

            // are there users with a matching username?
            if (documents.length <= 0) {
                const userData = new UserData({
                    username: req.body.username,
                    password: req.body.password
                });
                userData.save();
                console.log("Added user: " + userData);

                res.status(201).json({
                    message: "Hellow SignUp from express.js → User created"
                });
            } else {
                res.status(204).json({
                    message: "Hello SignUp from express.js → User already exists"
                });
            }
        })
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
