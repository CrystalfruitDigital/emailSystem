/**
* @purpose: Route that handle email functions
**/

/**
* Dependences Injection 
**/
let mailer  = require('./mailer')

module.exports = function(app){

  /**
  * Sends email
  * 
  * @success {string}
  * @error {string}
  **/
  app.post('/mailer/sendMail',function(req,res){
    let sender = new mailer.Mailer(req.body)

    sender.sendMail()
    .then(function(){
      res.setHeader('Access-Control-Allow-Origin','*');
      res.send('success')
    })
    .catch(function(){
      res.setHeader('Access-Control-Allow-Origin','*');
      res.send({error: true})
    })

  })
}