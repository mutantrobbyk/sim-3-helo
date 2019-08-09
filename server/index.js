require('dotenv').config()
const express = require('express')
const app = express()
const massive = require('massive')
const ctrl = require('./controller')
// const session = require('express-session')
const {CONNECTION_STRING} = process.env
const SERVER_PORT = 4000
app.use(express.json())


massive(CONNECTION_STRING). then(db => {
    app.set('db', db)
})

app.post('/auth/register', ctrl.register)
app.post('/auth/login', ctrl.login)

app.listen(SERVER_PORT, () => console.log(`Server listening on port ${SERVER_PORT}`))