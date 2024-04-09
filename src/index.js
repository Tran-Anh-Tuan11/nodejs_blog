var path = require('path');
const express = require('express')
const morgan = require('morgan')
const {engine} = require('express-handlebars')
const app = express()
const port = 8000

//HTTP logger
app.use(morgan('combined'))

//Template engine 
app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
app.set('views', path.join(__dirname, 'resources/views'));

app.get('/', (req, res) => {
  res.render('home')
})

app.get('/news', (req, res) => {
    res.render('news')
  })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})