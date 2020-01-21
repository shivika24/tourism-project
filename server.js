var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
var app = express()
const mongoose = require('mongoose')
var port = process.env.PORT || 5000

app.use(bodyParser.json())
app.use(cors())
app.use(
  bodyParser.urlencoded({
    extended: false
  })
)

const mongoURI = 'mongodb+srv://shivika:Shivika24.@web-b1jeg.mongodb.net/test'

mongoose.connect(
    mongoURI,
    { useNewUrlParser: true,
    useUnifiedTopology : true,
    useCreateIndex : true }
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err))

var Users = require('./routes/Users')

app.use('/users', Users)

app.listen(port, function() {
  console.log('Server is running on port: ' + port)
})
