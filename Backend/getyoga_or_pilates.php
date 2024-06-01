<?php
include "connect.php";


$user = mysqli_query($db,"SELECT * FROM `yoga_or_pilates` WHERE 1");
$data = array();
while($row = mysqli_fetch_object($user)){
    $data[] = $row;
}
echo json_encode($data);
?>