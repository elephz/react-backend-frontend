const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv').config()
const {readdirSync} = require('fs')

const app = express()


 
app.use(morgan('dev'))
app.use(bodyParser.json({limit:"2mb"}))
app.use(cors())

readdirSync('./routes').map(route=> 
  app.use(`/api`,require('./routes/'+route)))

  const port = process.env.PORT

app.listen(port,()=> console.log("server is running on port "+port))