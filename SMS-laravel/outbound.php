<?php

//sending message from php twilio --outbound
require __DIR__ . '/vendor/autoload.php';
use Twilio\Rest\Client;

$sid = "AC86868678f517b851d044e933039b8a1c";
$token = "0d948312dff51a8ae597a0044644b1f8"; 
$client = new Client($sid, $token);

$client->messages->create(
    "+254771251752",
    array(
        'from' => '+12016544208',
        'body' => 'Hello from PHP Twilio!',
    )
    );


?>    