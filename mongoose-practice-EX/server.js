// Server setup
const express = require('express')
const app = express()
const api = require('./api')
const path = require('path')

app.use(express.static(path.join(__dirname, 'node_modules')))

// Mongoose setup
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/peopleDB', { useNewUrlParser: true ,  useUnifiedTopology: true })

app.use(express.static(path.join(__dirname, 'node_modules')))


app.use('/', api)




const port = 4200
app.listen(port, function () {
    console.log(`Running on port ${port}`)
})

