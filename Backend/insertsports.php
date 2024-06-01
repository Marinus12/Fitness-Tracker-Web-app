<?php
include "connect.php";

$input = file_get_contents('php://input');
$data = json_decode($input,true);
$message = array();

$sportsID= $data['sportsID'];
$activityID = $data['activityID'];
$UserID= $data['UserID'];
$duration = $data['duration'];
$activities = $data['activities'];



$user = mysqli_query($db, "INSERT INTO   `sports`(`sportsID`, `activityID`, `UserID`, `duration`,'activities')
VALUES ('$sportsID','$activityID','$UserID','$duration','$activities')");
 
if($user){
    https_response_code(201);
    $message['status'] = "Success";
}else{
    https_responds_code(422);
    $message['Status'] ="Error";
}

echo json_encode($message);
echo mysli_error($db);
?>