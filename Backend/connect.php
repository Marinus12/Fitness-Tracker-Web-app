<?php
$user ='root';
$password = "";
$db = "fitness";

// Create connection
$db = new mysqli("localhost", $user, $password, $db);

// Check connection
if ($db->connect_error) {
  die("Connection failed: " . $db->connect_error);
}
echo "Connected successfully";
?>