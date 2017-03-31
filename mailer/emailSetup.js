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
        user: 'vitrisorders@gmail.com',
        pass: 'Christian1!'
    }
})


module.exports.transporter = transporter

