const express = require('express')
const server = express()
const images = require('./routes/images')
const morgan = require('morgan')
const cors = require('cors')

require("dotenv").config();

server.use(cors())
server.use(morgan('dev'))
server.use('/', images)

server.listen(process.env.PORT, () => {
    console.log(`Server Port ${process.env.PORT}`);
  });
