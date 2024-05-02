var path = require('path');
const express = require('express')
const morgan = require('morgan')
const { engine } = require('express-handlebars')
const db = require('./config/db')

//connect to db
db.connect();

const app = express()
const port = 8000

const route = require('./routes')

app.use(express.static(path.join(__dirname, 'public')))
//HTTP logger
// app.use(morgan('combined'))
 
//Template engine 
app.engine('.hbs', engine( 
    {
        extname: '.hbs'
    }
))
  
app.use(express.urlencoded(
    {
        extended: true
    }
))
app.use(express.json())
app.set('view engine', '.hbs')
app.set('views', path.join(__dirname, 'resources/views'));

route(app);



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})