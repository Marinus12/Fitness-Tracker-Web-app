<?php
$user ='root';
$password = "";
$db = "fitness";

// Create connection
$db = new mysqli("localhost", $user, $password, $db)or die("Connection failed: " . $db->connect_error);
?>