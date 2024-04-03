const express = require('express')
const morgan = require('morgan')
const app = express()
const port = 8000


app.use(morgan('combined'))
app.get('/tin', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})