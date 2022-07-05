// NPM Packages
const express = require('express');
const app = express();
const router = express.Router()

const tcpPortUsed = require('tcp-port-used');
// variables
const PORT = process.env.PORT || 3000

//Routes
const Todos = require('./Routes/Todos/Todos'); //Todos

// using Routes
app.use('/api/todos', Todos); //Todos

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(PORT, () => {
console.log(`Example app listening on port ${PORT}`)
})

