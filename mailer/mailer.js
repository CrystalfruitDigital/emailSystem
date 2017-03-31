

/**
* @purpose: Mailer class 
**/

/**
* Bind object values for email html
*
* @private 
**/
Object.prototype.bindValues = function(){
  let tempString = ''
  let thisObj = this

  Object.keys(thisObj).map(function(key){
    tempString = tempString +'<br>'+ key.replace('_', '') +': '+ thisObj[key]
  })

  return tempString
}



/**
* Dependences Injection 
**/

let transporter = require('./emailSetup').transporter

/**
* Email class structure
*
* @method {sendMail} send email with Mailer object
*
* @public
**/

class Mailer {

  constructor ({ to, subject, message } = {}) {
    this._to = to
    this._subject = subject
    this._message = message
  }

  sendMail () {
    return sendMail(this)
  }
}

module.exports.Mailer = Mailer

/**
* Send email
*
* @params {Object} obj
*
* @return {Boolean}
* @error {String}
*
* @private
**/

let sendMail = function (obj) {
  delete obj._message.submit
  
  let mailOptions = {
      form: obj._message.name,
      to: obj._to,
      subject: obj._subject,
      html: obj._message.bindValues()
  }

  return new Promise(function(resolve, reject){
    transporter.sendMail(mailOptions,function(err){
      (err)
        ? reject(new Error('Failed to send message'))
        : resolve(null)
    })

  })
}