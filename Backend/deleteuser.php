<?php
include "connect.php";

$input = file_get_contents('php://input');
$data = json_decode($input,true);

$UserID = $data['UserID'];

$user = mysqli_query($db, "DELETE FROM 'login' WHERE 'UserID' =$UserID");

echo mysqli_query($db);
?>
