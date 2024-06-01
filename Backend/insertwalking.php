<?php
include "connect.php";

$input = file_get_contents('php://input');
$data = json_decode($input,true);
$message = array();

$walkingID= $data['walkingID'];
$UserID= $data['UserID'];
$activityID = $data['activityID'];
$distance_covered = $data['distance_covered'];
$note = $data['note'];
$duration = $data['duration'];
$number_of_steps = $data['number_of_steps'];


$user = mysqli_query($db, "INSERT INTO  `walking`(`walkingID`, `UserID`, `activityID`, `distance_covered`, `note`, `duration`, `number_of_steps`) 
VALUES ('$walkingID','$UserID','$activityID','$distance_covered','$note','$duration','$number_of_steps')");
 
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
