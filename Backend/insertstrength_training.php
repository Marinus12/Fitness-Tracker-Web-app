<?php
include "connect.php";

$input = file_get_contents('php://input');
$data = json_decode($input,true);
$message = array();

$strength_trainingID= $data['cyclingID'];
$activityID = $data['activityID'];
$UserID= $data['UserID'];
$duration = $data['duration'];
$exercise = $data['exercise'];



$user = mysqli_query($db, "INSERT INTO   `strength_training`(`strength_trainingID`, `activityID`, `UserID`, `duration`,'exercise')
VALUES ('$strength_training','$activityID','$UserID','$duration','$exercise')");
 
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