// .env file configurations
require("dotenv/config");
const accountSid = process.env.TWILIO_ACCOUNT_SID; 
const authToken = process.env.TWILIO_AUTH_TOKEN; 

// importing required modules
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");


// initializng the app
const app = express();

//  required middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// Default server port
app.get("/", (req, res) => {
  res.send("Your server is running");
});

// define the port
const port = parseInt(process.env.PORT, 10) || 3000;

// port listening
app.listen(port, () => {
  try {
    console.log(`Server is running on port: ${port}`);
  } catch (error) {
    console.error(error);
  }
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
