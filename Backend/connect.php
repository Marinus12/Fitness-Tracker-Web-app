<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Method: POST, GET, DELETE, PUT, PATCH,OPTION');
header('Access-Control-Allow-Header: token, Content-type');
header('Content-type: text/plain');
header('Content-Length: 0');

$user ='root';
$password = "";
$db = "fitness";

// Create connection
$db = new mysqli("localhost", $user, $password, $db)or die("Connection failed: " . $db->connect_error);
?>