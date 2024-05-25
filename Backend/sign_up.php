<?php
include "connect.php";

$input = file_get_contents('php://input');
$data = json_decode($input,true);

$Password = md5($data['Password']);
$Email = $data['Email'];
$First_name = $data['First_name'];
$Last_name = $data['Last_name'];

$user = mysqli_query($db, "INSERT INTO ``sign_up`( `Password`, `Email`, `First_name`, 'Last_name') 
                                          VALUES ('$Password','$Email','$First_name','$Last_name')");

$userId = mysqli_query($db, "SELECT UserID FROM `sign_up` WHERE Email = '$Email'");

$data = array();
while($row = mysqli_fetch_object($userId)){
    $data[] = $row;
}

echo json_encode($userId);
echo mysli_error($db);
?>
