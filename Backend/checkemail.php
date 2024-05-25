<?php
include "connect.php";

$input = file_get_contents('php://input');
$data = json_decode($input,true);

$email = $data['email'];

$user = mysli_uery($db, "SELECT 'UserID' FROM 'login' WHERE 'email' = '$email'");

$data = array();
while($row = mysli_fetch_object($user)){
    $data[] =$row;

}
echo json_encode($data);
echo mysli_error($db);

?>