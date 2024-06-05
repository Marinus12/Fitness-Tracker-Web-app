<?php
include "connect.php";

$input = file_get_contents('php://input');
$data = json_decode($input,true);

$activityID = $data['activityID'];

$user = mysqli_query($db, "DELETE FROM 'activity' WHERE 'activityID' =$activityID");

echo mysqli_query($db);
?>