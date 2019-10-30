require('dotenv')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3001
require('./db/config')

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)


app.get('/', (req, res) => {
    res.json({ info: 'Node.js, Express, and Postgres API' })
  })


app.use('/api/todos', require('./routes/route'))

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})