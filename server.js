/**
* Dependences Injection 
**/
let express = require('express')
let app = express()
let bodyParser = require('body-parser')
let cors = require('cors')
/**
* App Setup 
**/
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(express.static('public'))
app.use(cors())

/**
* Route Injection 
**/
let mailRoute = require('./mailer/mailRoute')(app)

app.listen(3000,function(){
  console.log('Server is online')
})



