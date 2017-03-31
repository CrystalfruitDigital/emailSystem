/**
* Dependences Injection 
**/
let express = require('express')
let app = express()
let bodyParser = require('body-parser')

/**
* App Setup 
**/
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(express.static('public'))

/**
* Route Injection 
**/
let mailRoute = require('./mailer/mailRoute')(app)

app.listen(3000,function(){
  console.log('Server is online')
})



