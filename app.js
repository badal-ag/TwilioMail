const sgMail = require('@sendgrid/mail')

const API_KEY = "Your API KEY";

sgMail.setApiKey(API_KEY)

const message = {
    to: ['email1', 'email2', 'email3'],
    //from: 'verified_email_on_sendgrid',
    from: {
        name: 'Free Screen Recorder Support',
        email: 'verified_email_on_sendgrid',
    },
    subject: 'Mail Sent from SendGrid',
    text: 'This is the mail sent using Twilio Sendgrid for the Users',
    html: '<h1>This is the mail sent using Twilio Sendgrid for the Users</h1>',
}

sgMail.send(message)
.then((res) => console.log('Email Sent Successfully...'))
.catch((error) => console.log(error.message));