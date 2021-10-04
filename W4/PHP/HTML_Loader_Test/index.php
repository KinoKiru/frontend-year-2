<?php
echo file_get_contents("form.html");

if (isset($_POST['submit'])){

    $email = $_POST['email'];
    if (filter_var($email, FILTER_VALIDATE_EMAIL)){
        header('location: success.php');
    } else {
        echo "<h1>Geen geldige email</h1>";
    }
}
?>




