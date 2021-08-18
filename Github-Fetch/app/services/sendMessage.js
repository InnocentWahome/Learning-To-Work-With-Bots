/**
 * User Sending Message
 *
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
const sendMessage = async (message, senderID, accountSid, authToken) => {
  // Twilio Client
  const client = require("twilio")(accountSid, authToken, {
    lazyLoading: true,
  });
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

module.exports = sendMessage;
