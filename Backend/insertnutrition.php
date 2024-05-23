<?php
include "connect.php";

$input = file_get_contents('php://input');
$data = json_decode($input,true);
$message = array();

$NutritionID= $data['NutritionID'];
$UserID= $data['UserID'];
$Meal_type = $data['Meal_type'];
$Food_item = $data['Food_item'];
$Quantity = $data['Quantity'];
$Calories = $data['Calories'];

$user = mysqli_query($db, "INSERT INTO `nutrition`(`NutritionID`, `UserID`, `Meal_type`, `Food_item`, `Quantity`, `Calories`) VALUES (`$NutritionID`,`$UserID`,`$Meal_type`,`$Food_item`,`$Quantity`,`$Calories`)");
 
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
