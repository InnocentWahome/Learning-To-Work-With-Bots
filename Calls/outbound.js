//Getting env file configs
var accountSid = process.env.TWILIO_ACCOUNT_SID; 
var authToken = process.env.TWILIO_AUTH_TOKEN;   
require('dotenv').config()


//outbound calling
const client = require('twilio')(accountSid, authToken);
client.calls.create({
    url: 'http://demo.twilio.com/docs/voice.xml',
    to: process.env.MY_PHONE_NUMBER,
    from: process.env.TWILIO_PHONE_NUMBER
})
.then(call => { console.log(call.sid); })
.catch(err => { console.log(err); });