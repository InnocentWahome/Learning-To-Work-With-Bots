require('dotenv').config();

//including required libraries
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));

app.post('/message', (req, res) => {
    console.log(req.body);
    const msgFrom = req.body.From;
    const msgBody = req.body.Body;

    res.send(`
    <Response>
    <Message>
        Hello ${msgFrom}! You said ${msgBody}
    </Message>
    </Response>
    `)
})

app.listen(3000, () => {
    console.log('App listening on port 3000!');
})