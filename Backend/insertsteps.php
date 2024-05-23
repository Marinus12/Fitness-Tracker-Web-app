<?php
include "connect.php";

$input = file_get_contents('php://input');
$data = json_decode($input,true);
$message = array();

$StepID= $data['StepID'];
$UserID= $data['UserID'];
$Date = $data['Date'];
$number_of_steps = $data['number_of_steps'];

$user = mysqli_query($db, "INSERT INTO `steps`(`StepID`, `UserID`, `Date`, `number_of_steps`) VALUES ('$StepID','$UserID','$Date','$number_of_steps')");
 
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
