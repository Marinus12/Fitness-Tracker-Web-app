<?php
include "connect.php";

$input = file_get_contents('php://input');
$data = json_decode($input,true);
$message = array();

$calisthenicsID= $data['calisthenicsID'];
$activityID = $data['activityID'];
$UserID= $data['UserID'];
$calisthenics_Workouts = $data['calisthenics_Workouts'];
$sets = $data['sets'];
$Rets = $data['reps'];
$duration = $data['duration'];
$notes = $data['notes'];



$user = mysqli_query($db, "INSERT INTO   `calisthenics`(`calisthenicsID`, `activityID`, `UserID`, `calisthenics_workouts`, `sets`, `reps`, `duration`, `notes`)
VALUES ('$calisthenicsID','$activityID','$UserID','$calisthenics_workouts','$sets','$reps','$duration','$notes')");
 
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
