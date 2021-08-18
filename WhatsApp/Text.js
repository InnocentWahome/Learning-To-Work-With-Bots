//Env configs
const accountSid = process.env.TWILIO_ACCOUNT_SID; 
const authToken = process.env.TWILIO_AUTH_TOKEN;  
require('dotenv').config();


// initialize the app
const express = require('express');
const app = express();
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());


// Port configs
const PORT = process.env.PORT;
app.get('/', (req, res) => {
    res.send(`Your server is running on port:${PORT}`);
});
app.listen(PORT, () => {
    console.log(`Server is up and running at ${PORT}`);
});



// Twilio Client
const client = require('twilio')(accountSid, authToken, { 
    lazyLoading: true 
});


// Receiving Message and Responding to it
app.post('/whatsapp', async (req, res) => {

    let message = req.body.Body;
    let senderID = req.body.From;

    console.log(`Message sent from WhatsApp:${message}`);
    console.log(`Number sent from:${senderID}`);

    // Write a function to send message back to WhatsApp
    await sendMessage(`Your text "${message}" has been received but there is no automated response yet `, senderID);

});




// User Sending Message
const sendMessage = async (message, senderID) => {

    try {
        await client.messages.create({
            to: senderID,
            body: message,
            from: `whatsapp:` + process.env.TWILIO_PHONE_NUMBER,
        });
    } catch (error) {
        console.log(`Error at sendMessage --> ${error}`);
    }
};

