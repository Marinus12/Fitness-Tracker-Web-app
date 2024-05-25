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

$user = mysqli_query($db, "UPDATE `user` SET `UserID`='$UserID',`Full_name`='$Full_name',`Gender`='$Gender',
                                `Weight`='$Weight',`Height`='$Height',`Age`='$Age',`Email`='$Email`)");
 
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
