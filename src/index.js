require('dotenv').load
const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const app = express()
const cors = require('cors')
require('./db/config')
const port = 3000

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
)
app.use(express.static(path.join(__dirname, 'public')))

app.use(cors())
app.use('/api/todos', require('./routes/route'))

app.get('*', function(req, res){
  res.status(404).send('LOL again!?');
});
app.get('/favicon.ico', (req, res) => res.status(204));

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})

module.exports = app