<?php
include "connect.php";

$input = file_get_contents('php://input');
$data = json_decode($input,true);
$message = array();

$activityID= $dataactivityID['activityID'];
$running = $data['running'];
$cycling = $data['cycling'];
$walking = $data['walking'];
$strength_training = $data['strength_training'];
$yoga_or_pilates = $data['yoga_or_pilates'];
$cardio_workout = $data['cardio_workout'];
$sports = $data['sports'];
$calisthenics = $data['calisthenics'];
$UserID= $data['UserID'];

$user = mysqli_query($db, "UPDATE `user` SET `activityID`='$activityID',`running`='$running',`cycling`='$cycling',
    `walking`='$walking',`strength_training`='$strength_training','yoga_or_pilates'='$yoga_or_pilates',
    `cardio_workout`='$cardio_workout',`sports`='$sports`,'calisthenics='$calisthenics','UserID'='$UserID')");
 
$user = mysqli_query($db, "UPDATE 'login' SET  'email'='$email' WHERE 'UserID' = $UserID");
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