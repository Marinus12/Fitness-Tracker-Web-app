<?php
include "connect.php";

$input = file_get_contents('php://input');
$data = json_decode($input,true);
$message = array();

$cyclingID= $data['cyclingID'];
$activityID = $data['activityID'];
$UserID= $data['UserID'];
$duration = $data['duration'];
$distance_covered = $data['distance_covered'];
$notes = $data['notes'];



$user = mysqli_query($db, "INSERT INTO   `cycling`(`cyclingID`, `activityID`, `UserID`, `duration`,'distance_covered`,'notes`)
VALUES ('$cyclingID','$activityID','$UserID','$duration','$distance_covered','$notes')");
 
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