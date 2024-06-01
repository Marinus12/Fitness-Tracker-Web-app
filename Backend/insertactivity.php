<?php
include "connect.php";

$input = file_get_contents('php://input');
$data = json_decode($input,true);
$message = array();

$activityID = $data['ActivityID'];
$running = $data['running'];
$cycling = $data['cycling'];
$walking = $data['walking'];
$strength_training = $data['strength_training'];
$yoga_or_pilates = $data['yoga_or_pilates'];
$cardio_workout	= $data['cardio_workout'];
$sports = $data['sports'];
$calisthenics = $data['calisthenics'];
$UserID = $data['UserID'];

$user = mysqli_query($db,"INSERT INTO `activity`(`activityID`, `running`, `cycling`, `walking`, `strength_training`, `yoga_or_pilates`, `cardio_workout`, `sports`, `calisthenics`, `UserID`)
 VALUES ('$activityID','$running','$cycling','$walking','$strength_training','$yoga_or_pilates','$cardio_workout','$sports','$calisthenics','$UserID')");
 
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
