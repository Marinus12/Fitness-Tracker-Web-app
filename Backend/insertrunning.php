<?php
include "connect.php";

$input = file_get_contents('php://input');
$data = json_decode($input,true);
$message = array();

$cyclingID= $data['cyclingID'];
$activityID = $data['activityID'];
$UserID= $data['UserID'];
$runningID = $data['runningID'];
$distance_covered = $data['distance_covered'];
$duration = $data['duration'];
$notes = $data['notes'];



$user = mysqli_query($db, "INSERT INTO   `running`(`activityID`, `UserID`,'runningID','distance_covered`,'duration','notes`)
VALUES ('$activityID','$UserID','$runningID','$distance_covered','$$duration','$notes')");
 
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