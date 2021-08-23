const express = require('express')
const server = express()
const images = require('./routes/images')
const morgan = require('morgan')
const cors = require('cors')

const port = 3001

server.use(cors())
server.use(morgan('dev'))
server.use('/', images)

server.listen(port, () => console.log('server listening at', port))