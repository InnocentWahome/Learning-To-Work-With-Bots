<?php
// inbound -- user sending message to twilio

$sid = "AC86868678f517b851d044e933039b8a1c";
$token = "0d948312dff51a8ae597a0044644b1f8"; 
header("content-type: text/xml");
?>    

<Response>
    <Message>
        Thanks for messaging me. This is wahome from php twilio
    </Message>
</Response>

<!-- Then start a php server  at port 8000 and ngrok at the same -->
<!-- php -S localhost:8000 -->
<!-- ngrok  http 8000    /inbound.php-->

