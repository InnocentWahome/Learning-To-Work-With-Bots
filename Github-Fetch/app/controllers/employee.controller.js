const sendMessage = require("../services/sendMessage");
const axios = require("axios");
const url = "https://api.github.com/users/InnocentWahome";
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

module.exports = {
  /**
   * User Receiving Message
   *
   * @param req
   * @param res
   * @returns {Promise<*>}
   */

  listenToMessage: async (req, res) => {
    //destructuring the response
    let message = req.body.Body;
    let senderID = req.body.From;
    // Twilio Client
    const client = require("twilio")(accountSid, authToken, {
      lazyLoading: true,
    });
    //github token authorization
    const token = process.env.ACCESS_TOKEN;
    const headers = {
      Authorization: `Token ${token}`,
    };

    try {
      const response = await axios.get(
        `https://api.github.com/users/${message}`,
        {
          method: "GET",
          headers: headers,
        }
      );
      const data = response.data;
      console.log(data);
      await sendMessage(
        `Search results for user: ${data.login}\nName: ${data.name}\nBio: ${data.blog}\nLives in ${data.location}\nNumber of Repos: ${data.public_repos}\nFollowers: ${data.followers}\nFollowing: ${data.following}\nURL: ${data.html_url}`,
        senderID
      );
    } catch (error) {
      console.log(`Error at listenToMessage --> ${error}`);
    }
  },
};
