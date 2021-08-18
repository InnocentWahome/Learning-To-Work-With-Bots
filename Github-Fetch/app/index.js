// .env file configurations
require("dotenv/config");
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

// importing required modules
const express = require("express");
const cors = require("cors");
const axios = require('axios');

// database configurations
require("./config/database");

// importing routes form .routes
const { TextRoute } = require("./routes");

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

// routes
app.use("/whatsapp", TextRoute);

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
