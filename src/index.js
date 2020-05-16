const express = require('express')
const http = require('http')
const userRouter = require('./routes/userRouter')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

mongoose.connect(
    'mongodb+srv://ulisessdev:googlemx@cluster0-ikksp.mongodb.net/test?retryWrites=true&w=majority',
    { useNewUrlParser: true, useFindAndModify: false }
)
    .then((connection) => {
        console.log(`Connected to Mongo Database "${connection.connections[0].name}"`)
    })
    .catch((error) => {
        console.error('Error connecting to Mongo Database')
        console.error(error)
    })


const app = express()
app.use(cors())
app.use(express.json())
app.use('/users', userRouter)
const server = http.createServer(app)

const host = process.env.HOST || '0.0.0.0'
const port = process.env.PORT || 5000

server.listen(port, host, () => {
    console.log(`App running in port ${port}`)
})