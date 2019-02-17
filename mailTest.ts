//var nodemailer = require('nodemailer');

import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    service: 'naver',
    auth: {
        user: '메일1@naver.com',
        pass: '내비번'
    }
});

const mailOptions = {
    from: '메일1@naver.com',
    to: '메일2@도메인.com',
    subject: '안녕!',
    text: 'ㅋㅋㅋㅋ'
};



transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
        console.log(error);
    }
    else {
        console.log('Email sent! : ' + info.response);
    }
    transporter.close();

} ) ;

