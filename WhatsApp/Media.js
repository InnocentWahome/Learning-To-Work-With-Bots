//Env configs
const accountSid = process.env.TWILIO_ACCOUNT_SID; 
const authToken = process.env.TWILIO_AUTH_TOKEN;  
require('dotenv').config();


// initialize the app
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

const twilio = require('twilio');

const client = twilio(
    process.env.TWILIO_ACCOUNT_SID,
    process.env.TWILIO_AUTH_TOKEN
);
// Sending image from this code 
client.messages.create({
    from: `whatsapp:` + process.env.TWILIO_PHONE_NUMBER,
    to: 'whatsapp:' + process.env.MY_PHONE_NUMBER,
    body: 'Is this your github profile?',
    mediaUrl: 'https://avatars.githubusercontent.com/u/62073759?v=4'
})
.then(message => console.log(message.sid))
.catch(error => console.log(error));

// Sending image from whatsapp phone 
app.post('/whatsapp', async (req, res) => {
    let twimn = new Twilio.twiml.MessagingResponse();

    if(event.NumMedia !== 0) {
        twiml.message('Thanks for the picture!');
        console.log(event.mediaUrl0)
    } else {
        twim.message('You didnt send a picture!');
    }
    return(null, twiml);
});