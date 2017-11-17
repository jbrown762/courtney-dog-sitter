'use strict';
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
const nodemailer = require('nodemailer');

var app = express();

//var logger = function(req, res, next){
//    console.log('Logging...');
//    next();
//}
//
//app.use(logger);

// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));

// Set static path
app.use(express.static(path.join(__dirname, 'docs')))


app.post('/contact', function (req, res) {
    console.log('in email post');
    let data = req.body;
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true, // secure:true for port 465, secure:false for port 587
        auth: {
            user: 'jbrown762@gmail.com',
            pass: 'cwgpahlgcxnwxmga'
        }
    });

    var mailOptions = {
        from: 'jbrown762@gmail.com',
        to: 'jbrown762@gmail.com',
        subject: 'New message!',
        html: 'New message from ' + data.name + ' (' + data.email + ')<br><br>' + data.info
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
        res.send('email sent!');
    });


});

app.listen(3000, function () {
    console.log('Server started on Port 3000...');
})
