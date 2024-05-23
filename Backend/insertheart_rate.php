<?php
include "connect.php";

$input = file_get_contents('php://input');
$data = json_decode($input,true);
$message = array();

$HeartrateID = $data['HeartrateID'];
$UserID = $data['UserID'];
$Heart_rate_value = $data['Heart_rate_value'];
$Date_time_of_heart_rate_measurement = $data['Date_time_of_heart_rate_measurement'];

$user = mysqli_query($db, "INSERT INTO `heart_rate`(`HeartrateID`, `UserID`, `Heart_rate_value`, `Date_time_of_heart_rate_measurement`) VALUES (`$HeartrateID`,`$UserID`,`$Heart_rate_value`,`$Date_time_of_heart_rate_measurement')");
 
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
