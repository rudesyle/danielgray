<?php
    error_reporting(-1);
    ini_set('display_errors', 'On');
    set_error_handler("var_dump");

    $date = date_create()->format('mmddYYhhmmss');
    $fileName = "CustomerRequests/ContactRequest_" . $date . ".txt";

    $contactFile = fopen($fileName, "a") or die("Unable to open file!");
    $txt = "Name is : " . $_POST["contact_name"] . "\n";
    fwrite($contactFile, $txt);
    $txt = "Email is : " . $_POST["contact_email"] . "\n";
    fwrite($contactFile, $txt);
    $txt = "Message is : " . $_POST["contact_msg"] . "\n";
    fwrite($contactFile, $txt);
    fclose($contactFile);
    
?> 