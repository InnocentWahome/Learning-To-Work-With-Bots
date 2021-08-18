require('dotenv').config();

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);

client.messages.create({
    body: 'This is a test text message from Wahome',
    from: process.env.TWILIO_PHONE_NUMBER,
    to: process.env.MY_PHONE_NUMBER
})
.then ( message => console.log(message))
.catch(error => console.log(error));