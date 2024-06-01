<?php
include "connect.php";

$input = file_get_contents('php://input');
$data = json_decode($input,true);
$message = array();

$yoga_or_pilatesID= $data['yoga_or_pilatesID'];
$activityID = $data['activityID'];
$UserID= $data['UserID'];
$duration = $data['duration'];
$session_type = $data['session_type'];
$poses_performed = $data['poses_performed'];
$notes = $data['notes'];


$user = mysqli_query($db, "INSERT INTO  `yoga_or_pilates`(`yoga_or_pilatesID`, `activityID`, `UserID`, `duration`, `session_type`, `poses_performed`, `notes`)
VALUES ('$yoga_or_pilatesID',$activityID','$UserID','$duration','$session_type','$poses_performed','$notes')");
 
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