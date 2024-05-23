<?php
include "connect.php";

$input = file_get_contents('php://input');
$data = json_decode($input,true);
$message = array();

$ActivityID = $data['ActivityID'];
$Name = $data['Name'];
$UserID = $data['UserID'];

$user = mysqli_query($db,"INSERT INTO `activity`(`ActivityID`, `Name`, `UserID`) VALUES ('$ActivityID','$Name','$UserID')");
 
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
