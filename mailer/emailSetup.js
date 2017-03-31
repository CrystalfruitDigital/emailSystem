/**
* @purpose: Email and transporter set handler
**/

/**
* Dependences Injection 
**/

let nodemailer = require("nodemailer");

/**
* Email transporter 
*
* @public
**/

let transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth:{
        user: 'mailer.crystalfruit@gmail.com',
        pass: 'Ricecake23'
    }
})


module.exports.transporter = transporter

