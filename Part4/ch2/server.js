// express에선 따로 status code & Content Type을 명시하지 않아도 됨.
const express = require('express');

const PORT = 8080;
const HOST = '0.0.0.0';

const Users = [
    {
        id: 0,
        name: 'Jack'
    },
    {
        id: 1,
        name: 'Jennifer'
    }
]

const app = express();

app.use(express.json());

app.use((req, res, next) => {
    const start = Date.now();
    console.log(`${req.method} ${req.url}`);
    next();

    const diffTime = Date.now() - start;
    console.log(`${req.method} ${req.url} ${diffTime}ms`);
})

app.get('/users', (req, res) => {
    res.send(Users);
    console.log(Users);
})

app.get('/users/:userId', (req, res) => {
    const userId = Number(req.params.userId);
    const user = Users[userId];
    if (user) {
        res.json(user);
    } else {
        res.sendStatus(404);
    }
})

app.post('/users', (req, res) => {
    console.log('req.body.name ' + req.body.name);

    if (!req.body.name) {
        return res.status(400).json({
            error: "Missing user name."
        })
    }

    const newUser = {
        name: req.body.name,
        id: Users.length
    }
    Users.push(newUser);
    
    res.json(newUser);
})

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);