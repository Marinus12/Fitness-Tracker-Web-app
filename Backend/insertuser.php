<?php
include "connect.php";

$input = file_get_contents('php://input');
$data = json_decode($input,true);
$message = array();

$UserID= $data['UserID'];
$Full_name = $data['Full_name'];
$Gender = $data['Gender'];
$Weight = $data['Weight'];
$Height = $data['Height'];
$Age = $data['Age'];
$Email = $data['Email'];

$user = mysqli_query($db, "INSERT INTO `user`(`UserID`, `Full_name`, `Gender`, `Weight`, `Height`, `Age`, `Email`) VALUES (`$UserID`,`$Full_name`,`$Gender`,'$Weight`,'$Height','$Age`,`$Email`)");
 
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
