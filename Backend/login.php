<?php
include "connect.php";

$input = file_get_contents('php://input');
$data = json_decode($input,true);

if(isset($data) && !empty($date)){

$Password = md5(trim($data['Password']));
$Email = $data['Email'];

$user = mysqli_query($db, "SELECT DISTINCT * FROM `sign_up` WHERE Email = '$Email' AND Password = '$Password'");

if($user){
    $data = array();
    while($row = mysqli_fetch_object($user)){
        $data[] = $row;
    }
}else{
    http_response_code(422);
}
}
echo json_encode($data);
echo mysli_error($db);
?>