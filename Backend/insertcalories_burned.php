<?php
include "connect.php";

$input = file_get_contents('php://input');
$data = json_decode($input,true);
$message = array();

$Calories_burned_ID = $data['Calories_burned_ID'];
$UserID = $data['UserID'];
$Date_time_of_activity = $data['Date_time_of_activity'];
$Calories_burned= $data['Calories_burned'];
$NutritionID = $data['NutritionID'];

$user = mysqli_query($db, "INSERT INTOINSERT INTO `calories_burned`(`Calories_burned_ID`, `UserID`, `Date_time_of_activity`, `Calories_burned`, `NutritionID`) VALUES ('$Calories_burned_ID','$UserID','$Date_time_of_activity','$lories_burned','$utritionID')");
 
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
