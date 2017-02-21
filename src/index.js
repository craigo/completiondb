'use strict'

const completionController = require('./controllers/completionController')
const path = require('path')
const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const port = 3050

const app = express()
app.engine('.hbs', exphbs({
  defaultLayout: 'main',
  extname: '.hbs',
  layoutsDir: path.join(__dirname, 'views/layouts')
}))

app.set('view engine', '.hbs')
app.set('views', path.join(__dirname, 'views'))

app.use(bodyParser.urlencoded({extended:false}))
app.use(completionController)

app.listen(port,(err) => {
  if(err){
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})
