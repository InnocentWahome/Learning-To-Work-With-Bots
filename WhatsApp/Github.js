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

// User Sending the First Message to Initialize Alfred
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

// Introducing Alfred and prompting user to give a github username
app.post('/whatsapp', async (req, res) => {

    let message = req.body.Body;
    let senderID = req.body.From;

    console.log(`Message sent from WhatsApp:${message}`);
    console.log(`Number sent from:${senderID}`);

    // Write a function to send message back to WhatsApp
    await sendMessage(`Hello there \nYou texted "${message}" but I am not programmed to answer that right now \nMy name is Alfred. \nI am still a small bot so for now all I do is check if a user is on github based from their username.\nType in a github username and I'll tell you if the person is a github user or not`, senderID);

}).then = () => {

//User enters a github username. Receiving Message and Responding to it
app.post('/whatsapp', async (req, res) => {

    let username = req.body.Body;
    let senderID = req.body.From;

    console.log(`Message sent from WhatsApp:${username}`);
    console.log(`Number sent from:${senderID}`);

    // Write a function to send message back to WhatsApp
    await sendMessage(`Your text "${username}" has been received but there is no automated response yet `, senderID);

});
}



//Take in user details and check if they are on github
async = () => {
    const token = "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";
    const headers = {
      Authorization: `Token ${token}`,
    };


    try {
      const response = axios.get(`https://api.github.com/users/${username}`, {
        method: "GET",
        headers: headers,
      });
      if(response.status === 200) {
        console.log(`Great! The user you entered is on github. Would you Like to see more about that user?`);
      } else {
          console.log(`Sorry! The user you entered is not on github. Would you like to try again?`);
      }
      console.log(response.data);
      this.list = response.data;
    } catch (error) {
      console.error(error);
    }
  }





