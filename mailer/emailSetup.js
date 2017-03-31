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
        user: 'crystalfruit.jack@gmail.com',
        pass: 'flamingchaos521'
    }
})


module.exports.transporter = transporter

